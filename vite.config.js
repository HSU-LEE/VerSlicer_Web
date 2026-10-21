import { resolve } from "node:path";
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// GitHub Pages: set base to "/<repo-name>/" (workflow passes VITE_BASE_PATH)
const base = process.env.VITE_BASE_PATH || "/";

export default defineConfig({
  base,
  plugins: [react()],
  build: {
    rollupOptions: {
      input: {
        main: resolve(import.meta.dirname, "index.html"),
        wiki: resolve(import.meta.dirname, "wiki/index.html"),
      },
    },
  },
});
