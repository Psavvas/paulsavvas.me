import type { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { getBlogPostBySlug } from '@/lib/blog';
import { MDXRemote } from 'next-mdx-remote/rsc';

type BlogPostPageProps = {
  params: Promise<{ slug: string }>;
};

export async function generateMetadata({
  params,
}: BlogPostPageProps): Promise<Metadata> {
  const { slug } = await params;
  const post = getBlogPostBySlug(slug);

  if (!post) {
    return {
      title: 'Post not found | Paul Savvas',
    };
  }

  return {
    title: `${post.title} | Paul Savvas`,
    description: post.summary,
  };
}

export default async function BlogPostPage({ params }: BlogPostPageProps) {
  const { slug } = await params;
  const post = getBlogPostBySlug(slug);

  if (!post) notFound();

  return (
    <div className="min-h-screen bg-zinc-50 font-sans dark:bg-neutral-950 transition-colors">
      <main className="mx-auto w-full max-w-6xl bg-white px-6 py-16 dark:bg-neutral-950 sm:px-16 sm:py-24 animate-fade-in">
        <div className="max-w-3xl">
          <Link
            href="/blog"
            className="inline-flex items-center text-sm font-medium text-neutral-600 transition-colors hover:text-neutral-900 dark:text-neutral-400 dark:hover:text-neutral-100 animate-slide-in-left"
          >
            ← Back to Blog
          </Link>

          <header className="mt-8 animate-fade-in-up">
            <p className="text-sm text-neutral-600 dark:text-neutral-400">
              {post.date}
            </p>
            <h1 className="mt-3 text-4xl font-semibold tracking-tight text-neutral-900 dark:text-neutral-100 sm:text-5xl">
              {post.title}
            </h1>
            <p className="mt-6 text-base leading-7 text-neutral-700 dark:text-neutral-300">
              {post.summary}
            </p>

            {post.tags && post.tags.length > 0 ? (
              <div className="mt-6 flex flex-wrap gap-2">
                {post.tags.map((tag) => (
                  <span
                    key={tag}
                    className="inline-flex items-center rounded-full bg-neutral-100 px-3 py-1 text-xs font-medium text-neutral-700 dark:bg-neutral-900 dark:text-neutral-300"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            ) : null}
          </header>

          <article className="mt-10 space-y-5 animate-fade-in-up prose prose-neutral dark:prose-invert max-w-none">
            <MDXRemote source={post.content} />
          </article>
        </div>
      </main>
    </div>
  );
}
