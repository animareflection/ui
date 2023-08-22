import { panda } from "generated/panda/jsx";
import { textRecipe } from "generated/panda/recipes";

import type { TextRecipeVariantProps } from "generated/panda/recipes";
import type { ComponentProps } from "react";

export type Props = ComponentProps<typeof PandaText> & TextRecipeVariantProps;

const PandaText = panda("p", textRecipe);

/**
 * Core UI text (typography).
 */
const Text = ({ size, children, ...rest }: Props) => (
  <PandaText className={textRecipe({ size })} {...rest}>
    {children}
  </PandaText>
);

export default Text;
