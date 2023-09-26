import { popoverAnatomy } from "@ark-ui/anatomy";
import { defineSlotRecipe } from "@pandacss/dev";

export const flyoutRecipe = defineSlotRecipe({
  className: "flyout",
  description: "The styles for the Flyout component",
  slots: [...popoverAnatomy.keys(), "closeTriggerIcon"],
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
      width: { base: "xs", sm: "sm" },
      _open: {
        animation: "fade-in",
      },
      _closed: {
        animation: "fade-out",
      },
    },
    closeTrigger: {
      p: 2,
      position: "absolute",
      top: 2,
      right: 2,
      borderRadius: "md",
      cursor: "pointer",
      backgroundColor: { base: "inherit", _hover: "bg.emphasized" },
    },
    closeTriggerIcon: {
      color: "fg.default!",
    },
    title: {
      p: 4,
      color: "fg.default",
      fontWeight: "bold",
      textStyle: "lg",
      borderBottomWidth: "1px",
      borderColor: "border.default",
    },
    description: {
      p: 3,
      color: "fg.muted",
      textStyle: "md",
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
