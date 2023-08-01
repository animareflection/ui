import { Pressable } from "@ark-ui/react";

import { cva } from "generated/panda/css";
import { panda } from "generated/panda/jsx";

import type { ComponentProps } from "react";

const recipe = cva({
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

export type Props = ComponentProps<typeof Button>;

/**
 * Core UI button.
 */
const Button = panda(Pressable, recipe);

export default Button;
