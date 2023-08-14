import { Portal } from "@ark-ui/react";

import { recipe as menu } from "./Menu.recipe";
import {
  Menu as PrimitiveMenu,
  MenuContent,
  MenuPositioner,
  MenuTrigger,
  MenuItem,
  MenuSeparator,
} from "components/primitives";

import type { MenuProps } from "components/primitives";
import type { ReactNode } from "react";

interface MenuItem {
  id: string;
  child?: ReactNode;
  onClick?: () => void;
}

export interface Props extends MenuProps {
  trigger: ReactNode;
  size?: "xs" | "sm" | "md";
  items?: MenuItem[];
}

/**
 * Core UI menu.
 */
const Menu = ({ children, trigger, items, size, ...rest }: Props) => {
  const classNames = menu({ size });

  return (
    <PrimitiveMenu {...rest}>
      {(ctx) => (
        <>
          <MenuTrigger asChild className={classNames.trigger}>
            {trigger}
          </MenuTrigger>
          <Portal>
            <MenuPositioner>
              <MenuContent className={classNames.content}>
                {items?.map(({ id, child, onClick }) => (
                  <MenuItem
                    key={id}
                    id={id}
                    className={classNames.item}
                    onClick={onClick}
                  >
                    {child}
                  </MenuItem>
                ))}
                {items && children && (
                  <MenuSeparator className={classNames.separator} />
                )}
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
