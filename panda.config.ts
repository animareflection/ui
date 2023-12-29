import { defineConfig } from "@pandacss/dev";

import { PREGENERATE_STATIC_CSS } from "lib/config/env";
import { recipes, slotRecipes } from "lib/panda";
import anirefPreset from "lib/panda/aniref.preset";
import { mapArrayToObject } from "lib/util";

const recipeKeys = Object.keys(recipes);
const slotRecipeKeys = Object.keys(slotRecipes);

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
  staticCss: PREGENERATE_STATIC_CSS
    ? {
        // pregenerate recipe styles; allow Storybook stories to properly use `args` without needing to hint the extractor with `render` or other workarounds like `{fn}.raw`
        recipes: {
          ...mapArrayToObject(recipeKeys, ["*"]),
          ...mapArrayToObject(slotRecipeKeys, ["*"]),
        },
      }
    : {},
});

export default pandaConfig;
