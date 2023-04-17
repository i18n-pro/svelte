import { defineConfig } from 'vitest/config'
import { svelte } from '@sveltejs/vite-plugin-svelte'
import sveltePreprocess from 'svelte-preprocess'

export default defineConfig({
  plugins: [
    svelte({
      extensions: ['.svelte'],
      configFile: false,
      hot: !process.env.VITEST,
      preprocess: [
        sveltePreprocess({
          typescript: true,
        }),
      ],
    }),
  ],
  test: {
    globals: true,
    coverage: {
      provider: 'istanbul',
      reporter: ['json', 'html', 'text-summary', 'text'],
    },
    environment: 'jsdom',
  },
})
