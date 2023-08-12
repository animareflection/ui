import { definePreset, defineTokens } from "@pandacss/dev";

import {
  animations,
  colors,
  conditions,
  easings,
  keyframes,
  recipes,
  zIndex,
} from "lib/panda";

const tokens = defineTokens({
  animations,
  colors,
  easings,
  zIndex,
});

/**
 * Anima Reflection Panda CSS preset.
 */
// TODO remove explicit type annotation, required due to `pnpm` bug (and therefore Yarn with `pnpm` linker); https://github.com/microsoft/TypeScript/issues/47663
const anirefPreset: ReturnType<typeof definePreset> = definePreset({
  theme: {
    extend: {
      keyframes,
      recipes,
      tokens,
    },
  },
  conditions,
});

export default anirefPreset;
