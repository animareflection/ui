import { panda } from "generated/panda/jsx";
import { imageRecipe } from "generated/panda/recipes";

import type { ImageRecipeVariantProps } from "generated/panda/recipes";
import type { ComponentProps } from "react";

export type Props = ComponentProps<typeof PandaImage> & ImageRecipeVariantProps;

const PandaImage = panda("img");

/**
 * Core UI image.
 */
const Image = ({ layout, ...rest }: Props) => {
  return <PandaImage className={imageRecipe({ layout })} {...rest} />;
};

export default Image;
