// @ts-check
import { defineConfig } from "astro/config";
import remarkGfm from "remark-gfm";
import tailwindcss from "@tailwindcss/vite";

function normalizeBasePath(basePath) {
  if (!basePath || basePath === "/") {
    return "/";
  }

  return `/${basePath.replace(/^\/+|\/+$/g, "")}/`;
}

// https://astro.build/config
export default defineConfig({
  base: normalizeBasePath(process.env.PUBLIC_BASE_PATH),
  markdown: {
    remarkPlugins: [remarkGfm],
  },
  vite: {
    plugins: [tailwindcss()],
  },
});
