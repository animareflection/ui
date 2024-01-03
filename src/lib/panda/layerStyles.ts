import { defineLayerStyles } from "@pandacss/dev";

const layerStyles = defineLayerStyles({
  // TODO: remove button layer style when colorPalette composition strategy is implemented
  // !NB: important flags are used to override recipe styles no matter what variant is used
  button: {
    description: "layer styles for brand.secondary button",
    value: {
      backgroundColor: {
        base: "bg.default!",
        _disabled: "bg.default!",
        _hover: {
          base: "brand.secondary.50!",
          _dark: "brand.secondary.950!",
          _disabled: "bg.default!",
        },
      },
      borderColor: {
        base: "brand.secondary.500!",
        _disabled: { base: "border.disabled!", _hover: "border.disabled!" },
      },
      color: {
        base: "brand.secondary.500!",
        _disabled: { base: "fg.disabled!", _hover: "fg.disabled!" },
      },
    },
  },
  gradient: {
    description: "layer styles for gradient",
    value: {
      // TODO: update when colorPalette composition strategy is implemented (colorPalette.subtle)
      background: {
        base: "linear-gradient(to right, token(colors.brand.secondary.50), token(colors.brand.primary.50))",
        _dark:
          "linear-gradient(to right, token(colors.brand.secondary.950), token(colors.brand.primary.950))",
      },
    },
  },
});

export default layerStyles;
