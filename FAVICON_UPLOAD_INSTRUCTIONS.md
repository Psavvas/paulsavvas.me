# Favicon Upload Instructions

## Where to Upload Your Favicon Files

To complete the dynamic favicon setup (light/dark mode support), please upload your two favicon files to the following location:

**Directory:** `/public/`

**Required Files:**
1. `favicon-light.png` - This will be displayed when the user's system is in light mode
2. `favicon-dark.png` - This will be displayed when the user's system is in dark mode

## File Requirements

- **Format:** PNG (recommended) or ICO
- **Size:** 32x32 pixels or 64x64 pixels (standard favicon sizes)
- **Naming:** 
  - Light mode favicon: Must be named exactly `favicon-light.png`
  - Dark mode favicon: Must be named exactly `favicon-dark.png`

## How to Upload

1. Navigate to the `public` directory in your repository
2. Upload or copy your two favicon files:
   - `favicon-light.png`
   - `favicon-dark.png`
3. Commit the files to the repository

## How It Works

The website is now configured to automatically switch between favicons based on the user's system preferences:

- When a user has their system set to **light mode**, they will see `favicon-light.png`
- When a user has their system set to **dark mode**, they will see `favicon-dark.png`
- If the browser doesn't support `prefers-color-scheme`, it will default to `favicon-light.png`

## Technical Details

The implementation uses media queries in the HTML `<link>` tags:

```html
<link rel="icon" href="/favicon-light.png" media="(prefers-color-scheme: light)" />
<link rel="icon" href="/favicon-dark.png" media="(prefers-color-scheme: dark)" />
<link rel="icon" href="/favicon-light.png" /> <!-- fallback -->
```

This approach is supported by all modern browsers and will automatically respond to system theme changes.
