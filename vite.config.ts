import { defineConfig } from 'vite'

export default defineConfig({
	base: '/terminal-website/',
	server: {
    proxy: {
      "/api/ip": {
        target: "https://api.ipify.org",
        changeOrigin: true,
        rewrite: () => "/",
      },
    },
  },
})
