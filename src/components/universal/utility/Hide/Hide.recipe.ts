import { defineRecipe } from "@pandacss/dev";

export const hideRecipe = defineRecipe({
  className: "hide",
  description: "The styles for the Hide component",
  // TODO: fix variants when `hideBelow` issue is fixed upstream (panda)
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
      md: {
        hideBelow: "sm",
      },
      lg: {
        hideBelow: "md",
      },
      xl: {
        hideBelow: "lg",
      },
      "2xl": {
        hideBelow: "xl",
      },
    },
  },
});
