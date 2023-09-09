import { defineSlotRecipe } from "@pandacss/dev";

export const toastRecipe = defineSlotRecipe({
  className: "toast",
  description: "The styles for the Toast component",
  slots: ["root", "title", "group", "description"],
  base: {
    root: {
      position: "relative",
      background: "bg.default",
      borderRadius: "lg",
      boxShadow: "lg",
      minWidth: "xs",
      p: 4,
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
});
