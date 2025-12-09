# Paul Savvas Portfolio Website

Personal portfolio website built with HTML, CSS, and JavaScript.

## Prerequisites

- [Bun](https://bun.sh) - Fast JavaScript runtime and toolkit

## Installation

```bash
bun install
```

## Development

Start the development server with file watching:

```bash
bun start
# or
bun run dev
```

This will start a local server at `http://localhost:3000` and watch for file changes.

## Production Build

Build the optimized production bundle:

```bash
bun run build
```

The built files will be in the `dist/` directory.

## Code Formatting

This project uses [Prettier](https://prettier.io/) for consistent code formatting.

Check if your code is formatted correctly:

```bash
bun run format:check
```

Automatically format all files:

```bash
bun run format
```

**Note:** The CI workflow automatically formats code on push, so manual formatting is optional.

## Project Structure

```text
.
├── css/              # Stylesheets
├── js/               # JavaScript files
│   ├── app.js       # Main application file
│   └── vendor/      # Third-party libraries
├── img/             # Images and favicon
├── project/         # Project detail pages
├── index.html       # Main page
├── 404.html         # 404 error page
├── redirect.html    # Generic redirect handler
├── redirects.json   # Redirect configuration
├── build.js         # Production build script
└── dev-server.js    # Development server script
```

## Redirect System

This project uses a centralized redirect system instead of individual redirect HTML files.

To add a new redirect:

1. Add an entry to `redirects.json`:

```json
{
  "infantguard": "https://drive.proton.me/urls/GTHB40AV9M#bUy6nRmkFvVw",
  "newredirect": "https://example.com"
}
```

2. Create a simple HTML file (e.g., `newredirect.html`):

```html
<!doctype html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta http-equiv="refresh" content="0; url=/redirect.html?to=newredirect" />
    <title>Redirecting...</title>
    <script>
      window.location.href = '/redirect.html?to=newredirect';
    </script>
  </head>
  <body>
    <p>
      If you are not redirected,
      <a href="/redirect.html?to=newredirect">click here</a>.
    </p>
  </body>
</html>
```

**Note:** All redirects are case-insensitive (e.g., `/InfantGuard`, `/infantguard`, and `/INFANTGUARD` all work).

## Migration Notes

This project has been migrated from Webpack to Bun for faster builds and simpler configuration.

### What Changed

- Removed Webpack and all related dependencies
- Created `build.js` for production builds using Bun's native bundler
- Created `dev-server.js` for local development with file watching
- Updated `package.json` scripts to use Bun

### Benefits

- ⚡️ Faster build times with Bun's native bundler
- 🪶 Zero dependencies required
- 🎯 Simpler configuration with pure JavaScript
- 🔧 Native TypeScript support (if needed in the future)

## CI/CD

This project uses GitHub Actions for continuous integration and deployment:

- **CI Workflow** (`ci.yml`): Runs on all pushes and pull requests
  - Auto-formats code with Prettier
  - Builds the project
  - Verifies build output
- **Deploy Workflow** (`deploy.yml`): Deploys to GitHub Pages on push to `main`
  - Builds the production bundle
  - Deploys to GitHub Pages
  - Includes build verification checks
