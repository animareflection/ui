import { defineRecipe } from "@pandacss/dev";

export const badgeRecipe = defineRecipe({
  className: "badge",
  description: "The styles for the Badge component",
  base: {
    colorPalette: "brand.primary",
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
        background: "colorPalette.500",
        color: "accent.fg",
      },
      subtle: {
        background: { base: "colorPalette.50", _dark: "colorPalette.950" },
        borderColor: { base: "colorPalette.600", _dark: "colorPalette.400" },
        borderWidth: "1px",
        color: { base: "colorPalette.600", _dark: "colorPalette.400" },
      },
      outline: {
        background: "bg.subtle",
        borderWidth: "1px",
        borderColor: { base: "colorPalette.600", _dark: "colorPalette.400" },
        color: { base: "colorPalette.600", _dark: "colorPalette.400" },
      },
    },
    size: {
      sm: { textStyle: "xs", px: 2, h: 5, gap: 1 },
      md: { textStyle: "sm", px: 2.5, h: 6, gap: 2 },
      lg: { textStyle: "sm", px: 3, h: 7, gap: 1.5 },
    },
  },
});
