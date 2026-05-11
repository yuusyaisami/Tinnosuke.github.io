// @ts-check
import { defineConfig } from "astro/config";
import remarkGfm from "remark-gfm";
import tailwindcss from "@tailwindcss/vite";

// https://astro.build/config
export default defineConfig({
  markdown: {
    remarkPlugins: [remarkGfm],
  },
  vite: {
    plugins: [tailwindcss()],
  },
});
