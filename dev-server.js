#!/usr/bin/env bun
import { watch } from 'fs';
import { join } from 'path';

const PORT = 3000;

console.log('🚀 Starting development server...');
console.log(`📁 Serving files from: ${process.cwd()}`);
console.log(`🌐 Server running at: http://localhost:${PORT}`);
console.log('👀 Watching for file changes...\n');

// Create a simple HTTP server using Bun
const server = Bun.serve({
  port: PORT,
  async fetch(req) {
    const url = new URL(req.url);
    let pathname = url.pathname;

    // Default to index.html for root
    if (pathname === '/') {
      pathname = '/index.html';
    }

    // Construct file path
    const filePath = join(process.cwd(), pathname);

    try {
      const file = Bun.file(filePath);
      const exists = await file.exists();

      if (!exists) {
        // Try to serve 404.html
        const notFoundFile = Bun.file(join(process.cwd(), '404.html'));
        if (await notFoundFile.exists()) {
          return new Response(await notFoundFile.text(), {
            status: 404,
            headers: { 'Content-Type': 'text/html' },
          });
        }
        return new Response('404 Not Found', { status: 404 });
      }

      return new Response(file);
    } catch (error) {
      console.error(`Error serving ${pathname}:`, error);
      return new Response('Internal Server Error', { status: 500 });
    }
  },
});

// Watch for file changes
const watchPaths = ['js', 'css', 'index.html', 'project'];

watchPaths.forEach(path => {
  try {
    watch(path, { recursive: true }, (eventType, filename) => {
      if (filename) {
        console.log(`📝 File changed: ${path}/${filename}`);
        console.log('   Refresh your browser to see changes');
      }
    });
  } catch (error) {
    console.log(`⚠️  Could not watch ${path}: ${error.message}`);
  }
});

// Handle graceful shutdown
process.on('SIGINT', () => {
  console.log('\n👋 Shutting down development server...');
  server.stop();
  process.exit(0);
});
