import { defineRecipe } from "@pandacss/dev";

export const hideRecipe = defineRecipe({
  className: "hide",
  description: "The styles for the Hide component",
  variants: {
    from: {
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
    below: {
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
  },
});
