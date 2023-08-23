import { panda } from "generated/panda/jsx";
import { image } from "generated/panda/recipes";

import type { ImageVariantProps } from "generated/panda/recipes";
import type { ComponentProps } from "react";

export type Props = ComponentProps<typeof PandaImage> & ImageVariantProps;

const PandaImage = panda("img");

/**
 * Core UI image.
 */
const Image = ({ layout, ...rest }: Props) => {
  return <PandaImage className={image({ layout })} {...rest} />;
};

export default Image;
