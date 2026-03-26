import { defineConfig } from 'vitest/config';

export default defineConfig({
  test: {
    globals: true, // cela me Permet d'utiliser 'describe', 'it', etc. sans import :)
  },
});