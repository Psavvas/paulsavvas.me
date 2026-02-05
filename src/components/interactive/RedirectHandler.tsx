'use client';

import { useEffect, useMemo } from 'react';

interface RedirectHandlerProps {
  slug: string;
  targetUrl: string;
}

export default function RedirectHandler({ slug, targetUrl }: RedirectHandlerProps) {
  const finalUrl = useMemo(() => {
    if (typeof window === 'undefined') return targetUrl;
    
    const currentUrl = new URL(window.location.href);
    const destination = targetUrl.startsWith('/')
      ? new URL(targetUrl, currentUrl.origin)
      : new URL(targetUrl);
      
    // Preserve query parameters
    for (const [key, value] of currentUrl.searchParams.entries()) {
      destination.searchParams.set(key, value);
    }
    
    return destination.toString();
  }, [targetUrl]);

  useEffect(() => {
    if (typeof window === 'undefined') return;
    window.location.replace(finalUrl);
  }, [finalUrl]);

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
            href={finalUrl}
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
