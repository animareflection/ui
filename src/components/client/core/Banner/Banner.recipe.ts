import { defineRecipe } from "@pandacss/dev";

export const bannerRecipe = defineRecipe({
  className: "banner",
  description: "The styles for the Banner component",
  base: {
    position: "absolute",
    top: 0,
    left: 0,
    fontWeight: "medium",
    justifyContent: "space-between",
    display: "inline-flex",
    alignItems: "center",
    userSelect: "none",
    whiteSpace: "nowrap",
    textStyle: "sm",
    w: "full",
    px: 2.5,
    h: 14,
    gap: 2,
    background: "accent.default",
    color: "accent.fg",
  },
  variants: {
    variant: {
      subtle: {
        background: "accent.subtle",
        borderColor: "border.accent",
        borderWidth: "1px",
        color: "fg.emphasized",
      },
      outline: {
        background: "bg.subtle",
        borderWidth: "1px",
        borderColor: "border.emphasized",
        color: "fg.emphasized",
      },
    },
    size: {
      sm: { textStyle: "xs", px: 2, h: 5, gap: 1 },
      lg: { textStyle: "sm", px: 3, h: 7, gap: 1.5 },
    },
  },
});
