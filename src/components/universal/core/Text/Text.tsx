import { recipe as text } from "./Text.recipe";
import { panda } from "generated/panda/jsx";

import type { ComponentProps } from "react";

export type Props = ComponentProps<typeof Text>;

/**
 * Core UI text (typography).
 */
const Text = panda("p", text);

export default Text;
