import { defineConfig as defineTsupConfig } from "tsup";

/**
 * `tsup` configuration.
 * @see https://tsup.egoist.dev
 */
const tsupConfig = defineTsupConfig({
  entry: { ui: "src/index.ts", client: "src/index.client.ts" },
  // TODO enable Rollup tree-shaking, temporarily disabled to allow properly injecting `use client` directive banner; track https://github.com/egoist/tsup/issues/835
  // treeshake: true,
  sourcemap: true,
  minify: true,
  clean: true,
  dts: true,
  splitting: false,
  banner: { js: `"use client";\n` },
  format: ["cjs", "esm"],
  external: ["react", "@ark-ui/react"],
  outDir: "build",
  esbuildOptions: (opt, _ctx) => {
    // https://esbuild.github.io/api/#resolve-extensions
    const defaultExtensions = [".tsx", ".ts", ".jsx", ".js", ".css", ".json"];

    // extend recognized extensions to include explicit ESM extensions
    opt.resolveExtensions = [...defaultExtensions, ".mts", ".mjs"];
  },
});

export default tsupConfig;
