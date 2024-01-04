import { defineSlotRecipe } from "@pandacss/dev";

export const statRecipe = defineSlotRecipe({
  className: "stat",
  description: "The styles for the Stat component",
  slots: ["root", "label", "value", "helpText"],
  base: {
    root: {
      display: "flex",
      w: "fit",
      colorPalette: "brand.primary",
    },
    helpText: {
      fontWeight: "light",
    },
    label: {
      fontWeight: "normal",
    },
    value: {
      fontWeight: "bold",
    },
  },
  defaultVariants: {
    variant: "primary",
    orientation: "horizontal",
    size: "md",
  },
  variants: {
    variant: {
      primary: {
        root: {
          bgColor: "bg.default",
          borderColor: "border.default",
          color: "fg.default",
          boxShadow: "sm",
          borderWidth: "1px",
          borderRadius: "md",
        },
      },
      unstyled: {
        root: {
          bgColor: "transparent",
          borderColor: "border.default",
          color: "fg.default",
          boxShadow: "none",
          borderWidth: 0,
          borderRadius: 0,
        },
      },
      outline: {
        root: {
          bgColor: "transparent",
          borderColor: "colorPalette.500",
          color: "fg.default",
          boxShadow: "sm",
          borderWidth: "1px",
          borderRadius: "md",
        },
      },
      subtle: {
        root: {
          bgColor: { base: "colorPalette.50", _dark: "colorPalette.950" },
          borderColor: "border.default",
          color: "fg.default",
          boxShadow: "sm",
          borderWidth: 0,
          borderRadius: "md",
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
      md: {
        root: { px: 4, py: 2 },
        helpText: { textStyle: "sm" },
        label: { textStyle: "md" },
        value: { textStyle: "lg" },
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
