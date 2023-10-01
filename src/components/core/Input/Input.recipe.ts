import { defineSlotRecipe } from "@pandacss/dev";

export const inputRecipe = defineSlotRecipe({
  className: "input",
  description: "The styles for the Input component",
  slots: ["label", "input", "addon", "leftElement", "rightElement"],
  base: {
    input: {
      appearance: "none",
      color: "fg.default",
      caretColor: "accent.default",
      backgroundColor: "bg.default",
      borderColor: "border.default",
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
        boxShadow: "sm",
      },
    },
    label: {
      fontWeight: "md",
      color: "fg.emphasized",
    },
    addon: {
      fontSize: "md",
      px: 3,
      display: "flex",
      alignItems: "center",
      backgroundColor: "border.default",
      color: "fg.default",
    },
    leftElement: {
      position: "absolute",
      left: 3,
      zIndex: "docked",
      placeSelf: "center",
      color: "fg.subtle",
    },
    rightElement: {
      position: "absolute",
      right: 3,
      zIndex: "docked",
      placeSelf: "center",
      color: "fg.subtle",
    },
  },
  variants: {
    variant: {
      flushed: {
        input: {
          backgroundColor: "transparent",
          borderWidth: "0 0 1px",
          borderRadius: "0 !important",
          _focus: {
            borderColor: "border.accent",
            boxShadow: "none",
          },
        },
      },
      filled: {
        input: {
          backgroundColor: "border.default",
          _focus: {
            backgroundColor: "bg.default",
            borderColor: "border.accent",
            boxShadow: "sm",
          },
        },
      },
      unstyled: {
        input: {
          backgroundColor: "transparent",
          borderWidth: 0,
          borderRadius: 0,
          _focus: {
            boxShadow: "none",
          },
        },
      },
    },
    size: {
      "2xs": {
        input: { px: 1.5, h: 7, minW: 7, fontSize: "xs" },
        label: { fontSize: "xs" },
        addon: { fontSize: "xs", px: 1.5 },
        leftElement: { fontSize: "xs" },
        rightElement: { fontSize: "xs" },
      },
      xs: {
        input: { px: 2, h: 8, minW: 8, fontSize: "xs" },
        label: { fontSize: "xs" },
        addon: { fontSize: "xs", px: 2 },
        leftElement: { fontSize: "xs" },
        rightElement: { fontSize: "xs" },
      },
      sm: {
        input: { px: 2.5, h: 9, minW: 9, fontSize: "sm" },
        label: { fontSize: "sm" },
        addon: { fontSize: "sm", px: 2.5 },
        leftElement: { fontSize: "sm" },
        rightElement: { fontSize: "sm" },
      },
      lg: {
        input: { px: 3.5, h: 11, minW: 11, fontSize: "md" },
        label: { fontSize: "md" },
        addon: { fontSize: "md", px: 3.5 },
        leftElement: { fontSize: "md" },
        rightElement: { fontSize: "md" },
      },
      xl: {
        input: { px: 4, h: 12, minW: 12, fontSize: "lg" },
        label: { fontSize: "lg" },
        addon: { fontSize: "lg", px: 4 },
        leftElement: { fontSize: "lg" },
        rightElement: { fontSize: "lg" },
      },
    },
  },
});
