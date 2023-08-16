import { cva } from "generated/panda/css";

export const recipe = cva({
  base: {
    color: "fg.default",
  },
  variants: {
    size: {
      sm: { fontSize: "sm" },
      lg: { fontSize: "lg" },
    },
  },
});
