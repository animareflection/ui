import { Portal } from "@ark-ui/react";

import { recipe as menu } from "./Menu.recipe";
import {
  Menu as PrimitiveMenu,
  MenuContent,
  MenuPositioner,
  MenuTrigger,
  MenuItem,
  MenuSeparator,
  MenuItemGroup,
  MenuItemGroupLabel,
  MenuTriggerItem,
} from "components/primitives";
import { button } from "generated/panda/recipes";
import { useIsMounted } from "lib/hooks";

import type { MenuProps } from "components/primitives";
import type { ReactNode } from "react";

export interface MenuItem {
  id: string;
  child: ReactNode;
  subMenu?: boolean;
}

export interface MenuItemGroup {
  id: string;
  label?: string;
  separator?: boolean;
  items: MenuItem[];
}

export interface Props extends MenuProps {
  trigger?: ReactNode;
  triggerItem?: ReactNode;
  triggerVariant?: "secondary" | "ghost" | "round";
  size?: "xs" | "sm" | "md";
  groups?: MenuItemGroup[];
}

/**
 * Core UI menu.
 */
const Menu = ({
  children,
  trigger,
  triggerItem,
  triggerVariant,
  groups,
  size,
  ...rest
}: Props) => {
  const classNames = menu({ size });
  const triggerClassNames = button({ variant: triggerVariant });

  const isMounted = useIsMounted();

  if (!isMounted) return null;

  return (
    <PrimitiveMenu {...rest}>
      {(ctx) => (
        <>
          {trigger && (
            <MenuTrigger className={triggerClassNames}>{trigger}</MenuTrigger>
          )}
          {triggerItem && (
            <MenuTriggerItem className={classNames.triggerItem}>
              {triggerItem}
            </MenuTriggerItem>
          )}
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
                    {items.map(({ id, child, subMenu }) => {
                      if (subMenu) {
                        // !NB: don't forget to pass appropriate `key` prop to `Menu` component
                        return child;
                      }
                      return (
                        <MenuItem key={id} id={id} className={classNames.item}>
                          {child}
                        </MenuItem>
                      );
                    })}
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
