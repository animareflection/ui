import { defineRecipe } from "@pandacss/dev";

export const buttonRecipe = defineRecipe({
  className: "button",
  description: "The styles for the Button component",
  base: {
    borderWidth: "1px",
    cursor: "pointer",
    fontWeight: "bold",
    borderRadius: "md",
    display: "inline-flex",
    alignItems: "center",
    color: "fg.default",
    h: "fit-content",
    _focus: { outline: "none" },
    _disabled: {
      bgColor: "bg.disabled",
      cursor: "not-allowed",
      _hover: {
        bgColor: "bg.disabled",
      },
    },
  },
  defaultVariants: {
    variant: "primary",
    size: "md",
  },
  variants: {
    variant: {
      primary: {
        borderColor: "accent.default",
        color: "accent.fg",
        bgColor: "accent.default",
        _hover: {
          bgColor: "accent.emphasized",
          borderColor: "accent.emphasized",
        },
        _disabled: {
          borderColor: "border.disabled",
          bgColor: "bg.disabled",
          cursor: "not-allowed",
          _hover: {
            borderColor: "border.disabled",
            bgColor: "bg.disabled",
          },
        },
      },
      secondary: {
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
            background: "bg.default",
            borderColor: "border.disabled",
            color: "fg.disabled",
          },
        },
      },
      ghost: {
        bgColor: "transparent",
        borderColor: "transparent",
        color: "fg.emphasized",
        _hover: {
          color: "fg.default",
          background: "accent.subtle",
          borderColor: "accent.subtle",
        },
        _disabled: {
          borderColor: "border.disabled",
          color: "fg.disabled",
          cursor: "not-allowed",
          _hover: {
            background: "transparent",
            color: "fg.disabled",
            borderColor: "border.disabled",
          },
        },
      },
      round: {
        borderRadius: "full !important",
        color: "accent.fg",
        bgColor: "accent.default",
        borderColor: "accent.default",
        _hover: {
          bgColor: "accent.emphasized",
          borderColor: "accent.emphasized",
        },
        _disabled: {
          borderColor: "border.disabled",
          bgColor: "bg.disabled",
          cursor: "not-allowed",
          _hover: {
            bgColor: "bg.disabled",
            borderColor: "border.disabled",
          },
        },
      },
    },
    size: {
      xs: {
        fontSize: "xs",
        p: 2,
      },
      sm: {
        fontSize: "sm",
        p: 2.5,
      },
      md: {
        fontSize: "md",
        p: 3,
      },
      lg: {
        fontSize: "lg",
        p: 3.5,
      },
    },
  },
});
