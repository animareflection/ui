import { defineRecipe } from "@pandacss/dev";

export const bannerRecipe = defineRecipe({
  className: "banner",
  description: "The styles for the Banner component",
  base: {
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
    background: "accent.default",
    color: "accent.fg",
  },
});
