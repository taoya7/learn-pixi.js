import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import alias from "@rollup/plugin-alias";
import resolve from "rollup-plugin-node-resolve";

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
  plugins: [alias(), vue()]
})
