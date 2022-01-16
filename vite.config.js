/*
 * @Author: Qzx
 * @Date: 2021-11-13 17:22:40
 * @LastEditTime: 2022-01-15 19:42:14
 * @LastEditors: Qzx
 * @Description:
 */
import path from 'path';
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import WindiCSS from 'vite-plugin-windicss';
import reactSvgPlugin from 'vite-plugin-react-svg';
import { visualizer } from 'rollup-plugin-visualizer';

const env = process.argv[process.argv.length - 1];

const config = {
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
  build: {
    // 打包移除 console 和 注释
    terserOptions: {
      drop_console: true,
      drop_debugger: true
    }
  },
  resolve: {
    alias: {
      '@': path.resolve(__dirname, 'src'),
      '@/pages': path.resolve(__dirname, 'src/pages'),
      '@/utils': path.resolve(__dirname, 'src/utils')
    }
  },
  plugins: [react(), WindiCSS(), reactSvgPlugin()]
};

// 打包依赖分析
if (env === 'analyze') {
  config.plugins.push(visualizer({ open: true }));
}

// https://vitejs.dev/config/
export default defineConfig(config);
