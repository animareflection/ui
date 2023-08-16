import { defineSemanticTokens } from "@pandacss/dev";

const semanticTokens = defineSemanticTokens({
  colors: {
    background: {
      primary: { value: { base: "#ffffff", _dark: "#161616" } },
      secondary: { value: { base: "#eeeeee", _dark: "#2c2c2c" } },
    },
    foreground: {
      primary: { value: { base: "#000000", _dark: "#ffffff" } },
      secondary: { value: { base: "#161616", _dark: "#eeeeee" } },
    },
  },
});

export default semanticTokens;
