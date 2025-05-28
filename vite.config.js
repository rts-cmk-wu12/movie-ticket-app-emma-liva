import { defineConfig, loadEnv } from 'vite'
import react from '@vitejs/plugin-react'
import pagesPlugin from 'vite-plugin-pages'

// https://vite.dev/config/
export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd());

  return {
    plugins: [react(), pagesPlugin()],
    server: {
      allowedHosts: true,
      port: 3001,
      proxy: {
        '/api': {
          target: env.VITE_URL,
          changeOrigin: true,
          rewrite: (path) => path.replace(/^\/api/, ''),
        },
      },
    },
    preview: {
      port: 3001,
    },
  }
});