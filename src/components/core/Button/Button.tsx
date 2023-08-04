import { Pressable } from "@ark-ui/react";

import { cva } from "generated/panda/css";
import { panda } from "generated/panda/jsx";

import type { PandaComponent } from "generated/panda/types/jsx";
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
// TODO remove explicit type annotation, required due to `pnpm` bug (and therefore Yarn with `pnpm` linker); https://github.com/microsoft/TypeScript/issues/47663
const Button: PandaComponent<typeof Pressable> = panda(Pressable, recipe);

export default Button;
