import { defineRecipe } from "@pandacss/dev";

export const bannerRecipe = defineRecipe({
  className: "banner",
  description: "The styles for the Banner component",
  base: {
    colorPalette: "brand.primary",
    textStyle: "md",
    fontWeight: "bold",
    textAlign: "center",
    justifyContent: "space-between",
    display: "inline-flex",
    alignItems: "center",
    userSelect: "none",
    whiteSpace: "wrap",
    w: "full",
    position: "relative",
    p: 4,
    background: "colorPalette.500",
    color: "accent.fg",
  },
});
