import { cva } from "generated/panda/css";

export const recipe = cva({
  base: {
    cursor: "pointer",
    color: "white",
    bgColor: "brand.primary.500",
    fontWeight: "bold",
    px: 3,
    py: 2,
    borderRadius: "md",
    _hover: { bgColor: "brand.primary.200" },
    _focus: { outline: "none" },
  },
  defaultVariants: {
    variant: "primary",
  },
  variants: {
    variant: {
      primary: {
        color: "white",
        bgColor: "brand.primary.500",
      },
      secondary: {
        color: "brand.primary.500",
        bgColor: "transparent",
        border: "1px solid",
        borderColor: "brand.primary.500",
        _hover: {
          bgColor: "transparent",
          borderColor: "brand.primary.200",
          color: "brand.primary.200",
        },
      },
      ghost: {
        bgColor: "transparent",
        color: "brand.primary.500",
        _hover: {
          bgColor: "transparent",
          color: "brand.primary.200",
        },
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
