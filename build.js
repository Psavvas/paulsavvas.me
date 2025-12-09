#!/usr/bin/env bun
import { existsSync, mkdirSync, rmSync, cpSync } from 'fs';
import { join } from 'path';

const DIST_DIR = 'dist';

// Clean dist directory
if (existsSync(DIST_DIR)) {
  console.log('🧹 Cleaning dist directory...');
  rmSync(DIST_DIR, { recursive: true, force: true });
}

// Create dist directory
mkdirSync(DIST_DIR, { recursive: true });
console.log('📁 Created dist directory');

// Bundle JavaScript with Bun
console.log('📦 Bundling JavaScript...');
await Bun.build({
  entrypoints: ['./js/app.js'],
  outdir: './dist/js',
  minify: true,
  sourcemap: 'external',
});
console.log('✅ JavaScript bundled');

// Copy static files
console.log('📋 Copying static files...');
const filesToCopy = [
  { from: 'index.html', to: 'index.html' },
  { from: 'redirect.html', to: 'redirect.html' },
  { from: 'redirects.json', to: 'redirects.json' },
  { from: 'infantguard.html', to: 'infantguard.html' },
  { from: '404.html', to: '404.html' },
  { from: 'robots.txt', to: 'robots.txt' },
  { from: 'site.webmanifest', to: 'site.webmanifest' },
  { from: '.nojekyll', to: '.nojekyll' },
  { from: 'CNAME', to: 'CNAME' },
  { from: 'css', to: 'css' },
  { from: 'img', to: 'img' },
  { from: 'js/vendor', to: 'js/vendor' },
  { from: 'project', to: 'project' },
];

for (const { from, to } of filesToCopy) {
  const srcPath = join(process.cwd(), from);
  const destPath = join(process.cwd(), DIST_DIR, to);

  if (existsSync(srcPath)) {
    cpSync(srcPath, destPath, { recursive: true });
    console.log(`  ✓ Copied ${from}`);
  } else {
    console.log(`  ⚠ Skipped ${from} (not found)`);
  }
}

console.log('');
console.log('🎉 Build completed successfully!');
console.log(`📂 Output directory: ${DIST_DIR}`);
