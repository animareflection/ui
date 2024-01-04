import { defineSlotRecipe } from "@pandacss/dev";

export const textareaRecipe = defineSlotRecipe({
  className: "textarea",
  description: "The styles for the Textarea component",
  slots: ["root", "label", "textarea"],
  base: {
    root: {
      colorPalette: "brand.primary",
      display: "flex",
      flexDirection: "column",
    },
    textarea: {
      color: "fg.default",
      appearance: "none",
      borderColor: "border.default",
      outline: 0,
      position: "relative",
      transitionDuration: "normal",
      transitionProperty: "box-shadow, border-color",
      width: "full",
      _disabled: {
        opacity: 0.4,
        cursor: "not-allowed",
      },
    },
    label: {
      color: "fg.emphasized",
    },
  },
  defaultVariants: {
    variant: "primary",
    size: "md",
  },
  variants: {
    variant: {
      primary: {
        textarea: {
          backgroundColor: "bg.default",
          borderWidth: "1px",
          borderRadius: "sm",
          _focus: {
            borderColor: {
              base: "colorPalette.600",
              _dark: "colorPalette.400",
            },
            boxShadow: "sm",
          },
        },
      },
      flushed: {
        textarea: {
          backgroundColor: "transparent",
          borderWidth: "0 0 1px",
          borderRadius: "0 !important",
          _focus: {
            borderColor: {
              base: "colorPalette.600",
              _dark: "colorPalette.400",
            },
            boxShadow: "none",
          },
        },
      },
      filled: {
        textarea: {
          backgroundColor: "border.default",
          borderWidth: "1px",
          borderRadius: "sm",
          _focus: {
            backgroundColor: "bg.default",
            borderColor: {
              base: "colorPalette.600",
              _dark: "colorPalette.400",
            },
            boxShadow: "sm",
          },
        },
      },
      unstyled: {
        textarea: {
          backgroundColor: "transparent",
          borderWidth: 0,
          borderRadius: 0,
          _focus: {
            borderColor: {
              base: "colorPalette.600",
              _dark: "colorPalette.400",
            },
            boxShadow: "none",
          },
        },
      },
    },
    size: {
      xs: {
        root: { gap: 0.5 },
        textarea: { p: 2, minW: 8, fontSize: "xs" },
        label: { fontSize: "xs" },
      },
      sm: {
        root: { gap: 1 },
        textarea: { p: 2.5, minW: 9, fontSize: "sm" },
        label: { fontSize: "sm" },
      },
      md: {
        root: { gap: 1.5 },
        textarea: { p: 3, minW: 10, fontSize: "md" },
        label: { fontSize: "md" },
      },
      lg: {
        root: { gap: 1.5 },
        textarea: { p: 3.5, minW: 11, fontSize: "md" },
        label: { fontSize: "md" },
      },
      xl: {
        root: { gap: 1.5 },
        textarea: { p: 4, minW: 12, fontSize: "lg" },
        label: { fontSize: "lg" },
      },
    },
  },
});
