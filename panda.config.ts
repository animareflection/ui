import { defineConfig } from "@pandacss/dev";

/**
 * 🐼 Panda configuration.
 */
// TODO remove explicit type annotation, required due to `pnpm` bug (and therefore Yarn with `pnpm` linker); https://github.com/microsoft/TypeScript/issues/47663
const pandaConfig: ReturnType<typeof defineConfig> = defineConfig({
  // enable CSS reset
  preflight: true,
  emitPackage: true,
  include: ["src/**/*.{ts,tsx}"],
  outdir: "src/generated/panda",
  // set JSX factory name
  jsxFactory: "panda",
  jsxFramework: "react",
});

export default pandaConfig;
