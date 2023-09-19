import { defineRecipe } from "@pandacss/dev";

export const showRecipe = defineRecipe({
  className: "show",
  description: "The styles for the Show component",
  variants: {
    from: {
      sm: {
        hideBelow: "sm",
      },
      md: {
        hideBelow: "md",
      },
      lg: {
        hideBelow: "lg",
      },
      xl: {
        hideBelow: "xl",
      },
      "2xl": {
        hideBelow: "2xl",
      },
    },
    below: {
      sm: {
        hideFrom: "sm",
      },
      md: {
        hideFrom: "md",
      },
      lg: {
        hideFrom: "lg",
      },
      xl: {
        hideFrom: "xl",
      },
      "2xl": {
        hideFrom: "2xl",
      },
    },
  },
});
