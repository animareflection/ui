import { panda } from "generated/panda/jsx";

import type { ComponentProps } from "react";

export type Props = ComponentProps<typeof Image>;

const Image = panda("img");

export default Image;
