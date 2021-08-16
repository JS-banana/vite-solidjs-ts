import { defineConfig } from "vite"
import solidPlugin from "vite-plugin-solid"

export default defineConfig({
  plugins: [solidPlugin()],
  build: {
    target: "esnext",
    polyfillDynamicImport: false,
  },
  server: {
    proxy: {
      "/api": {
        target: "http://127.0.0.1:3001/",
        changeOrigin: true,
        rewrite: (pre) => pre.replace(/^\/api/, ""), // 将 /api 重写为空
      },
    },
  },
})
