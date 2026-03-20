import react from "@vitejs/plugin-react";
import path from "path";
import { defineConfig } from "vite";

// https://vitejs.dev/config/
export default defineConfig({
  base: "./",
  plugins: [react()],
  resolve: {
    alias: {
      "@paul/ui": path.resolve(__dirname, "../packages/ui/src/index.ts"),
      compositions: path.resolve(__dirname, "../packages/ui/src/components/compositions"),
      data: path.resolve(__dirname, "./src/data"),
      hooks: path.resolve(__dirname, "../packages/ui/src/hooks"),
      icons: path.resolve(__dirname, "../packages/ui/src/icons"),
      images: path.resolve(__dirname, "./src/ui/images"),
      layout: path.resolve(__dirname, "../packages/ui/src/components/layout"),
      primitives: path.resolve(__dirname, "../packages/ui/src/components"),
      utils: path.resolve(__dirname, "../packages/ui/src/utils"),
    },
  },
  server: {
    port: 8000,
  },
});
