import { defineSlotRecipe } from "@pandacss/dev";

export const skeletonRecipe = defineSlotRecipe({
  className: "skeleton",
  description: "The styles for the Skeleton component",
  slots: ["root", "skeleton"],
  base: {
    root: {
      position: "relative",
      colorPalette: "brand.primary",
    },
    skeleton: {
      position: "absolute",
      inset: 0,
      width: "100%",
      height: "100%",
      borderRadius: "sm",
      animation: { base: "skeleton-light", _dark: "skeleton-dark" },
    },
  },
  variants: {
    variant: {
      circle: {
        skeleton: {
          borderRadius: "full",
        },
      },
      text: {
        root: {
          height: 4,
        },
        skeleton: {
          borderRadius: "xs",
        },
      },
    },
  },
});
