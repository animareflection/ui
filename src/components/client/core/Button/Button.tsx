import { Pressable } from "@ark-ui/react";

import { panda } from "generated/panda/jsx";
import { button } from "generated/panda/recipes";

import type { ButtonVariantProps } from "generated/panda/recipes";
import type { PandaComponent } from "generated/panda/types/jsx";
import type { ComponentProps } from "react";

export type Props = ComponentProps<typeof PandaButton> & ButtonVariantProps;

const PandaButton: PandaComponent<typeof Pressable> = panda(Pressable, button);

/**
 * Core UI button.
 */
const Button = ({ variant, children, ...rest }: Props) => {
  return (
    <PandaButton className={button({ variant })} {...rest}>
      {children}
    </PandaButton>
  );
};

export default Button;
