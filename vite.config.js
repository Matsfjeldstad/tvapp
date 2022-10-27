import { resolve } from "path";
import { defineConfig } from "vite";

export default defineConfig({
  root: resolve(__dirname, "src"),
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, "./src/index.html"),
      },
    },
    outDir: "../dist",
  },
});
