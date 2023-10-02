import { defineConfig } from "@pandacss/dev";

import anirefPreset from "lib/panda/aniref.preset";

/**
 * 🐼 Panda configuration.
 */
const pandaConfig = defineConfig({
  // enable CSS reset
  preflight: true,
  include: ["src/**/*.{ts,tsx,mdx}"],
  outdir: "src/generated/panda",
  presets: ["@pandacss/dev/presets", anirefPreset],
  // set JSX factory name
  jsxFactory: "panda",
  jsxFramework: "react",
  studio: {
    logo: "https://github.com/animareflection/ui/blob/master/public/img/logo.png?raw=true",
  },
  // TODO remove static CSS pregeneration
  staticCss: {
    recipes: {
      accordion: [{ variant: ["*"] }],
      hide: [{ variant: ["*"] }],
      show: [{ variant: ["*"] }],
      stat: [{ variant: ["*"] }],
      tooltip: [{ variant: ["*"] }],
    },
  },
});

export default pandaConfig;
