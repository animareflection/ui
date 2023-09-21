import { defineSlotRecipe } from "@pandacss/dev";

export const radioGroupRecipe = defineSlotRecipe({
  className: "radioGroup",
  description: "The styles for the RadioGroup component",
  slots: ["root", "radio", "radioControl", "radioLabel"],
  base: {
    root: {
      display: "flex",
      flexDirection: {
        _vertical: "column",
        _horizontal: "row",
      },
      size: "md",
      gap: {
        _vertical: "4",
        _horizontal: "6",
      },
    },
    radioControl: {
      background: "transparent",
      borderColor: "border.emphasized",
      borderRadius: "full",
      borderWidth: "1px",
      transitionDuration: "normal",
      transitionProperty: "background",
      transitionTimingFunction: "default",
      width: "5",
      height: "5",
      _hover: {
        background: "bg.muted",
      },
      _checked: {
        background: "accent.default",
        borderColor: "border.accent",
        outlineColor: "bg.default",
        outlineStyle: "solid",
        outlineWidth: "4px",
        outlineOffset: "-5px",
        _hover: {
          background: "accent.default",
        },
      },
      _disabled: {
        borderColor: "border.subtle",
        color: "fg.muted",

        _hover: {
          bg: "initial",
          color: "fg.subtle",
        },
      },
    },
    radio: {
      alignItems: "center",
      cursor: "pointer",
      display: "flex",
      _disabled: {
        cursor: "not-allowed",
      },
      gap: "3",
    },
    radioLabel: {
      color: "fg.emphasized",
      fontWeight: "medium",
      textStyle: "md",
      _disabled: {
        color: "fg.subtle",
      },
    },
  },
  variants: {
    size: {
      sm: {
        root: {
          gap: {
            _vertical: "3",
            _horizontal: "4",
          },
        },
        radio: {
          gap: "2",
        },
        radioControl: {
          width: "4",
          height: "4",
          _checked: {
            outlineWidth: "3px",
            outlineOffset: "-4px",
          },
        },
        radioLabel: {
          textStyle: "sm",
        },
      },
      lg: {
        root: {
          gap: {
            _vertical: "5",
            _horizontal: "8",
          },
        },
        radio: {
          gap: "4",
        },
        radioControl: {
          width: "6",
          height: "6",
          _checked: {
            outlineWidth: "5px",
            outlineOffset: "-6px",
          },
        },
        radioLabel: {
          textStyle: "lg",
        },
      },
    },
  },
});
