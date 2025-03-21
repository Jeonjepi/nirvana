import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'

// 기존 tailwindcss 플러그인 제거하고 PostCSS만 사용
export default defineConfig({
  plugins: [react()],
  css: {
    postcss: './postcss.config.js'
  },
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src')
    }
  }
})