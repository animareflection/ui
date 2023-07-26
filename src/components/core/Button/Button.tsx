import { Pressable } from "@ark-ui/react";

import { panda } from "generated/panda/jsx";

import type { ComponentProps } from "react";

const PandaPressable = panda(Pressable, {
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

export type Props = ComponentProps<typeof PandaPressable>;

/**
 * Core UI button.
 */
const Button = ({ children, ...rest }: Props) => (
  <PandaPressable {...rest}>{children}</PandaPressable>
);

export default Button;
