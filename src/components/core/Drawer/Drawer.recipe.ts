import { dialogAnatomy } from "@ark-ui/anatomy";
import { defineSlotRecipe } from "@pandacss/dev";

export const drawerRecipe = defineSlotRecipe({
  className: "drawer",
  description: "The styles for the Drawer component",
  slots: dialogAnatomy.keys(),
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
        animation: "fade-in",
      },
      _closed: {
        animation: "fade-out",
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
    trigger: {
      color: "accent.fg",
      bgColor: "accent.default",
      w: "fit-content",
      h: "fit-content",
      cursor: "pointer",
      fontWeight: "bold",
      p: 3,
      borderRadius: "md",
      _focus: { outline: "none" },
      _hover: {
        bgColor: "accent.emphasized",
      },
      _disabled: {
        bgColor: "bg.disabled",
        cursor: "not-allowed",
        _hover: {
          bgColor: "bg.disabled",
        },
      },
    },
    closeTrigger: {
      cursor: "pointer",
      borderRadius: "md",
      pos: "absolute",
      top: 2,
      right: 2,
      p: 3,
      bgColor: {
        base: "inherit",
        _hover: "bg.subtle",
      },
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
