import { defineSlotRecipe } from "@pandacss/dev";

export const toastRecipe = defineSlotRecipe({
  className: "toast",
  description: "The styles for the Toast component",
  slots: ["root", "title", "group", "description"],
  base: {
    root: {
      position: "relative",
      backgroundColor: "brand.primary.100",
      color: "brand.primary.800",
      borderRadius: "lg",
      boxShadow: "lg",
      minWidth: "xs",
      p: 4,
      _open: {
        animation: "slide-in-top 200ms",
      },
    },
    title: {
      fontWeight: "semibold",
      textStyle: "sm",
    },
    description: {
      color: "fg.muted",
      textStyle: "sm",
    },
  },
  variants: {
    state: {
      success: {
        root: {
          backgroundColor: "green.100",
          color: "green.800",
        },
      },
      error: {
        root: {
          backgroundColor: "red.100",
          color: "red.800",
        },
      },
    },
  },
});
