import { Portal } from "@ark-ui/react";

import { recipe as menu } from "./Menu.recipe";
import {
  Menu as PrimitiveMenu,
  MenuContent,
  MenuPositioner,
  MenuTrigger,
} from "components/primitives";

import type { MenuProps } from "components/primitives";
import type { ReactNode } from "react";

export interface Props extends MenuProps {
  trigger: ReactNode;
  size?: "xs" | "sm" | "md";
}

/**
 * Core UI menu.
 */
const Menu = ({ children, trigger, size, ...rest }: Props) => {
  const classNames = menu({ size });

  return (
    <PrimitiveMenu {...rest}>
      {(ctx) => (
        <>
          <MenuTrigger asChild className={classNames.trigger}>
            {trigger}
          </MenuTrigger>
          <Portal>
            <MenuPositioner className={classNames.positioner}>
              <MenuContent className={classNames.content}>
                {/* forward nested context/state if utilized, otherwise directly render children */}
                {typeof children === "function" ? children(ctx) : children}
              </MenuContent>
            </MenuPositioner>
          </Portal>
        </>
      )}
    </PrimitiveMenu>
  );
};

export default Menu;
