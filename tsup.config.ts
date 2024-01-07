import { spawnSync } from "child_process";

import { defineConfig as defineTsupConfig } from "tsup";

import type { SpawnSyncOptionsWithStringEncoding as SpawnSyncOptions } from "child_process";

/**
 * Options for spawning synchronous processes.
 */
const spawnProcessOptions: SpawnSyncOptions = {
  cwd: process.cwd(),
  env: process.env,
  stdio: "inherit",
  encoding: "utf-8",
};

/**
 * `tsup` configuration.
 * @see https://tsup.egoist.dev
 */
const tsupConfig = defineTsupConfig({
  entry: {
    ui: "src/index.ts",
    next: "src/index.next.ts",
  },
  // TODO enable Rollup tree-shaking, temporarily disabled to allow properly injecting `use client` directive banner (Rollup tree-shaking removes it); track https://github.com/egoist/tsup/issues/835
  // treeshake: true,
  sourcemap: true,
  minify: true,
  clean: true,
  splitting: false,
  format: ["cjs", "esm"],
  // NB: `peerDeps`, among others, are excluded (marked external) by default
  // see https://tsup.egoist.dev/#excluding-packages
  external: ["@ark-ui/react", "react-icons", "next", "framer-motion", "sonner"],
  outDir: "build",
  esbuildOptions: (opt, _ctx) => {
    // https://esbuild.github.io/api/#resolve-extensions
    const defaultExtensions = [".tsx", ".ts", ".jsx", ".js", ".css", ".json"];

    // filter out extensions from `esbuild` defaults
    const selectedDefaultExtensions = defaultExtensions.filter(
      (ext) => ![".css", ".json"].includes(ext),
    );

    // extend recognized extensions to include explicit ESM extensions
    opt.resolveExtensions = [...selectedDefaultExtensions, ".mts", ".mjs"];
  },
  onSuccess: async () => {
    console.log("Generating type declarations...");
    // NB: below is used as alternative to `tsup` config `dts: true` option to avoid race condition with local package publish (at the cost of less concurrency)
    spawnSync("bun", ["tsup", "--dts-only"], spawnProcessOptions);

    console.log("Publishing local package...");
    spawnSync("bun", ["knit", "push"], spawnProcessOptions);
  },
});

export default tsupConfig;
