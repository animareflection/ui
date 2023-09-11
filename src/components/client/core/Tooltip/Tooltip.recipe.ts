import { defineSlotRecipe } from "@pandacss/dev";

export const tooltipRecipe = defineSlotRecipe({
  className: "tooltip",
  description: "The styles for the Tooltip component",
  slots: ["content", "positioner"],
  base: {
    positioner: {
      position: "relative",
    },
    content: {
      background: "bg.default",
      boxShadow: "lg",
      borderRadius: "md",
      borderWidth: "1px",
      borderColor: "border.default",
      fontWeight: "semibold",
      px: "3",
      py: "2",
      textStyle: "sm",
      color: "fg.default",
    },
  },
});
