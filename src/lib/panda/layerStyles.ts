import { defineLayerStyles } from "@pandacss/dev";

const layerStyles = defineLayerStyles({
  // TODO: remove button layer style when colorPalette composition strategy is implemented
  button: {
    description: "layer styles for brand.secondary button",
    value: {
      borderColor: "brand.secondary.500",
      color: "brand.secondary.500",
      _hover: {
        backgroundColor: {
          base: "brand.secondary.50",
          _dark: "brand.secondary.950",
        },
      },
    },
  },
  gradient: {
    description: "layer styles for gradient",
    value: {
      background: {
        base: "linear-gradient(to right, token(colors.brand.secondary.50), token(colors.brand.primary.50))",
        _dark:
          // TODO: add #05291d to UI color palette (secondary.950)
          "linear-gradient(to right, token(colors.brand.secondary.950), token(colors.brand.primary.950))",
      },
    },
  },
});

export default layerStyles;
