import { defineSlotRecipe } from "@pandacss/dev";

export const textareaRecipe = defineSlotRecipe({
  className: "textarea",
  description: "The styles for the Textarea component",
  slots: ["label", "textarea"],
  base: {
    textarea: {
      backgroundColor: "bg.default",
      color: "fg.default",
      appearance: "none",
      borderColor: "border.default",
      borderRadius: "sm",
      borderWidth: "1px",
      minW: 0,
      outline: 0,
      p: 3,
      fontSize: "md",
      position: "relative",
      transitionDuration: "normal",
      transitionProperty: "box-shadow, border-color",
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
  },
  variants: {
    variant: {
      flushed: {
        textarea: {
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
        textarea: {
          backgroundColor: "border.default",
          _focus: {
            backgroundColor: "bg.default",
            borderColor: "border.accent",
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
            boxShadow: "none",
          },
        },
      },
    },
    size: {
      xs: { textarea: { p: 2, fontSize: "xs" }, label: { fontSize: "xs" } },
      sm: { textarea: { p: 2.5, fontSize: "sm" }, label: { fontSize: "sm" } },
      lg: { textarea: { p: 3.5, fontSize: "md" }, label: { fontSize: "md" } },
      xl: { textarea: { p: 4, fontSize: "lg" }, label: { fontSize: "lg" } },
    },
  },
});
