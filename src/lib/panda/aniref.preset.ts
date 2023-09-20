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
// TODO remove explicit type annotation, required due to `pnpm` bug (and therefore Yarn with `pnpm` linker); https://github.com/microsoft/TypeScript/issues/47663
const anirefPreset: ReturnType<typeof definePreset> = definePreset({
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
