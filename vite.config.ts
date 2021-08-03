import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
const path = require('path');
// https://vitejs.dev/config/
export default defineConfig({
  base: '',
  server: {
    host: '0.0.0.0',
  },
  resolve: {
    alias: {
        '@': path.resolve(__dirname, 'src'),
    }
  },
  plugins: [vue()]
})
