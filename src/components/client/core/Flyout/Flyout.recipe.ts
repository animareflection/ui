import { defineSlotRecipe } from "@pandacss/dev";

export const flyoutRecipe = defineSlotRecipe({
  className: "flyout",
  description: "The styles for the Flyout component",
  slots: [
    "root",
    "arrow",
    "arrowTip",
    "closeTrigger",
    "closeTriggerIcon",
    "content",
    "description",
    "positioner",
    "title",
    "trigger",
  ],
  base: {
    positioner: {
      position: "relative",
    },
    content: {
      background: "bg.muted",
      borderRadius: "md",
      borderWidth: "1px",
      borderColor: "border.subtle",
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
      color: "fg.default",
    },
    title: {
      p: 4,
      color: "fg.default",
      fontWeight: "bold",
      textStyle: "lg",
      borderBottomWidth: "1px",
      borderColor: "border.subtle",
    },
    description: {
      p: 3,
      color: "fg.muted",
      textStyle: "md",
    },
    arrow: {
      "--arrow-size": "var(--sizes-3)",
      "--arrow-background": "var(--colors-bg-muted)",
    },
    arrowTip: {
      borderTopWidth: "1px",
      borderColor: "border.subtle",
      borderLeftWidth: "1px",
    },
  },
});
