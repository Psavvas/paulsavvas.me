import Link from 'next/link';

export default function NotFound() {
  return (
    <div className="min-h-screen bg-zinc-50 font-sans dark:bg-neutral-950 transition-colors">
      <main className="mx-auto flex w-full max-w-4xl flex-col gap-6 bg-white px-6 py-16 text-neutral-900 dark:bg-neutral-950 dark:text-neutral-100 sm:px-16 sm:py-24">
        <p className="text-sm font-medium uppercase tracking-wider text-neutral-600 dark:text-neutral-400">
          404
        </p>
        <h1 className="text-3xl font-semibold tracking-tight sm:text-4xl">
          Page not found.
        </h1>
        <p className="text-base leading-7 text-neutral-700 dark:text-neutral-300">
          The page you are looking for does not exist. It may have been moved or
          removed.
        </p>
        <div className="flex flex-wrap gap-3">
          <Link
            className="inline-flex items-center justify-center rounded-md border border-neutral-200 bg-white px-4 py-2 text-sm font-medium text-neutral-900 transition-colors hover:bg-neutral-50 dark:border-neutral-800 dark:bg-neutral-950 dark:text-neutral-100 dark:hover:bg-neutral-900 hover-lift"
            href="/"
          >
            Return home
          </Link>
          <Link
            className="inline-flex items-center justify-center rounded-md border border-neutral-200 bg-white px-4 py-2 text-sm font-medium text-neutral-900 transition-colors hover:bg-neutral-50 dark:border-neutral-800 dark:bg-neutral-950 dark:text-neutral-100 dark:hover:bg-neutral-900 hover-lift"
            href="/blog"
          >
            Visit the blog
          </Link>
        </div>
      </main>
    </div>
  );
}
