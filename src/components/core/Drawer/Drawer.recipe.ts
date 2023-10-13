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
      display: "flex",
      justifyContent: "flex-end",
      inset: 0,
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
        animation: "drawer-in-right",
      },
      _closed: {
        animation: "drawer-out-right",
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
      cursor: "pointer",
      _focus: { outline: "none" },
      _disabled: {
        cursor: "not-allowed",
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
      _focus: { outline: "none" },
    },
  },
  variants: {
    placement: {
      left: {
        container: {
          justifyContent: "flex-start",
        },
        content: {
          _open: {
            animation: "drawer-in-left",
          },
          _closed: {
            animation: "drawer-out-left",
          },
        },
      },
      bottom: {
        container: {
          justifyContent: undefined,
          alignItems: "flex-end",
        },
        content: {
          width: "full",
          _open: {
            animation: "drawer-in-bottom",
          },
          _closed: {
            animation: "drawer-out-bottom",
          },
        },
      },
      top: {
        container: {
          justifyContent: undefined,
          alignItems: "flex-start",
        },
        content: {
          width: "full",
          _open: {
            animation: "drawer-in-top",
          },
          _closed: {
            animation: "drawer-out-top",
          },
        },
      },
    },
  },
  jsx: ["Drawer", "DrawerTemplate"],
});
