import { defineSlotRecipe } from "@pandacss/dev";

export const alertRecipe = defineSlotRecipe({
  className: "alert",
  description: "The styles for the Alert component",
  slots: ["root", "title", "description", "icon"],
  base: {
    root: {
      backgroundColor: "bg.default",
      borderRadius: "md",
      borderWidth: "1px",
      borderColor: "border.emphasized",
      boxShadow: "md",
      p: 4,
      w: "full",
    },
    title: {
      fontWeight: "medium",
    },
    description: {
      color: "fg.muted",
      textStyle: "sm",
    },
  },
  variants: {
    variant: {
      warning: {
        root: {
          backgroundColor: "yellow.100",
          borderColor: "yellow.600",
        },
        title: {
          color: "yellow.800",
        },
        description: {
          color: "yellow.600",
        },
        icon: {
          color: "yellow.800!",
        },
      },
      error: {
        root: {
          backgroundColor: "red.100",
          borderColor: "red.600",
        },
        title: {
          color: "red.800",
        },
        description: {
          color: "red.600",
        },
        icon: {
          color: "red.800!",
        },
      },
    },
  },
});
