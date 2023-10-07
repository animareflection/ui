import { defineRecipe } from "@pandacss/dev";

export const iconRecipe = defineRecipe({
  className: "icon",
  description: "The styles for the Icon component",
  base: {
    display: "inline-block",
    flexShrink: 0,
    verticalAlign: "middle",
    lineHeight: "1em",
    w: 5,
    h: 5,
  },
  variants: {
    size: {
      xs: {
        w: 3,
        h: 3,
      },
      sm: {
        w: 4,
        h: 4,
      },
      lg: {
        w: 6,
        h: 6,
      },
      xl: {
        w: 7,
        h: 7,
      },
      "2xl": {
        w: 8,
        h: 8,
      },
    },
  },
});
