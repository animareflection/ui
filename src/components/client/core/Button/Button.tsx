import { Pressable } from "@ark-ui/react";

import { panda } from "generated/panda/jsx";
import { buttonRecipe } from "generated/panda/recipes";

import type { ButtonRecipeVariantProps } from "generated/panda/recipes";
import type { PandaComponent } from "generated/panda/types/jsx";
import type { ComponentProps } from "react";

export type Props = ComponentProps<typeof PandaButton> &
  ButtonRecipeVariantProps;

const PandaButton: PandaComponent<typeof Pressable> = panda(
  Pressable,
  buttonRecipe,
);

/**
 * Core UI button.
 */
const Button = ({ variant, children, ...rest }: Props) => {
  return (
    <PandaButton className={buttonRecipe({ variant })} {...rest}>
      {children}
    </PandaButton>
  );
};

export default Button;
