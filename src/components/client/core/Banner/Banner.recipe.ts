import { defineRecipe } from "@pandacss/dev";

export const bannerRecipe = defineRecipe({
  className: "banner",
  description: "The styles for the Banner component",
  base: {
    textStyle: "md",
    fontWeight: "bold",
    textAlign: "center",
    justifyContent: "center",
    display: "inline-flex",
    alignItems: "center",
    userSelect: "none",
    whiteSpace: "nowrap",
    w: "full",
    p: 4,
    background: "accent.default",
    color: "accent.fg",
  },
  variants: {
    variant: {
      gradient: {
        bgGradient: "to-r",
        gradientFrom: "brand.secondary.500",
        gradientTo: "accent.default",
      },
    },
  },
});
