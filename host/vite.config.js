import { fileURLToPath, URL } from 'node:url'
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue()
  ],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url)),
      'vue': fileURLToPath(new URL('./node_modules/vue', import.meta.url)),
    }
  },
  server: {
    port: 3200
  },
  optimizeDeps: {
    exclude: ['one-channel-order-management', 'one-channel-product-management']
  },

})
