import { defineSlotRecipe } from "@pandacss/dev";

export const recipe = defineSlotRecipe({
  className: "drawer",
  description: "The styles for the Drawer component",
  slots: [
    "root",
    "backdrop",
    "closeTrigger",
    "container",
    "content",
    "description",
    "title",
    "trigger",
  ],
  base: {
    backdrop: {
      backdropFilter: "blur(4px)",
      background: {
        base: "rgba(250, 250, 250, 0.8)",
        _dark: "rgba(10, 10, 10, 0.8)",
      },
      inset: 0,
      position: "fixed",
      zIndex: "overlay",
      _open: {
        animation: "backdrop-in",
      },
      _closed: {
        animation: "backdrop-out",
      },
    },
    container: {
      alignItems: "center",
      display: "flex",
      top: 0,
      bottom: 0,
      right: 0,
      justifyContent: "center",
      position: "fixed",
      zIndex: "modal",
    },
    content: {
      background: "bg.default",
      boxShadow: "lg",
      height: "full",
      width: { base: "full", sm: "sm" },
      overflowY: "auto",
      position: "relative",
      px: {
        base: 4,
        md: 6,
      },
      py: 6,
      _open: {
        animation: { base: "drawer-in-bottom", sm: "drawer-in-right" },
      },
      _closed: {
        animation: { base: "drawer-out-bottom", sm: "drawer-out-right" },
      },
    },
    title: {
      fontWeight: "bold",
      textStyle: "xl",
      color: "fg.default",
    },
    description: {
      color: "fg.muted",
      textStyle: "sm",
    },
  },
  variants: {
    placement: {
      left: {
        container: {
          left: 0,
          right: "auto",
        },
        content: {
          _open: {
            animation: { base: "drawer-in-bottom", sm: "drawer-in-left" },
          },
          _closed: {
            animation: { base: "drawer-out-bottom", sm: "drawer-out-left" },
          },
        },
      },
    },
  },
});
