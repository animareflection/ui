import { panda } from "generated/panda/jsx";
import { image } from "generated/panda/recipes";

import type { ComponentProps } from "react";

export type Props = ComponentProps<typeof Image>;

/**
 * Image.
 */
const Image = panda("img", image);

export default Image;
