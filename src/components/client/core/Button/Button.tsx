import { Pressable } from "@ark-ui/react";

import { cx } from "generated/panda/css";
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
const Button = ({ variant, children, className, ...rest }: Props) => {
  return (
    <PandaButton className={cx(button({ variant }), className)} {...rest}>
      {children}
    </PandaButton>
  );
};

export default Button;
