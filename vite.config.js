import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// GitHub Pages: set base to "/<repo-name>/" (workflow passes VITE_BASE_PATH)
const base = process.env.VITE_BASE_PATH || "/";

export default defineConfig({
  base,
  plugins: [react()],
});
