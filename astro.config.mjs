import { defineConfig } from 'astro/config';
import reactIntegration from '@astrojs/react';
import tailwindIntegration from '@astrojs/tailwind';
import mdxIntegration from '@astrojs/mdx';
import vercelAdapter from '@astrojs/vercel';

// Astro configuration for Paul Savvas portfolio
const portfolioConfig = defineConfig({
  adapter: vercelAdapter(),
  output: 'server',
  integrations: [
    reactIntegration(),
    tailwindIntegration({ applyBaseStyles: false }),
    mdxIntegration(),
  ],
  vite: {
    ssr: {
      // Bundle next-themes for SSR compatibility
      noExternal: ['next-themes'],
    },
  },
});

export default portfolioConfig;
