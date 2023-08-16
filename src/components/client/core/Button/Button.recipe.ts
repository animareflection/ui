import { cva } from "generated/panda/css";

export const recipe = cva({
  base: {
    cursor: "pointer",
    fontWeight: "bold",
    p: 3,
    borderRadius: "md",
    _focus: { outline: "none" },
  },
  defaultVariants: {
    variant: "primary",
  },
  variants: {
    variant: {
      primary: {
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
      secondary: {
        borderWidth: "1px",
        borderColor: "border.emphasized",
        bgColor: "bg.default",
        color: "fg.emphasized",
        _hover: {
          color: "fg.default",
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
          background: "bg.subtle",
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
      },
    },
  },
});
