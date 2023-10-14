import { defineRecipe } from "@pandacss/dev";

export const badgeRecipe = defineRecipe({
  className: "badge",
  description: "The styles for the Badge component",
  base: {
    borderRadius: "full",
    w: "fit-content",
    fontWeight: "medium",
    display: "inline-flex",
    alignItems: "center",
    userSelect: "none",
    whiteSpace: "nowrap",
  },
  defaultVariants: {
    variant: "primary",
    size: "md",
  },
  variants: {
    variant: {
      primary: {
        background: "accent.default",
        color: "accent.fg",
      },
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
      md: { textStyle: "sm", px: 2.5, h: 6, gap: 2 },
      lg: { textStyle: "sm", px: 3, h: 7, gap: 1.5 },
    },
  },
});
