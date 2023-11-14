import { defineRecipe } from "@pandacss/dev";

export const spinnerRecipe = defineRecipe({
  className: "spinner",
  description: "The styles for the Spinner component",
  base: {
    color: "accent.default",
    animation: "infinite-spin",
  },
  defaultVariants: {
    size: "md",
  },
  variants: {
    size: {
      xs: {
        h: 3,
        w: 3,
      },
      sm: {
        h: 6,
        w: 6,
      },
      md: {
        h: 9,
        w: 9,
      },
      lg: {
        h: 12,
        w: 12,
      },
    },
  },
});
