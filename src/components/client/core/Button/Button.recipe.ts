import { cva } from "generated/panda/css";

export const recipe = cva({
  base: {
    cursor: "pointer",
    color: "white",
    bgColor: "brand.primary.500",
    fontWeight: "bold",
    p: 3,
    borderRadius: "md",
    _hover: { bgColor: "brand.primary.200" },
  },
  defaultVariants: {
    variant: "primary",
  },
  variants: {
    variant: {
      round: {
        borderRadius: "full !important",
      },
      primary: {
        color: "white",
        bgColor: "brand.primary.500",
        fontWeight: "bold",
      },
      secondary: {
        color: "brand.primary.500",
        bgColor: "transparent",
        border: "1px solid",
        borderColor: "brand.primary.500",
        fontWeight: "bold",
        _hover: {
          bgColor: "transparent",
          borderColor: "brand.primary.200",
          color: "brand.primary.200",
        },
      },
      ghost: {
        color: "brand.primary.500",
        bgColor: "transparent",
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
    },
  },
});
