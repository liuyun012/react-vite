/*
 * @Author: Qzx
 * @Date: 2021-11-13 17:22:40
 * @LastEditTime: 2022-01-15 18:20:28
 * @LastEditors: Qzx
 * @Description:
 */
import path from 'path';
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import WindiCSS from 'vite-plugin-windicss';
import reactSvgPlugin from 'vite-plugin-react-svg';
import vitePluginImp from 'vite-plugin-imp';

// https://vitejs.dev/config/
export default defineConfig({
  base: './',
  server: {
    host: '0.0.0.0',
    open: true,
    proxy: {
      '/api': {
        target: '',
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/api/, '')
      }
    }
  },
  resolve: {
    alias: {
      '@': path.resolve(__dirname, 'src'),
      '@/pages': path.resolve(__dirname, 'src/pages'),
      '@/utils': path.resolve(__dirname, 'src/utils')
    }
  },
  plugins: [react(), WindiCSS(), reactSvgPlugin(), vitePluginImp({ libList: [] })]
});
