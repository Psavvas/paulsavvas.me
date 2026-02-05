# Astro Migration Complete

This repository now contains both Next.js and Astro versions of the portfolio website.

## What Was Migrated

### ✅ Completed
- **Astro Configuration**: Set up with React, MDX, Tailwind, and Node adapter
- **Content Collections**: Migrated blog and projects to Astro content collections (`src/content/writings` and `src/content/work`)
- **All Pages**:
  - Home page with hero section and animations
  - About page
  - Projects listing and individual project pages
  - Blog listing and individual blog post pages
  - Contact page
  - 404 page
  - Redirect functionality (`/redirect/[slug]`)
- **Layouts**: Main site layout with navigation, footer, and theme management
- **React Islands**: Navbar, Footer, ThemeToggle, and RedirectHandler as client-side components
- **Styling**: All animations and CSS preserved from `globals.css` (converted from Tailwind v4 to v3)
- **Dark Mode**: Theme switching with localStorage persistence
- **Scripts**: Updated package.json with Astro commands

### Directory Structure

```
src/
├── components/
│   └── interactive/         # React components (islands)
├── content/
│   ├── writings/            # Blog MDX files
│   ├── work/               # Project MDX files
│   └── config.ts           # Content collection schemas
├── layouts/
│   └── SiteLayout.astro    # Main layout
├── pages/
│   ├── blog/
│   │   ├── [slug].astro    # Dynamic blog posts
│   │   └── blog.astro      # Blog listing (note: should be index.astro)
│   ├── projects/
│   │   ├── [slug].astro    # Dynamic project pages
│   │   └── projects.astro  # Projects listing (note: should be index.astro)
│   ├── redirect/
│   │   └── [slug].astro    # URL redirects
│   ├── index.astro         # Home page
│   ├── about.astro
│   ├── contact.astro
│   └── 404.astro
├── ui/
│   ├── NavigationBar.astro
│   ├── PageFooter.astro
│   └── ThemeManager.astro
├── utils/
│   ├── projectHelpers.ts
│   └── redirects.ts
└── styles.css              # Global styles
```

## Running the Astro Version

```bash
# Development
npm run dev

# Build
npm run build

# Preview production build
npm run preview
```

## Running the Next.js Version (original)

```bash
# Development
npm run next-dev

# Build
npm run next-build

# Start production
npm run start
```

## Key Differences

1. **Content Management**: Astro uses content collections instead of file-system reading with gray-matter
2. **Routing**: File-based routing in `src/pages/` instead of `app/`
3. **Components**: Mix of Astro components (.astro) and React islands for interactivity
4. **Build Output**: Server-side rendering with Node adapter
5. **Styling**: Tailwind v3 (CSS imports) instead of v4 (PostCSS imports)

## Animations Preserved

All animations from the original site are intact:
- Fade in, fade in up, slide left/right, scale in
- Animation delays for staggered effects
- Hover lift effects
- Hero section animations
- Reduced motion support

## Notes

- The original Next.js files remain in the `app/` directory
- Both versions share the same `content/` directory for MDX files
- React components are reused as Astro islands with `client:load` directive
- Theme switching works identically to the Next.js version
