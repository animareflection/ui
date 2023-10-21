import { radioGroupAnatomy } from "@ark-ui/anatomy";
import { defineSlotRecipe } from "@pandacss/dev";

export const radioGroupRecipe = defineSlotRecipe({
  className: "radioGroup",
  description: "The styles for the RadioGroup component",
  slots: radioGroupAnatomy.keys(),
  base: {
    root: {
      display: "flex",
      w: "fit-content",
      h: "fit-content",
      flexDirection: {
        _vertical: "column",
        _horizontal: "row",
      },
      size: "md",
    },
    radioControl: {
      background: "transparent",
      borderColor: "border.emphasized",
      borderRadius: "full",
      borderWidth: "1px",
      transitionDuration: "normal",
      transitionProperty: "background",
      transitionTimingFunction: "default",
      _hover: {
        background: "bg.muted",
      },
      _checked: {
        background: "accent.default",
        borderColor: "border.accent",
        outlineColor: "bg.default",
        outlineStyle: "solid",
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
    },
    radioLabel: {
      color: "fg.emphasized",
      fontWeight: "medium",
      _disabled: {
        color: "fg.subtle",
      },
    },
  },
  defaultVariants: {
    size: "md",
  },
  variants: {
    size: {
      sm: {
        root: {
          gap: {
            _vertical: 3,
            _horizontal: 4,
          },
        },
        radio: {
          gap: 2,
        },
        radioControl: {
          width: 4,
          height: 4,
          _checked: {
            outlineWidth: "3px",
            outlineOffset: "-4px",
          },
        },
        radioLabel: {
          textStyle: "sm",
        },
      },
      md: {
        root: {
          gap: {
            _vertical: 4,
            _horizontal: 6,
          },
        },
        radio: {
          gap: 3,
        },
        radioControl: {
          width: 5,
          height: 5,
          _checked: {
            outlineWidth: "4px",
            outlineOffset: "-5px",
          },
        },
        radioLabel: {
          textStyle: "md",
        },
      },
      lg: {
        root: {
          gap: {
            _vertical: 5,
            _horizontal: 8,
          },
        },
        radio: {
          gap: 4,
        },
        radioControl: {
          width: 6,
          height: 6,
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
