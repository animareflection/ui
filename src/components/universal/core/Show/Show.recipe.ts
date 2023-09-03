import { defineRecipe } from "@pandacss/dev";

export const showRecipe = defineRecipe({
  className: "show",
  description: "The styles for the Show component",
  // TODO: fix variants when `hideBelow` issue is fixed upstream (panda)
  variants: {
    from: {
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
    below: {
      sm: {
        hide: "sm",
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
