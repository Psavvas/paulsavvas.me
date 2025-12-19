'use client';

import { useEffect, useMemo } from 'react';

import { resolveRedirectDestination } from '../redirects';

type RedirectClientProps = {
  slug: string;
  destination: string;
};

export default function RedirectClient(props: RedirectClientProps) {
  const { slug, destination } = props;
  const resolvedHref = useMemo(() => {
    if (typeof window === 'undefined') return destination;

    const requestUrl = new URL(window.location.href);
    return resolveRedirectDestination({
      destination,
      requestUrl,
    }).toString();
  }, [destination]);

  useEffect(() => {
    if (typeof window === 'undefined') return;
    // Replace so back button doesn't land on the redirect page.
    window.location.replace(resolvedHref);
  }, [resolvedHref]);

  return (
    <div className="min-h-screen bg-zinc-50 font-sans dark:bg-neutral-950 transition-colors">
      <main className="mx-auto w-full max-w-3xl bg-white px-6 py-16 dark:bg-neutral-950 sm:px-16 sm:py-24">
        <h1 className="text-2xl font-semibold tracking-tight text-neutral-900 dark:text-neutral-100">
          Redirecting…
        </h1>
        <p className="mt-4 text-sm text-neutral-700 dark:text-neutral-300">
          Redirecting from <span className="font-mono">/redirect/{slug}</span>.
        </p>
        <p className="mt-4 text-sm text-neutral-700 dark:text-neutral-300">
          If you are not redirected automatically,{' '}
          <a
            className="underline underline-offset-4"
            href={resolvedHref}
            rel="noreferrer"
          >
            click here
          </a>
          .
        </p>
      </main>
    </div>
  );
}
