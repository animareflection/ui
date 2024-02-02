import { panda } from "generated/panda/jsx";
import { show } from "generated/panda/recipes";

import type { ComponentProps } from "react";

export type Props = ComponentProps<typeof Show>;

/**
 * Utility component to conditionally render child elements from or below defined breakpoints.
 */
const Show = panda("div", show);

export default Show;
