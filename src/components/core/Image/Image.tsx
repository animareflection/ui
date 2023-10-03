import { panda } from "generated/panda/jsx";
import { image } from "generated/panda/recipes";

import type { ComponentProps } from "react";

export type Props = ComponentProps<typeof Image>;

/**
 * Core UI image.
 */
const Image = panda("img", image);

export default Image;
