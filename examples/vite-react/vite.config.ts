import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tsconfigPaths from "vite-tsconfig-paths";

/**
 * Vite configuration.
 *
 * @see https://vitejs.dev/config
 */
const viteConfig = defineConfig({
  plugins: [react(), tsconfigPaths()],
});

export default viteConfig;
