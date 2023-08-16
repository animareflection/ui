import type { ThemeKey } from "lib/types";

/**
 * Theme font tokens.
 */
const fonts: ThemeKey<"fonts"> = {
  primary: {
    value: `var(--font-primary), "Helvetica Neue", Helvetica, Arial, sans-serif`,
    description: "Primary font",
  },
  code: {
    value: `var(--font-code), monospace`,
    description: "Code font",
  },
} as const;

export default fonts;
