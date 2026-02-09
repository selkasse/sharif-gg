import { defineConfig } from "vite";

export default defineConfig({
  // This causes Vite to write dist/.vite/manifest.json after vite build.
  build: {
    manifest: true,
  },
});
