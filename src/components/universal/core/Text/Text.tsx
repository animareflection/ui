import { cva } from "generated/panda/css";
import { panda } from "generated/panda/jsx";

import type { ComponentProps } from "react";

const recipe = cva({
  variants: {
    size: {
      sm: { fontSize: "sm" },
      lg: { fontSize: "lg" },
    },
  },
});

export type Props = ComponentProps<typeof Text>;

/**
 * Core UI text (typography).
 */
const Text = panda("p", recipe);

export default Text;
