import { defineSlotRecipe } from "@pandacss/dev";

export const toastRecipe = defineSlotRecipe({
  className: "toast",
  description: "The styles for the Toast component",
  slots: [
    "root",
    "title",
    "group",
    "description",
    "closeTrigger",
    "closeTriggerIcon",
  ],
  base: {
    root: {
      position: "relative",
      backgroundColor: "bg.default",
      color: "fg.emphasized",
      borderRadius: "lg",
      boxShadow: "lg",
      minWidth: "xs",
      p: 4,
      _open: {
        animation: "slide-in-top 200ms",
      },
    },
    title: {
      fontWeight: "semibold",
      textStyle: "sm",
    },
    description: {
      color: "fg.muted",
      textStyle: "sm",
    },
    closeTrigger: {
      position: "absolute",
      top: 2,
      right: 2,
      p: "1 !important",
      backgroundColor: { base: "inherit", _hover: "bg.subtle" },
    },
    closeTriggerIcon: {
      color: "fg.default",
    },
  },
  variants: {
    state: {
      success: {
        root: {
          backgroundColor: "green.100",
          color: "green.800",
        },
        description: {
          color: "green.600",
        },
        closeTrigger: {
          backgroundColor: { base: "inherit", _hover: "green.200" },
        },
        closeTriggerIcon: {
          color: "green.600",
        },
      },
      error: {
        root: {
          backgroundColor: "red.100",
          color: "red.800",
        },
        description: {
          color: "red.600",
        },
        closeTrigger: {
          backgroundColor: { base: "inherit", _hover: "red.200" },
        },
        closeTriggerIcon: {
          color: "red.600",
        },
      },
    },
  },
});
