import { radioGroupAnatomy } from "@ark-ui/anatomy";
import { defineSlotRecipe } from "@pandacss/dev";

export const radioGroupRecipe = defineSlotRecipe({
  className: "radioGroup",
  description: "The styles for the RadioGroup component",
  slots: radioGroupAnatomy.keys(),
  base: {
    root: {
      colorPalette: "brand.primary",
      display: "flex",
      w: "fit-content",
      h: "fit-content",
      flexDirection: {
        _vertical: "column",
        _horizontal: "row",
      },
      size: "md",
    },
    itemControl: {
      background: "transparent",
      borderColor: {
        base: "colorPalette.600",
        _dark: "colorPalette.400",
      },
      borderRadius: "full",
      borderWidth: "1px",
      transitionDuration: "normal",
      transitionProperty: "background",
      transitionTimingFunction: "default",
      _hover: {
        background: "bg.muted",
      },
      _checked: {
        background: "colorPalette.500",
        borderColor: { base: "colorPalette.600", _dark: "colorPalette.400" },
        outlineColor: "bg.default",
        outlineStyle: "solid",
        _hover: {
          background: "colorPalette.500",
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
    item: {
      alignItems: "center",
      cursor: "pointer",
      display: "flex",
      _disabled: {
        cursor: "not-allowed",
      },
    },
    label: {
      color: { base: "colorPalette.600", _dark: "colorPalette.400" },
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
        item: {
          gap: 2,
        },
        itemControl: {
          width: 4,
          height: 4,
          _checked: {
            outlineWidth: "3px",
            outlineOffset: "-4px",
          },
        },
        label: {
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
        item: {
          gap: 3,
        },
        itemControl: {
          width: 5,
          height: 5,
          _checked: {
            outlineWidth: "4px",
            outlineOffset: "-5px",
          },
        },
        label: {
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
        item: {
          gap: 4,
        },
        itemControl: {
          width: 6,
          height: 6,
          _checked: {
            outlineWidth: "5px",
            outlineOffset: "-6px",
          },
        },
        label: {
          textStyle: "lg",
        },
      },
    },
  },
});
