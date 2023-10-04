import { panda } from "generated/panda/jsx";
import { hide } from "generated/panda/recipes";

import type { ComponentProps } from "react";

export type Props = ComponentProps<typeof Hide>;

/**
 * Utility component to conditionally hide child elements from or below defined breakpoints.
 */
const Hide = panda("div", hide);

export default Hide;
