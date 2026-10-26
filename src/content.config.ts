// defineCollection: tells Astro about a group of content files
// z: Zod, a validation library — like writing rules for your data (no TypeScript knowledge needed)
import { defineCollection, z } from 'astro:content';

import { glob } from 'astro/loaders';

// This defines the required frontmatter fields for every .md file inside src/content/books/
// If a field is missing or has the wrong type, Astro will throw an error at build time
const books = defineCollection({
  // glob tells Astro where to find the files that belong to your collection.
  loader: glob({
    pattern: '**/*.md',
    base: './src/content/books',
  }),
  schema: z.object({
    title: z.string(), // must be text
    author: z.string(), // must be text
    img: z.string(), // must be text
    description: z.string(), // must be text
    buy: z.object({
      // must be a nested object with two text AND url fields
      usa: z.string().url(),
      world: z.string().url(),
    }),
  }),
});

// The key "books" must match the folder name: src/content/books/
export const collections = { books };
