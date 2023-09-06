import { defineSlotRecipe } from "@pandacss/dev";

export const flyoutRecipe = defineSlotRecipe({
  className: "flyout",
  description: "A flyout style",
  slots: [
    "root",
    "arrow",
    "arrowTip",
    "closeTrigger",
    "content",
    "description",
    "positioner",
    "title",
    "trigger",
  ],
  base: {
    positioner: {
      position: "relative",
      zIndex: "popover",
    },
    content: {
      background: "bg.default",
      borderRadius: "md",
      borderWidth: "1px",
      borderColor: "border.default",
      width: { base: "xs", sm: "sm" },
      position: "relative",
      mx: 1,
      px: {
        base: 4,
        md: 6,
      },
      py: 6,
      _open: {
        animation: "fadeIn 0.25s ease-out",
      },
      _closed: {
        animation: "fadeOut 0.2s ease-out",
      },
    },
    title: {
      color: "fg.default",
      fontWeight: "semibold",
      textStyle: "lg",
    },
    description: {
      color: "fg.muted",
      textStyle: "sm",
    },
    arrow: {
      "--arrow-size": "var(--sizes-3)",
      "--arrow-background": "var(--colors-bg-default)",
    },
    arrowTip: {
      borderTopWidth: "1px",
      borderLeftWidth: "1px",
    },
  },
});
