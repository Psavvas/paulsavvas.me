import type { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import { notFound } from 'next/navigation';
import { findProjectPageBySlug } from '../projectPages';

type ProjectPageProps = {
  params: Promise<{ slug: string }>;
};

export async function generateMetadata({
  params,
}: ProjectPageProps): Promise<Metadata> {
  const { slug } = await params;
  const project = findProjectPageBySlug(slug);

  if (!project) {
    return {
      title: 'Project not found | Paul Savvas',
    };
  }

  return {
    title: `${project.title} | Paul Savvas`,
    description: project.summary,
  };
}

export default async function ProjectPage({ params }: ProjectPageProps) {
  const { slug } = await params;
  const project = findProjectPageBySlug(slug);

  if (!project) notFound();

  // Format year display
  const yearList = Array.isArray(project.year)
    ? project.year
    : project.year
      ? [project.year]
      : [];
  const yearNums = yearList
    .map((y) => Number(String(y).trim()))
    .filter((n) => !Number.isNaN(n));
  let yearLabel: string | undefined;
  if (yearNums.length === 1) {
    yearLabel = String(yearNums[0]);
  } else if (yearNums.length > 1) {
    const min = Math.min(...yearNums);
    const max = Math.max(...yearNums);
    yearLabel = `${min}–${max}`;
  }

  return (
    <div className="min-h-screen bg-zinc-50 font-sans dark:bg-neutral-950 transition-colors">
      <main className="mx-auto w-full max-w-6xl bg-white px-6 py-16 dark:bg-neutral-950 sm:px-16 sm:py-24 animate-fade-in">
        <div className="max-w-3xl">
          <Link
            href="/projects"
            className="inline-flex items-center text-sm font-medium text-neutral-600 transition-colors hover:text-neutral-900 dark:text-neutral-400 dark:hover:text-neutral-100 animate-slide-in-left"
          >
            ← Back to Projects
          </Link>

          <header className="mt-8 animate-fade-in-up">
            {yearLabel ? (
              <p className="text-sm text-neutral-600 dark:text-neutral-400">
                {yearLabel}
              </p>
            ) : null}
            <h1 className="mt-3 text-4xl font-semibold tracking-tight text-neutral-900 dark:text-neutral-100 sm:text-5xl">
              {project.title}
            </h1>
            <p className="mt-6 text-base leading-7 text-neutral-700 dark:text-neutral-300">
              {project.summary}
            </p>

            {project.tags && project.tags.length > 0 ? (
              <div className="mt-6 flex flex-wrap gap-2">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="inline-flex items-center rounded-full bg-neutral-100 px-3 py-1 text-xs font-medium text-neutral-700 dark:bg-neutral-900 dark:text-neutral-300"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            ) : null}

            {project.links && project.links.length > 0 ? (
              <div className="mt-8 flex flex-wrap gap-3">
                {project.links.map((link) => (
                  <a
                    key={link.href}
                    className={`inline-flex items-center justify-center rounded-md border px-4 py-2 text-sm font-medium transition-colors hover-lift ${
                      link.primary
                        ? 'border-neutral-900 bg-neutral-900 text-white hover:bg-neutral-800 dark:border-neutral-100 dark:bg-neutral-100 dark:text-neutral-900 dark:hover:bg-neutral-200'
                        : 'border-neutral-200 bg-white text-neutral-900 hover:bg-neutral-50 dark:border-neutral-800 dark:bg-neutral-950 dark:text-neutral-100 dark:hover:bg-neutral-900'
                    }`}
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {link.label}
                  </a>
                ))}
              </div>
            ) : null}
          </header>

          <article className="mt-12 space-y-8 animate-fade-in-up">
            {project.sections.map((section, index) => {
              if (section.type === 'heading') {
                const HeadingTag = section.level === 2 ? 'h2' : 'h3';
                const headingClass =
                  section.level === 2
                    ? 'text-2xl font-semibold tracking-tight text-neutral-900 dark:text-neutral-100'
                    : 'text-xl font-semibold tracking-tight text-neutral-900 dark:text-neutral-100';
                return (
                  <HeadingTag key={index} className={headingClass}>
                    {section.content}
                  </HeadingTag>
                );
              }

              if (section.type === 'text') {
                const paragraphs = Array.isArray(section.content)
                  ? section.content
                  : [section.content];
                return (
                  <div key={index} className="space-y-4">
                    {paragraphs.map((paragraph, pIndex) => (
                      <p
                        key={pIndex}
                        className="text-base leading-7 text-neutral-700 dark:text-neutral-300"
                      >
                        {paragraph}
                      </p>
                    ))}
                  </div>
                );
              }

              if (section.type === 'image') {
                return (
                  <figure key={index} className="my-8">
                    <Image
                      src={section.src || ''}
                      alt={section.alt || ''}
                      width={800}
                      height={600}
                      className="w-full rounded-lg border border-neutral-200 dark:border-neutral-800"
                    />
                    {section.caption ? (
                      <figcaption className="mt-3 text-center text-sm text-neutral-600 dark:text-neutral-400">
                        {section.caption}
                      </figcaption>
                    ) : null}
                  </figure>
                );
              }

              if (section.type === 'gallery') {
                return (
                  <div key={index} className="my-8 grid grid-cols-1 gap-6 md:grid-cols-2">
                    {section.items?.map((item, itemIndex) => (
                      <figure key={itemIndex}>
                        <div className="relative aspect-[4/3] w-full overflow-hidden rounded-lg border border-neutral-200 dark:border-neutral-800">
                          <Image
                            src={item.src}
                            alt={item.alt}
                            fill
                            className="object-cover"
                          />
                        </div>
                        {item.caption ? (
                          <figcaption className="mt-3 text-center text-sm text-neutral-600 dark:text-neutral-400">
                            {item.caption}
                          </figcaption>
                        ) : null}
                      </figure>
                    ))}
                  </div>
                );
              }

              if (section.type === 'video') {
                // YouTube embed
                const isYouTube = section.src?.includes('youtube.com') || section.src?.includes('youtu.be');
                if (isYouTube && section.src) {
                  // Extract video ID from YouTube URL
                  let videoId = '';
                  if (section.src.includes('youtu.be/')) {
                    videoId = section.src.split('youtu.be/')[1]?.split('?')[0] || '';
                  } else if (section.src.includes('youtube.com')) {
                    const urlParams = new URLSearchParams(section.src.split('?')[1]);
                    videoId = urlParams.get('v') || '';
                  }

                  return (
                    <figure key={index} className="my-8">
                      <div className="relative aspect-video w-full overflow-hidden rounded-lg border border-neutral-200 dark:border-neutral-800">
                        <iframe
                          src={`https://www.youtube.com/embed/${videoId}`}
                          title={section.alt || 'YouTube video'}
                          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                          allowFullScreen
                          className="absolute inset-0 h-full w-full"
                        />
                      </div>
                      {section.caption ? (
                        <figcaption className="mt-3 text-center text-sm text-neutral-600 dark:text-neutral-400">
                          {section.caption}
                        </figcaption>
                      ) : null}
                    </figure>
                  );
                }
              }

              return null;
            })}
          </article>
        </div>
      </main>
    </div>
  );
}
