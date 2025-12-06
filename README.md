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

## Project Structure

```text
.
├── css/              # Stylesheets
├── js/               # JavaScript files
│   ├── app.js       # Main application file
│   └── vendor/      # Third-party libraries
├── img/             # Images and favicon
├── project_pages/   # Project detail pages
├── index.html       # Main page
├── 404.html         # 404 error page
├── build.js         # Production build script
└── dev-server.js    # Development server script
```

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

## License

MIT License - see LICENSE.txt for details
