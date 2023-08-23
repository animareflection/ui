import NextImage from "next/image";

import { panda } from "generated/panda/jsx";

import type { ComponentProps } from "react";

export type Props = ComponentProps<typeof Image>;

/**
 * Next.js-enhanced image.
 */
const Image = panda(NextImage);

export default Image;
