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
        // TODO: replace when supported in Panda: bg.canvas/80
        base: "rgba(250, 250, 250, 0.8)",
        _dark: "rgba(10, 10, 10, 0.8)",
      },
      inset: "0",
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
      inset: "0",
      justifyContent: "center",
      position: "fixed",
      zIndex: "modal",
    },
    content: {
      background: "white",
      boxShadow: "lg",
      borderRadius: "md",
      width: { base: "xs", sm: "sm" },
      position: "relative",
      px: {
        base: "4",
        md: "6",
      },
      py: "6",
      _open: {
        animation: "modal-in",
      },
      _closed: {
        animation: "modal-out",
      },
    },
    title: {
      fontWeight: "semibold",
      textStyle: "lg",
    },
    description: {
      color: "gray.400",
      textStyle: "sm",
    },
  },
});
