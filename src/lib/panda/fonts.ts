import { defineTokens } from "@pandacss/dev";

/**
 * Theme font tokens.
 */
const fonts = defineTokens.fonts({
  primary: {
    value: `var(--font-primary), "Helvetica Neue", Helvetica, Arial, sans-serif`,
    description: "Primary font",
  },
  code: {
    value: `var(--font-code), monospace`,
    description: "Code font",
  },
});

export default fonts;
