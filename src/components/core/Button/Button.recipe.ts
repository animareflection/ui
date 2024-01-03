import { defineRecipe } from "@pandacss/dev";

export const buttonRecipe = defineRecipe({
  className: "button",
  description: "The styles for the Button component",
  base: {
    colorPalette: "brand.primary",
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
        color: { base: "white", _dark: "colorPalette.950" },
        bgColor: "colorPalette.500",
        _hover: {
          bgColor: { base: "colorPalette.600", _dark: "colorPalette.400" },
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
        borderWidth: "1px",
        borderColor: { base: "colorPalette.600", _dark: "colorPalette.400" },
        bgColor: "bg.default",
        color: { base: "colorPalette.600", _dark: "colorPalette.400" },
        _hover: {
          background: { base: "colorPalette.50", _dark: "colorPalette.950" },
        },
        _disabled: {
          borderColor: "border.disabled",
          color: "fg.disabled",
          cursor: "not-allowed",
          _hover: {
            background: "bg.default",
            background: "bg.default",
            borderColor: "border.disabled",
            color: "fg.disabled",
          },
        },
      },
      ghost: {
        bgColor: "transparent",
        color: { base: "colorPalette.600", _dark: "colorPalette.400" },
        _hover: {
          color: "fg.default",
          background: { base: "colorPalette.50", _dark: "colorPalette.950" },
        },
        _disabled: {
          borderColor: "transparent",
          color: "fg.disabled",
          cursor: "not-allowed",
          _hover: {
            background: "transparent",
            color: "fg.disabled",
            borderColor: "transparent",
          },
        },
      },
      round: {
        borderRadius: "full !important",
        color: { base: "white", _dark: "colorPalette.950" },
        bgColor: "colorPalette.500",
        _hover: {
          bgColor: { base: "colorPalette.600", _dark: "colorPalette.400" },
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
