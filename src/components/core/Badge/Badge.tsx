import { panda } from "generated/panda/jsx";
import { badge } from "generated/panda/recipes";

import type { ComponentProps } from "react";

export type Props = ComponentProps<typeof Badge>;

/**
 * Badge.
 */
const Badge = panda("div", badge);

export default Badge;
