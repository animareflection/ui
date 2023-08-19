import { Pressable } from "@ark-ui/react";

import { cx } from "generated/panda/css";
import { panda } from "generated/panda/jsx";
import { button } from "generated/panda/recipes";

import type { PandaComponent } from "generated/panda/types/jsx";
import type { ComponentProps } from "react";

export interface Props extends ComponentProps<typeof PandaButton> {
  variant?: "primary" | "secondary" | "ghost" | "round";
}

const PandaButton: PandaComponent<typeof Pressable> = panda(Pressable, button);

/**
 * Core UI button.
 */
const Button = ({
  variant = "primary",
  children,
  className,
  ...rest
}: Props) => {
  return (
    <PandaButton className={cx(button({ variant }), className)} {...rest}>
      {children}
    </PandaButton>
  );
};

export default Button;
