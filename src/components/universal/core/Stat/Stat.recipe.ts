import { defineSlotRecipe } from "@pandacss/dev";

export const statRecipe = defineSlotRecipe({
  className: "stat",
  description: "The styles for the Stat component",
  slots: ["root", "label", "value", "helpText"],
  base: {
    root: {
      display: "flex",
      flexDirection: "column",
      alignItems: "start",
      borderRadius: "md",
      boxShadow: "sm",
      bgColor: "bg.default",
      borderWidth: "1px",
      borderColor: "border.default",
      color: "fg.default",
      w: "fit",
      px: 4,
      py: 2,
      gap: 0,
    },
    helpText: {
      textStyle: "sm",
      fontWeight: "light",
    },
    label: {
      textStyle: "md",
      fontWeight: "normal",
    },
    value: {
      textStyle: "lg",
      fontWeight: "bold",
    },
  },
  variants: {
    variant: {
      unstyled: {
        root: {
          bgColor: "transparent",
          boxShadow: "none",
          borderWidth: 0,
          borderRadius: 0,
        },
      },
      outline: {
        root: {
          bgColor: "transparent",
          borderWidth: 1,
          borderColor: "accent.default",
        },
      },
      subtle: {
        root: {
          bgColor: "fg.subtle",
          borderWidth: 1,
          color: "accent.fg",
          borderColor: "border.subtle",
        },
      },
    },
    orientation: {
      horizontal: {
        root: {
          alignItems: "center",
          flexDirection: "row",
          gap: 4,
        },
      },
      vertical: {
        root: {
          alignItems: "start",
          flexDirection: "column",
          gap: 0,
        },
      },
    },
    size: {
      sm: {
        root: { px: 2, py: 1 },
        helpText: { textStyle: "xs" },
        label: { textStyle: "sm" },
        value: { textStyle: "md" },
      },
      lg: {
        root: { px: 6, py: 3 },
        helpText: { textStyle: "md" },
        label: { textStyle: "lg" },
        value: { textStyle: "xl" },
      },
      xl: {
        root: { px: 8, py: 4 },
        helpText: { textStyle: "lg" },
        label: { textStyle: "xl" },
        value: { textStyle: "2xl" },
      },
    },
  },
});
