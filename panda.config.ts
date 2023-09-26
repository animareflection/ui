import { defineConfig } from "@pandacss/dev";

import anirefPreset from "lib/panda/aniref.preset";

/**
 * 🐼 Panda configuration.
 */
// TODO remove explicit type annotation, required due to `pnpm` bug (and therefore Yarn with `pnpm` linker); https://github.com/microsoft/TypeScript/issues/47663
const pandaConfig: ReturnType<typeof defineConfig> = defineConfig({
  // enable CSS reset
  preflight: true,
  include: ["src/**/*.{ts,tsx,mdx}"],
  outdir: "src/generated/panda",
  presets: ["@pandacss/dev/presets", anirefPreset],
  // set JSX factory name
  jsxFactory: "panda",
  jsxFramework: "react",
  // TODO remove static CSS pregeneration
  staticCss: {
    recipes: {
      alert: [{ variant: ["*"] }],
      stat: [{ variant: ["*"] }],
    },
  },
});

export default pandaConfig;
