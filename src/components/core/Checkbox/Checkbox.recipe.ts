import { checkboxAnatomy } from "@ark-ui/anatomy";
import { defineSlotRecipe } from "@pandacss/dev";

export const checkboxRecipe = defineSlotRecipe({
  className: "checkbox",
  description: "The styles for the Checkbox component",
  slots: checkboxAnatomy.keys(),
  base: {
    root: {
      colorPalette: "brand.primary",
      w: "100%",
      alignItems: "center",
      display: "flex",
    },
    label: {
      color: { base: "colorPalette.600", _dark: "colorPalette.400" },
      fontWeight: "medium",
      flex: 1,
    },
    control: {
      alignItems: "center",
      borderColor: { base: "colorPalette.600", _dark: "colorPalette.400" },
      borderWidth: "1px",
      color: "accent.fg",
      cursor: "pointer",
      display: "flex",
      justifyContent: "center",
      transitionDuration: "normal",
      transitionProperty: "border-color, background",
      transitionTimingFunction: "default",
      _hover: {
        background: "bg.subtle",
      },
      _checked: {
        background: "accent.default",
        borderColor: { base: "colorPalette.600", _dark: "colorPalette.400" },
        _hover: {
          background: "accent.default",
        },
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
      md: {
        root: {
          gap: 3,
        },
        control: {
          width: 5,
          height: 5,
          borderRadius: "xs",
          "& svg": {
            width: 3.5,
            height: 3.5,
          },
        },
        label: {
          textStyle: "md",
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
