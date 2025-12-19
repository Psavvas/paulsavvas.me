import Link from 'next/link';

export default function RedirectNotFound() {
  return (
    <div className="min-h-screen bg-zinc-50 font-sans dark:bg-neutral-950 transition-colors">
      <main className="mx-auto flex w-full max-w-3xl flex-col gap-6 bg-white px-6 py-16 text-neutral-900 dark:bg-neutral-950 dark:text-neutral-100 sm:px-12 sm:py-20">
        <p className="text-sm font-medium uppercase tracking-wider text-neutral-600 dark:text-neutral-400">
          Redirect not found
        </p>
        <h1 className="text-3xl font-semibold tracking-tight sm:text-4xl">
          That shortcut does not exist.
        </h1>
        <p className="text-base leading-7 text-neutral-700 dark:text-neutral-300">
          Check the link for typos or ask the sender for an updated URL. You can
          also head back to the homepage.
        </p>
        <div className="flex flex-wrap gap-3">
          <Link
            className="inline-flex items-center justify-center rounded-md border border-neutral-200 bg-white px-4 py-2 text-sm font-medium text-neutral-900 transition-colors hover:bg-neutral-50 dark:border-neutral-800 dark:bg-neutral-950 dark:text-neutral-100 dark:hover:bg-neutral-900 hover-lift"
            href="/"
          >
            Go home
          </Link>
          <Link
            className="inline-flex items-center justify-center rounded-md border border-neutral-200 bg-white px-4 py-2 text-sm font-medium text-neutral-900 transition-colors hover:bg-neutral-50 dark:border-neutral-800 dark:bg-neutral-950 dark:text-neutral-100 dark:hover:bg-neutral-900 hover-lift"
            href="/redirect/example"
          >
            See a working redirect
          </Link>
        </div>
      </main>
    </div>
  );
}
