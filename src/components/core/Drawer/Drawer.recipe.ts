import { dialogAnatomy } from "@ark-ui/anatomy";
import { defineSlotRecipe } from "@pandacss/dev";

export const drawerRecipe = defineSlotRecipe({
  className: "drawer",
  description: "The styles for the Drawer component",
  slots: dialogAnatomy.extendWith("root").keys(),
  base: {
    backdrop: {
      backdropFilter: "blur(4px)",
      height: "100vh",
      width: "100vw",
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
    positioner: {
      display: "flex",
      inset: 0,
      height: "100vh",
      width: "100vw",
      position: "fixed",
      zIndex: "modal",
    },
    content: {
      background: "bg.default",
      boxShadow: "lg",
      height: "full",
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
      display: "flex",
      cursor: "pointer",
      borderRadius: "md",
      pos: "absolute",
      top: 3,
      right: 3,
      p: 2,
      bgColor: {
        base: "inherit",
        _hover: "bg.subtle",
      },
      _focus: { outline: "none" },
    },
  },
  defaultVariants: {
    placement: "right",
  },
  variants: {
    placement: {
      right: {
        positioner: {
          justifyContent: "flex-end",
        },
        content: {
          width: { base: "full", sm: "sm" },
          _open: {
            animation: "drawer-in-right",
          },
          _closed: {
            animation: "drawer-out-right",
          },
        },
      },
      left: {
        positioner: {
          justifyContent: "flex-start",
        },
        content: {
          width: { base: "full", sm: "sm" },
          _open: {
            animation: "drawer-in-left",
          },
          _closed: {
            animation: "drawer-out-left",
          },
        },
      },
      bottom: {
        positioner: {
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
        positioner: {
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
});
