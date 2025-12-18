import { defineConfig } from 'vitest/config'
import vue from '@vitejs/plugin-vue'
import { playwright } from '@vitest/browser-playwright'

export default defineConfig({
  plugins: [vue()],
  test: {
    browser: {
      enabled: true,
      headless: true,
      instances: [
        {
          browser: 'chromium',
        },
      ],
      provider: playwright(),
    },

    include: ['tests/browser/**/*.test.ts'],

    globals: true,
  },
})
