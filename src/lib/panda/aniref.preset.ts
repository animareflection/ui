import { definePreset, defineTokens } from "@pandacss/dev";

import { colors, zIndex } from "lib/panda";

const tokens = defineTokens({
  colors,
  zIndex,
});

/**
 * Anima Reflection Panda CSS preset.
 */
// TODO remove explicit type annotation, required due to `pnpm` bug (and therefore Yarn with `pnpm` linker); https://github.com/microsoft/TypeScript/issues/47663
const anirefPreset: ReturnType<typeof definePreset> = definePreset({
  theme: {
    extend: {
      tokens,
    },
  },
});

export default anirefPreset;
