import { defineSlotRecipe } from "@pandacss/dev";

export const alertRecipe = defineSlotRecipe({
  className: "alert",
  description: "The styles for the Alert component",
  slots: ["root", "icon", "title", "description"],
  base: {
    root: {
      backgroundColor: "bg.default",
      borderRadius: "md",
      borderWidth: "1px",
      boxShadow: "md",
      p: 4,
      textStyle: "sm",
      w: "full",
    },
    icon: {
      color: "fg.emphasized",
    },
    title: {
      fontWeight: "medium",
    },
    description: {
      color: "fg.muted",
    },
  },
});
