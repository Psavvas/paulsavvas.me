import { memo } from 'react';
import ThemeToggle from './ThemeToggle';

const NAV_ITEMS = [
  { name: 'Home', href: '/' },
  { name: 'About', href: '/about' },
  { name: 'Projects', href: '/projects' },
  { name: 'Blog', href: '/blog' },
  { name: 'Contact', href: '/contact' },
];

function Navbar() {
  return (
    <header className="sticky top-0 z-50 border-b border-neutral-200 dark:border-neutral-800 bg-white/80 dark:bg-neutral-950/80 backdrop-blur transition-colors animate-fade-in">
      <nav className="mx-auto grid h-16 md:h-14 max-w-6xl grid-cols-3 items-center px-4 sm:px-6">
        {/* Brand / Name */}
        <div className="flex items-center">
          <a
            href="/"
            className="inline-flex h-10 md:h-8 items-center text-lg font-semibold tracking-tight text-neutral-900 dark:text-neutral-100 transition-colors shrink-0 leading-none animate-slide-in-left"
          >
            PS
          </a>
        </div>

        {/* Navigation Links and Theme Toggle */}
        <div className="flex items-center justify-center animate-fade-in-up animation-delay-100">
          <ul className="flex items-center gap-3 sm:gap-6">
            {NAV_ITEMS.map((item) => (
              <li key={item.href} className="flex">
                <a
                  href={item.href}
                  className="inline-flex h-10 md:h-8 items-center text-sm font-medium text-neutral-600 dark:text-neutral-400 transition-colors hover:text-neutral-900 dark:hover:text-neutral-100 leading-none"
                >
                  {item.name}
                </a>
              </li>
            ))}
          </ul>
        </div>
        <div className="flex items-center justify-end">
          <div className="inline-flex h-10 md:h-8 items-center animate-slide-in-right animation-delay-100">
            <ThemeToggle />
          </div>
        </div>
      </nav>
    </header>
  );
}

export default memo(Navbar);
