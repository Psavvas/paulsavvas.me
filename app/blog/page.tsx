import type { Metadata } from 'next';
import Link from 'next/link';
import { getAllBlogPosts } from '@/lib/blog';

export const metadata: Metadata = {
  title: 'Blog | Paul Savvas',
  description:
    'Blog posts by Paul Savvas — project notes, lessons learned, and build write-ups.',
};

export default function BlogPage() {
  const posts = getAllBlogPosts();
  
  return (
    <div className="min-h-screen bg-zinc-50 font-sans dark:bg-neutral-950 transition-colors">
      <main className="mx-auto w-full max-w-6xl bg-white px-6 py-16 dark:bg-neutral-950 sm:px-16 sm:py-24 animate-fade-in">
        <header className="max-w-3xl animate-fade-in-up">
          <p className="text-sm font-medium uppercase tracking-wider text-neutral-600 dark:text-neutral-400">
            Blog
          </p>
          <h1 className="mt-3 text-4xl font-semibold tracking-tight text-neutral-900 dark:text-neutral-100 sm:text-5xl">
            Notes and write-ups
          </h1>
          <p className="mt-6 text-base leading-7 text-neutral-700 dark:text-neutral-300">
            Short posts about projects, engineering decisions, and what I learn
            while building.
          </p>
        </header>

        <section className="mt-14">
          {posts.length === 0 ? (
            <div className="rounded-xl border border-neutral-200 bg-white p-6 dark:border-neutral-800 dark:bg-neutral-950 hover-lift">
              <h2 className="text-lg font-semibold text-neutral-900 dark:text-neutral-100">
                Coming soon
              </h2>
              <p className="mt-3 text-sm leading-6 text-neutral-700 dark:text-neutral-300">
                I’m working on the first set of posts now.
              </p>
            </div>
          ) : (
            <div className="grid gap-6">
              {posts.map((post) => (
                <article
                  key={post.slug}
                  className="rounded-xl border border-neutral-200 bg-white p-6 dark:border-neutral-800 dark:bg-neutral-950 hover-lift animate-fade-in-up"
                >
                  <div className="flex flex-col gap-1 sm:flex-row sm:items-baseline sm:justify-between">
                    <h2 className="text-xl font-semibold tracking-tight text-neutral-900 dark:text-neutral-100">
                      <Link
                        href={`/blog/${post.slug}`}
                        className="hover:underline"
                      >
                        {post.title}
                      </Link>
                    </h2>
                    <p className="text-sm text-neutral-600 dark:text-neutral-400">
                      {post.date}
                    </p>
                  </div>

                  <p className="mt-3 text-sm leading-6 text-neutral-700 dark:text-neutral-300">
                    {post.summary}
                  </p>

                  {post.tags && post.tags.length > 0 ? (
                    <div className="mt-4 flex flex-wrap gap-2">
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

                  <div className="mt-6">
                    <Link
                      className="inline-flex items-center justify-center rounded-md border border-neutral-200 bg-white px-4 py-2 text-sm font-medium text-neutral-900 transition-colors hover:bg-neutral-50 dark:border-neutral-800 dark:bg-neutral-950 dark:text-neutral-100 dark:hover:bg-neutral-900 hover-lift"
                      href={`/blog/${post.slug}`}
                    >
                      Read post
                    </Link>
                  </div>
                </article>
              ))}
            </div>
          )}
        </section>
      </main>
    </div>
  );
}
