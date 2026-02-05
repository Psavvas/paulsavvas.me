import { defineConfig } from 'astro/config';
import reactIntegration from '@astrojs/react';
import mdxIntegration from '@astrojs/mdx';
import tailwindIntegration from '@astrojs/tailwind';
import nodeAdapter from '@astrojs/node';

export default defineConfig({
  site: 'https://paulsavvas.me',
  output: 'server',
  adapter: nodeAdapter({
    mode: 'standalone'
  }),
  integrations: [
    reactIntegration(),
    mdxIntegration(),
    tailwindIntegration({ applyBaseStyles: false }),
  ],
});
