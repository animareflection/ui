import { defineSlotRecipe } from "@pandacss/dev";

export const alertRecipe = defineSlotRecipe({
  className: "alert",
  description: "The styles for the Alert component",
  slots: ["root", "title", "description", "icon"],
  base: {
    root: {
      borderRadius: "md",
      borderWidth: "1px",
      boxShadow: "md",
      p: 4,
      w: "full",
      gap: 4,
      flexDirection: { base: "column", sm: "row" },
      alignItems: { sm: "center" },
    },
    title: {
      fontWeight: "medium",
    },
    description: {
      color: "fg.muted",
      textStyle: "sm",
    },
  },
  defaultVariants: {
    variant: "info",
  },
  variants: {
    variant: {
      info: {
        root: {
          backgroundColor: "brand.primary.100",
          borderColor: "brand.primary.600",
        },
        title: {
          color: "brand.primary.800!",
        },
        description: {
          color: "brand.primary.600!",
        },
        icon: {
          color: "brand.primary.800",
        },
      },
      warning: {
        root: {
          backgroundColor: "yellow.100",
          borderColor: "yellow.600",
        },
        title: {
          color: "yellow.800!",
        },
        description: {
          color: "yellow.600!",
        },
        icon: {
          color: "yellow.800",
        },
      },
      error: {
        root: {
          backgroundColor: "red.100",
          borderColor: "red.600",
        },
        title: {
          color: "red.800!",
        },
        description: {
          color: "red.600!",
        },
        icon: {
          color: "red.800",
        },
      },
    },
  },
});
