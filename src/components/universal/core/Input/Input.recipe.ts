import { defineSlotRecipe } from "@pandacss/dev";

export const inputRecipe = defineSlotRecipe({
  className: "input",
  description: "The styles for the Input component",
  slots: ["label", "input"],
  base: {
    input: {
      appearance: "none",
      color: "fg.default",
      caretColor: "accent.default",
      backgroundColor: "bg.default",
      borderColor: "border.emphasized",
      borderRadius: "md",
      borderWidth: "1px",
      px: 3,
      h: 10,
      minW: 10,
      fontSize: "md",
      outline: 0,
      position: "relative",
      transitionDuration: "normal",
      transitionProperty: "box-shadow, border-color",
      transitionTimingFunction: "default",
      width: "full",
      _disabled: {
        opacity: 0.4,
        cursor: "not-allowed",
      },
      _focus: {
        borderColor: "border.accent",
        boxShadow: "accent",
      },
    },
    label: {
      fontWeight: "md",
      color: "fg.emphasized",
    },
  },
  variants: {
    size: {
      "2xs": {
        input: { px: 1.5, h: 7, minW: 7, fontSize: "xs" },
        label: { fontSize: "xs" },
      },
      xs: {
        input: { px: 2, h: 8, minW: 8, fontSize: "xs" },
        label: { fontSize: "xs" },
      },
      sm: {
        input: { px: 2.5, h: 9, minW: 9, fontSize: "sm" },
        label: { fontSize: "sm" },
      },
      lg: {
        input: { px: 3.5, h: 11, minW: 11, fontSize: "md" },
        label: { fontSize: "md" },
      },
      xl: {
        input: { px: 4, h: 12, minW: 12, fontSize: "lg" },
        label: { fontSize: "lg" },
      },
    },
  },
});
