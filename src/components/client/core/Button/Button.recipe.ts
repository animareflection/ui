import { cva } from "generated/panda/css";

export const recipe = cva({
  base: {
    cursor: "pointer",
    color: "white",
    bgColor: "brand.primary.500",
    fontWeight: "bold",
    p: 3,
    borderRadius: "md",
    _hover: { bg: "brand.primary.200" },
  },
  variants: {
    size: {
      sm: { fontSize: "sm" },
      lg: { fontSize: "lg" },
    },
  },
});
