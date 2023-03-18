import { defineConfig } from 'vite'
import { svelte } from '@sveltejs/vite-plugin-svelte'

export default defineConfig({
  plugins: [svelte({ hot: !process.env.VITEST })],
  test: {
    globals: true,
    coverage: {
      provider: 'istanbul',
      reporter: ['json', 'html', 'text-summary', 'text'],
    },
    environment: 'jsdom',
  },
})
