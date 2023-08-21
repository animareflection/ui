import { Portal } from "@ark-ui/react";

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
import { button, menu } from "generated/panda/recipes";
import { useIsMounted } from "lib/hooks";

import type { MenuProps } from "components/primitives";
import type {
  ButtonVariantProps,
  MenuVariantProps,
} from "generated/panda/recipes";
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

export interface Props extends MenuProps, MenuVariantProps {
  trigger?: ReactNode;
  triggerItem?: ReactNode;
  triggerVariant?: ButtonVariantProps["variant"];
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

  const isMounted = useIsMounted();

  if (!isMounted) return null;

  return (
    <PrimitiveMenu {...rest}>
      {(ctx) => (
        <>
          {trigger && (
            <MenuTrigger className={button({ variant: triggerVariant })}>
              {trigger}
            </MenuTrigger>
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
