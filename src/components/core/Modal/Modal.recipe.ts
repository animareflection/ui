import { dialogAnatomy } from "@ark-ui/anatomy";
import { defineSlotRecipe } from "@pandacss/dev";

export const modalRecipe = defineSlotRecipe({
  className: "modal",
  description: "The styles for the Modal component",
  slots: dialogAnatomy.keys(),
  base: {
    backdrop: {
      backdropFilter: "blur(4px)",
      background: {
        // TODO: replace when supported in Panda: bg.canvas/80
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
      alignItems: "center",
      display: "flex",
      inset: 0,
      justifyContent: "center",
      position: "fixed",
      zIndex: "modal",
    },
    content: {
      background: "bg.default",
      boxShadow: "lg",
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
        animation: "modal-in",
      },
      _closed: {
        animation: "modal-out",
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
    },
  },
});
