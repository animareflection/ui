import { cva } from "generated/panda/css";

export const recipe = cva({
  base: {
    cursor: "pointer",
    color: "foreground.inverted",
    bgColor: "brand.primary.400",
    fontWeight: "bold",
    p: 3,
    borderRadius: "md",
    _hover: { opacity: 0.8 },
    _focus: { outline: "none" },
  },
  defaultVariants: {
    variant: "primary",
  },
  variants: {
    variant: {
      primary: {
        color: "foreground.inverted",
        bgColor: "brand.primary.400",
      },
      secondary: {
        color: "brand.primary.400",
        bgColor: "transparent",
        border: "1px solid",
        borderColor: "brand.primary.400",
      },
      ghost: {
        bgColor: "transparent",
        color: "brand.primary.400",
        _active: {
          bgColor: "transparent",
          color: "brand.primary.200",
        },
        _focus: {
          bgColor: "transparent",
          color: "brand.primary.200",
        },
      },
      round: {
        borderRadius: "full !important",
      },
    },
  },
});
