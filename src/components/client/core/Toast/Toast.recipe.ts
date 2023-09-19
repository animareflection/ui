import { defineSlotRecipe } from "@pandacss/dev";

export const toastRecipe = defineSlotRecipe({
  className: "toast",
  description: "The styles for the Toast component",
  slots: ["closeTrigger", "title", "description"],
  base: {
    closeTrigger: {
      position: "absolute",
      cursor: "pointer",
      color: "fg.muted",
      top: 2,
      right: 2,
      _hover: {
        opacity: 0.8,
      },
    },
    title: {
      fontWeight: "semibold",
    },
    description: {
      fontSize: "sm",
      color: "fg.muted",
    },
  },
  variants: {
    variant: {
      success: {
        closeTrigger: {
          color: "green.500",
        },
        description: {
          color: "green.500",
        },
      },
      error: {
        closeTrigger: {
          color: "red.500",
        },
        description: {
          color: "red.500",
        },
      },
      loading: {
        closeTrigger: {
          color: "brand.primary.500",
        },
        description: {
          color: "brand.primary.500",
        },
      },
    },
  },
});
