import { defineRecipe } from "@pandacss/dev";

export const recipe = defineRecipe({
  className: "spinner",
  description: "The styles for the Spinner component",
  base: {
    color: "accent.default",
    h: 9,
    w: 9,
    animation: "infinite-spin",
  },
  variants: {
    size: {
      sm: {
        h: 6,
        w: 6,
      },
      lg: {
        h: 12,
        w: 12,
      },
    },
  },
});
