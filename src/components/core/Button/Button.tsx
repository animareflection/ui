import { panda } from "generated/panda/jsx";
import { button } from "generated/panda/recipes";

import type { ComponentProps } from "react";

export type Props = ComponentProps<typeof Button>;

/**
 * Core UI button.
 */
const Button = panda("button", button);

export default Button;
