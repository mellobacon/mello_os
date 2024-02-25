import { defineConfig } from 'vite'
import { svelte } from '@sveltejs/vite-plugin-svelte'
import { nodePolyfills } from 'vite-plugin-node-polyfills'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [svelte(), nodePolyfills({
    globals: {
      Buffer: true,
      process: true,
    },
    overrides: {
      fs: "memfs"
    }
  }),],
})
