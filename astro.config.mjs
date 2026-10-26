// @ts-check
import { defineConfig, envField } from 'astro/config';

import tailwindcss from '@tailwindcss/vite';

import node from '@astrojs/node';

// https://astro.build/config
export default defineConfig({
  // Configure Astro to output a server-rendered application
  output: 'server',

  vite: {
    plugins: [tailwindcss()],
  },

  // Environment variable configuration for the project
  env: {
    schema: {
      // Show or hide the buy button for books based on this environment variable
      SHOW_BUY_BUTTON: envField.boolean({ default: true, context: 'server', access: 'public' }),
      // API endpoint to fetch the score for the book
      SCORE_API_ENDPOINT: envField.string({ context: 'server', access: 'public' }),
    },
  },

  adapter: node({
    mode: 'standalone',
  }),
});