import type { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { getProjectBySlug, getAllProjectSlugs } from '@/lib/projects';
import { MDXRemote } from 'next-mdx-remote/rsc';

type ProjectPageProps = {
  params: Promise<{ slug: string }>;
};

export async function generateStaticParams() {
  const slugs = getAllProjectSlugs();
  return slugs.map((slug) => ({
    slug,
  }));
}

export async function generateMetadata({
  params,
}: ProjectPageProps): Promise<Metadata> {
  const { slug } = await params;
  const project = getProjectBySlug(slug);

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
  const project = getProjectBySlug(slug);

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
    <div className="min-h-screen bg-white font-sans dark:bg-neutral-950 transition-colors">
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

          <article className="mt-12 space-y-8 animate-fade-in-up prose prose-neutral dark:prose-invert max-w-none">
            <MDXRemote source={project.content} />
          </article>
        </div>
      </main>
    </div>
  );
}
