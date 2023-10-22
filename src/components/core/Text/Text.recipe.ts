import { defineRecipe } from "@pandacss/dev";

export const textRecipe = defineRecipe({
  className: "text",
  description: "The styles for the Text component",
  base: {
    color: "fg.default",
  },
  defaultVariants: {
    size: "md",
  },
  variants: {
    size: {
      sm: { fontSize: "sm" },
      md: { fontSize: "md" },
      lg: { fontSize: "lg" },
    },
  },
});
