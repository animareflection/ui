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
      borderColor: "border.emphasized",
      boxShadow: "md",
      p: 4,
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
      textStyle: "sm",
    },
  },
});
