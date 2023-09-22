import { defineSlotRecipe } from "@pandacss/dev";

export const checkboxRecipe = defineSlotRecipe({
  className: "checkbox",
  description: "The styles for the Accordion component",
  slots: ["root", "control", "label"],
  base: {
    root: {
      w: "100%",
      alignItems: "center",
      display: "flex",
      gap: 3,
    },
    label: {
      color: "fg.emphasized",
      fontWeight: "medium",
      textStyle: "md",
      flex: 1,
    },
    control: {
      alignItems: "center",
      borderColor: "border.emphasized",
      borderWidth: "1px",
      color: "accent.fg",
      cursor: "pointer",
      display: "flex",
      width: 5,
      height: 5,
      borderRadius: "xs",
      "& svg": {
        width: 3.5,
        height: 3.5,
      },
      justifyContent: "center",
      transitionDuration: "normal",
      transitionProperty: "border-color, background",
      transitionTimingFunction: "default",
      _hover: {
        background: "bg.subtle",
      },
      _checked: {
        background: "accent.default",
        borderColor: "border.accent",
        _hover: {
          background: "accent.default",
        },
      },
    },
  },
  variants: {
    size: {
      sm: {
        root: {
          gap: 2,
        },
        control: {
          width: 4,
          height: 4,
          borderRadius: "xs",
          "& svg": {
            width: 3,
            height: 3,
          },
        },
        label: {
          textStyle: "sm",
        },
      },
      lg: {
        root: {
          gap: 3.5,
        },
        control: {
          width: 6,
          height: 6,
          borderRadius: "sm",
          "& svg": {
            width: 4,
            height: 4,
          },
        },
        label: {
          textStyle: "lg",
        },
      },
    },
  },
});
