# Favicon Upload Instructions

## Where to Upload Your Favicon Files

To complete the dynamic favicon setup (light/dark mode support), please upload your two favicon files to the following location:

**Directory:** `/public/`

**Required Files:**
1. `favicon-light.png` - This will be displayed when the user's system is in light mode
2. `favicon-dark.png` - This will be displayed when the user's system is in dark mode

**Important:** Until these files are uploaded, the browser will show 404 errors for the missing favicons. This is expected behavior and will be resolved once you upload the files to the `/public/` directory.

## File Requirements

- **Format:** PNG or SVG (both are supported)
- **Size:** 
  - PNG: 32x32 or 64x64 pixels (standard favicon sizes)
  - SVG: Any size (vector graphics scale automatically)
- **Naming:** 
  - Light mode favicon: `favicon-light.png` or `favicon-light.svg`
  - Dark mode favicon: `favicon-dark.png` or `favicon-dark.svg`
  - **Important:** Both files must use the same format (both PNG or both SVG)
- **Note:** SVG is recommended for favicons as they scale perfectly at any size and usually have smaller file sizes. If you upload SVG files, you'll need to update the file extensions in `app/layout.tsx` from `.png` to `.svg`.

## How to Upload

1. Navigate to the `public` directory in your repository
2. Upload or copy your two favicon files:
   - For PNG: `favicon-light.png` and `favicon-dark.png`
   - For SVG: `favicon-light.svg` and `favicon-dark.svg`
3. If using SVG, update the file extensions in `app/layout.tsx` (change `.png` to `.svg` in the three favicon link tags)
4. Commit the files to the repository

## How It Works

The website is now configured to automatically switch between favicons based on the user's system preferences:

- When a user has their system set to **light mode**, they will see `favicon-light.png`
- When a user has their system set to **dark mode**, they will see `favicon-dark.png`
- If the browser doesn't support `prefers-color-scheme`, it will default to `favicon-light.png`

## Technical Details

The implementation uses media queries in the HTML `<link>` tags:

```html
<!-- For PNG files (current default): -->
<link rel="icon" href="/favicon-light.png" media="(prefers-color-scheme: light)" />
<link rel="icon" href="/favicon-dark.png" media="(prefers-color-scheme: dark)" />
<link rel="icon" href="/favicon-light.png" /> <!-- fallback -->

<!-- For SVG files (change .png to .svg in app/layout.tsx): -->
<link rel="icon" href="/favicon-light.svg" media="(prefers-color-scheme: light)" />
<link rel="icon" href="/favicon-dark.svg" media="(prefers-color-scheme: dark)" />
<link rel="icon" href="/favicon-light.svg" /> <!-- fallback -->
```

This approach is supported by all modern browsers and will automatically respond to system theme changes. SVG favicons are well-supported in modern browsers and provide the best quality at any size.
