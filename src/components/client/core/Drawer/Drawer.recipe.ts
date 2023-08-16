import { sva } from "generated/panda/css";

export const recipe = sva({
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
      justifyContent: "center",
      position: "fixed",
      zIndex: "modal",
    },
    content: {
      background: "background.primary",
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
    },
    title: {
      fontWeight: "bold",
      textStyle: "xl",
      color: "foreground.primary",
    },
    description: {
      color: "gray.400",
      textStyle: "sm",
    },
  },
  defaultVariants: {
    placement: "right",
  },
  variants: {
    placement: {
      left: {
        container: {
          left: 0,
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
      right: {
        container: {
          right: 0,
        },
        content: {
          _open: {
            animation: { base: "drawer-in-bottom", sm: "drawer-in-right" },
          },
          _closed: {
            animation: { base: "drawer-out-bottom", sm: "drawer-out-right" },
          },
        },
      },
    },
  },
});
