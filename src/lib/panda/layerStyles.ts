import { defineLayerStyles } from "@pandacss/dev";

const layerStyles = defineLayerStyles({
  accentGradient: {
    description: "layer styles for gradient",
    value: {
      background:
        "linear-gradient(to right, token(colors.brand.secondary.500), token(colors.accent.default))",
    },
  },
  subtleGradient: {
    description: "layer styles for gradient",
    value: {
      background: {
        base: "linear-gradient(to right, token(colors.brand.secondary.50), token(colors.brand.primary.50))",
        _dark:
          "linear-gradient(to right, token(colors.brand.secondary.950), token(colors.brand.primary.950))",
      },
    },
  },
});

export default layerStyles;
