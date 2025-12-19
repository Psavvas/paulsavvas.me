# Project guide

A quick reference for how this site is structured, how to edit content, and how it ships.

## Stack and conventions

- Next.js App Router + TypeScript with full dynamic server-side rendering (SSR).
- Deployed on Vercel for optimal performance with automatic scaling and dynamic content support.
- Tailwind CSS v4 via PostCSS plugin and a handful of bespoke styles in `app/globals.css` (hero, animations, hover lift).
- Dark/light theming powered by `next-themes`; `ThemeProvider` wraps the app and `ThemeToggle` flips `resolvedTheme` between `light` and `dark`.
- Routing lives under `app/` with a page-per-route; supporting data is colocated next to the route when it is only used there.

## Routes and content

- Home (`app/page.tsx`): hero section styled in `globals.css` under the `.hero` namespace.
- About/Projects/Contact (`app/about|projects|contact/page.tsx`): content-first pages with metadata exported alongside the component.
- Blog index (`app/blog/page.tsx`): renders from the static `posts` array in `app/blog/posts.ts`. Shows a "Coming soon" card when the list is empty.
- Blog detail (`app/blog/[slug]/page.tsx`): uses `findPostBySlug` with dynamic SSR rendering; `content` is an array of paragraphs. No static pre-rendering needed.
- Redirects (`app/redirect/[slug]/page.tsx`): short links defined in `app/redirect/redirects.ts` under the `REDIRECTS` map. `RedirectClient` preserves incoming query params and replaces history to avoid back-button loops. Missing slugs render `app/redirect/not-found.tsx`. Uses dynamic rendering for maximum flexibility.
- 404s: `app/not-found.tsx` for the main site and a scoped `redirect/not-found.tsx` for short-link misses.

## Editing content

- Blog posts: add an entry to `app/blog/posts.ts` with `slug`, `title`, ISO `date`, `summary`, optional `tags`, and `content` paragraphs. Keep slugs unique to avoid collisions.
- Projects: adjust the `projects` array in `app/projects/page.tsx`; `repo` accepts either `owner/name` or a full URL.
- Contact email: replace `your.email@example.com` in `app/contact/page.tsx` when you are ready to publish a real address.
- Redirects: extend the `REDIRECTS` record; absolute URLs are recommended, but site-relative paths work too.

## Local development

1. Install deps: `pnpm install`
2. Run dev server: `pnpm dev` and open <http://localhost:3000>
3. Format/lint/typecheck: `pnpm format:check`, `pnpm lint`, `pnpm typecheck`

## Deployment

- Deployment is configured for Vercel via `vercel.json` with automatic SSR and optimized edge delivery.
- All pages use dynamic rendering to support real-time content updates.
- No static export or GitHub Pages configuration needed.
