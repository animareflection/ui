import { tooltipAnatomy } from "@ark-ui/anatomy";
import { defineSlotRecipe } from "@pandacss/dev";

export const tooltipRecipe = defineSlotRecipe({
  className: "tooltip",
  description: "The styles for the Tooltip component",
  slots: tooltipAnatomy.keys(),
  base: {
    trigger: {
      w: "fit-content",
      h: "fit-content",
    },
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
      rotate: "45deg",
    },
    arrowTip: {
      borderTopWidth: "1px",
      borderColor: "border.default",
      borderLeftWidth: "1px",
      rotate: "-45deg",
    },
  },
});
