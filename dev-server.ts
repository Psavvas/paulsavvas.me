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
  async fetch(req: Request): Promise<Response> {
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

      // If .js file doesn't exist, try to transpile corresponding .ts file
      if (!exists && pathname.endsWith('.js')) {
        const tsPath = filePath.replace(/\.js$/, '.ts');
        const tsFile = Bun.file(tsPath);
        if (await tsFile.exists()) {
          console.log(`📦 Transpiling ${tsPath} -> ${pathname}`);
          const transpiled = await Bun.build({
            entrypoints: [tsPath],
            target: 'browser',
            format: 'esm',
          });

          if (transpiled.outputs.length > 0) {
            return new Response(transpiled.outputs[0], {
              headers: {
                'Content-Type': 'application/javascript',
              },
            });
          }
        }
      }

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
const watchPaths: string[] = ['js', 'css', 'index.html', 'project'];

watchPaths.forEach(path => {
  try {
    watch(path, { recursive: true }, (_eventType, filename) => {
      if (filename) {
        console.log(`📝 File changed: ${path}/${filename}`);
        console.log('   Refresh your browser to see changes');
      }
    });
  } catch (error) {
    const err = error as Error;
    console.log(`⚠️  Could not watch ${path}: ${err.message}`);
  }
});

// Handle graceful shutdown
process.on('SIGINT', () => {
  console.log('\n👋 Shutting down development server...');
  server.stop();
  process.exit(0);
});
