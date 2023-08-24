import { defineRecipe } from "@pandacss/dev";

export const badgeRecipe = defineRecipe({
  className: "badge",
  description: "The styles for the Badge component",
  base: {
    borderRadius: "full",
    fontWeight: "medium",
    display: "inline-flex",
    alignItems: "center",
    userSelect: "none",
    whiteSpace: "nowrap",
    textStyle: "sm",
    px: 2.5,
    h: 6,
    gap: 2,
    background: "accent.default",
    color: "accent.fg",
  },
  variants: {
    variant: {
      subtle: {
        background: "bg.subtle",
        borderColor: "border.default",
        borderWidth: "1px",
        color: "fg.emphasized",
      },
      outline: {
        background: "bg.subtle",
        borderWidth: "2px",
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
