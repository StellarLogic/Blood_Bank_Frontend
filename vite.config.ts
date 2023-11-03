import react from "@vitejs/plugin-react-swc";
import path from "path";
import { defineConfig } from "vite";
import viteCompression from "vite-plugin-compression";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), viteCompression()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src/"),
      images: `${path.resolve(__dirname, "./src/assets/images")}`,
      components: `${path.resolve(__dirname, "./src/components/")}`,
      composites: `${path.resolve(__dirname, "./src/composites")}`,
      layout: `${path.resolve(__dirname, "./src/views/layout/")}`,
      pages: path.resolve(__dirname, "./src/views/pages"),
      utils: path.resolve(__dirname, "./src/utils"),
      services: path.resolve(__dirname, "./src/services"),
      reducers: path.resolve(__dirname, "./src/reducers"),
    },
  },
});
