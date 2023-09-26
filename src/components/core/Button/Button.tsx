import { panda } from "generated/panda/jsx";
import { button } from "generated/panda/recipes";

import type { ButtonVariantProps } from "generated/panda/recipes";
import type { ComponentProps } from "react";

export type Props = ComponentProps<typeof panda.button> & ButtonVariantProps;

/**
 * Core UI button.
 */
const Button = ({ variant, size, children, ...rest }: Props) => {
  return (
    <panda.button className={button({ variant, size })} {...rest}>
      {children}
    </panda.button>
  );
};

export default Button;
