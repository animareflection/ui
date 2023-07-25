import { Pressable } from "@ark-ui/react";

import { cva } from "generated/panda/css";

import type { PressableProps } from "@ark-ui/react";

export type Props = PressableProps;

const button = cva({
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

/**
 * Core UI button.
 */
const Button = ({ children, ...rest }: Props) => (
  <Pressable className={button()} {...rest}>
    {children}
  </Pressable>
);

export default Button;
