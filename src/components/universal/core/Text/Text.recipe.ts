import { defineRecipe } from "@pandacss/dev";

export const recipe = defineRecipe({
  className: "text",
  description: "The styles for the Text component",
  base: {
    color: "fg.default",
  },
  variants: {
    size: {
      sm: { fontSize: "sm" },
      lg: { fontSize: "lg" },
    },
  },
});
