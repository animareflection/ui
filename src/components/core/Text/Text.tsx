import { panda } from "generated/panda/jsx";
import { text } from "generated/panda/recipes";

import type { ComponentProps } from "react";

export type Props = ComponentProps<typeof Text>;

/**
 * Text (typography).
 */
const Text = panda("p", text);

export default Text;
