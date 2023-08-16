import { Portal } from "@ark-ui/react";

import { recipe as menu } from "./Menu.recipe";
// TODO: remove when `MenuTrigger` asChild works
import { recipe as button } from "components/client/core/Button/Button.recipe";
import {
  Menu as PrimitiveMenu,
  MenuContent,
  MenuPositioner,
  MenuTrigger,
  MenuItem,
  MenuSeparator,
  MenuItemGroup,
  MenuItemGroupLabel,
} from "components/primitives";

import type { MenuProps } from "components/primitives";
import type { ReactNode } from "react";

export interface MenuItem {
  id: string;
  child: ReactNode;
}

export interface MenuItemGroup {
  id: string;
  label?: string;
  separator?: boolean;
  items: MenuItem[];
}

export interface Props extends MenuProps {
  trigger: ReactNode;
  // TODO: remove when `MenuTrigger` asChild works
  triggerVariant?: "primary" | "secondary" | "ghost" | "round";
  size?: "xs" | "sm" | "md";
  groups?: MenuItemGroup[];
}

/**
 * Core UI menu.
 */
const Menu = ({
  children,
  trigger,
  // TODO: remove when `MenuTrigger` asChild works
  triggerVariant,
  groups,
  size,
  ...rest
}: Props) => {
  const classNames = menu({ size });
  // TODO: remove when `MenuTrigger` asChild works
  const triggerClassNames = button({ variant: triggerVariant });

  return (
    <PrimitiveMenu {...rest}>
      {(ctx) => (
        <>
          {/* TODO: replace className with classNames.trigger when `MenuTrigger` asChild works */}
          <MenuTrigger className={triggerClassNames}>{trigger}</MenuTrigger>
          <Portal>
            <MenuPositioner>
              <MenuContent className={classNames.content}>
                {groups?.map(({ id, label, separator, items }) => (
                  <MenuItemGroup
                    key={id}
                    id={id}
                    className={classNames.itemGroup}
                  >
                    {label && (
                      <MenuItemGroupLabel
                        htmlFor={id}
                        className={classNames.itemGroupLabel}
                      >
                        {label}
                      </MenuItemGroupLabel>
                    )}
                    {items.map(({ id, child }) => (
                      <MenuItem key={id} id={id} className={classNames.item}>
                        {child}
                      </MenuItem>
                    ))}
                    {separator && (
                      <MenuSeparator className={classNames.separator} />
                    )}
                  </MenuItemGroup>
                ))}
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