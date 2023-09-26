import { definePreset, defineTokens } from "@pandacss/dev";

import {
  animations,
  breakpoints,
  colors,
  conditions,
  easings,
  fonts,
  globalCss,
  keyframes,
  recipes,
  semanticTokens,
  slotRecipes,
  zIndex,
} from "lib/panda";

const tokens = defineTokens({
  animations,
  colors,
  easings,
  fonts,
  zIndex,
});

/**
 * Anima Reflection Panda CSS preset.
 */
const anirefPreset = definePreset({
  conditions,
  globalCss,
  theme: {
    extend: {
      breakpoints,
      keyframes,
      recipes,
      semanticTokens,
      slotRecipes,
      tokens,
    },
  },
});

export default anirefPreset;
