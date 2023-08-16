import { cva } from "generated/panda/css";

export const recipe = cva({
  base: {
    color: "foreground.primary",
  },
  variants: {
    size: {
      sm: { fontSize: "sm" },
      lg: { fontSize: "lg" },
    },
  },
});
