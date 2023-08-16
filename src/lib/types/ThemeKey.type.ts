import type { defineTokens } from "@pandacss/dev";

type DefineTokensConfig = Parameters<typeof defineTokens>[0];

/**
 * Panda theme customization key accessor for use in configuration extracted from the root `defineTokens` parameter.
 */
type ThemeKey<K extends keyof DefineTokensConfig> = NonNullable<
  DefineTokensConfig[K]
>;

export default ThemeKey;
