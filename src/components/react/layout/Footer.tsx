import { memo } from 'react';

function Footer() {
  return (
    <footer className="w-full border-t border-gray-200 dark:border-neutral-800 transition-colors animate-fade-in-up animation-delay-100">
      <div className="mx-auto max-w-7xl px-6 py-6 flex flex-col sm:flex-row items-center justify-between text-sm text-gray-500 dark:text-neutral-400">
        <span>
          © {new Date().getFullYear()} Paul Savvas. All rights reserved.
        </span>
        <a
          href="https://nextjs.org"
          className="mt-2 sm:mt-0 hover:underline"
          target="_blank"
          rel="noopener noreferrer"
        >
          Built with Next.js
        </a>
      </div>
    </footer>
  );
}

export default memo(Footer);
