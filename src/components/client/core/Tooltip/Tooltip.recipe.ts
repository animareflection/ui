import { defineSlotRecipe } from "@pandacss/dev";

export const tooltipRecipe = defineSlotRecipe({
  className: "tooltip",
  description: "The styles for the Tooltip component",
  slots: ["positioner", "content", "arrow", "arrowTip"],
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
    arrow: {
      "--arrow-size": "var(--sizes-3)",
      "--arrow-background": "var(--colors-bg-default)",
    },
    arrowTip: {
      borderTopWidth: "1px",
      borderColor: "border.default",
      borderLeftWidth: "1px",
    },
  },
});