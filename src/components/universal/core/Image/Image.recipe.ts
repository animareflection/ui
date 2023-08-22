import { defineRecipe } from "@pandacss/dev";

export const recipe = defineRecipe({
  className: "Image",
  description: "The styles for the Image component",
  variants: {
    layout: {
      fill: {
        width: "100%",
        height: "100%",
        objectFit: "fill",
      },
    },
  },
});
