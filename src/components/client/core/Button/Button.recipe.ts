import { defineRecipe } from "@pandacss/dev";

export const recipe = defineRecipe({
  className: "button",
  description: "The styles for the Button component",
  base: {
    color: "accent.fg",
    bgColor: "accent.default",
    cursor: "pointer",
    fontWeight: "bold",
    p: 3,
    borderRadius: "md",
    _focus: { outline: "none" },
    _hover: {
      bgColor: "accent.emphasized",
    },
    _disabled: {
      bgColor: "bg.disabled",
      cursor: "not-allowed",
      _hover: {
        bgColor: "bg.disabled",
      },
    },
  },
  // TODO: add variants for accordion button: not expanded
  variants: {
    variant: {
      secondary: {
        borderWidth: "1px",
        borderColor: "border.emphasized",
        bgColor: "bg.default",
        color: "fg.emphasized",
        _hover: {
          background: "bg.subtle",
        },
        _disabled: {
          borderColor: "border.disabled",
          color: "fg.disabled",
          cursor: "not-allowed",
          _hover: {
            background: "transparent",
            borderColor: "border.disabled",
            color: "fg.disabled",
          },
        },
      },
      ghost: {
        bgColor: "transparent",
        color: "fg.emphasized",
        _hover: {
          color: "fg.default",
          background: "accent.subtle",
        },
        _disabled: {
          color: "fg.disabled",
          cursor: "not-allowed",
          _hover: {
            background: "transparent",
            color: "fg.disabled",
          },
        },
      },
      round: {
        borderRadius: "full !important",
        color: "accent.fg",
        bgColor: "accent.default",
        _hover: {
          bgColor: "accent.emphasized",
        },
        _disabled: {
          bgColor: "bg.disabled",
          cursor: "not-allowed",
          _hover: {
            bgColor: "bg.disabled",
          },
        },
      },
    },
  },
});
