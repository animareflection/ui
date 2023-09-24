import { Portal } from "@ark-ui/react";

import {
  PrimitiveMenu,
  PrimitiveMenuContent,
  PrimitiveMenuPositioner,
  PrimitiveMenuTrigger,
  PrimitiveMenuItem,
  PrimitiveMenuSeparator,
  PrimitiveMenuItemGroup,
  PrimitiveMenuItemGroupLabel,
  PrimitiveMenuTriggerItem,
} from "components/primitives";
import { button, menu } from "generated/panda/recipes";
import { useIsMounted } from "lib/hooks";

import type { PrimitiveMenuProps } from "components/primitives";
import type {
  ButtonVariantProps,
  MenuVariantProps,
} from "generated/panda/recipes";
import type { ReactNode } from "react";

export interface MenuItemRecord {
  id: string;
  child: ReactNode;
  subMenu?: boolean;
}

export interface MenuItemGroupRecord {
  id: string;
  label?: string;
  separator?: boolean;
  items: MenuItemRecord[];
}

export interface Props extends PrimitiveMenuProps, MenuVariantProps {
  trigger?: ReactNode;
  triggerItem?: ReactNode;
  triggerVariant?: ButtonVariantProps["variant"];
  groups?: MenuItemGroupRecord[];
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
            <PrimitiveMenuTrigger
              className={button({ variant: triggerVariant })}
            >
              {trigger}
            </PrimitiveMenuTrigger>
          )}
          {triggerItem && (
            <PrimitiveMenuTriggerItem className={classNames.triggerItem}>
              {triggerItem}
            </PrimitiveMenuTriggerItem>
          )}
          <Portal>
            <PrimitiveMenuPositioner>
              <PrimitiveMenuContent className={classNames.content}>
                {groups?.map(({ id, label, separator, items }) => (
                  <PrimitiveMenuItemGroup
                    key={id}
                    id={id}
                    className={classNames.itemGroup}
                  >
                    {label && (
                      <PrimitiveMenuItemGroupLabel
                        htmlFor={id}
                        className={classNames.itemGroupLabel}
                      >
                        {label}
                      </PrimitiveMenuItemGroupLabel>
                    )}
                    {items.map(({ id, child, subMenu }) => {
                      if (subMenu) {
                        // !NB: don't forget to pass appropriate `key` prop to `Menu` component
                        return child;
                      }
                      return (
                        <PrimitiveMenuItem
                          key={id}
                          id={id}
                          className={classNames.item}
                        >
                          {child}
                        </PrimitiveMenuItem>
                      );
                    })}
                    {separator && (
                      <PrimitiveMenuSeparator
                        className={classNames.separator}
                      />
                    )}
                  </PrimitiveMenuItemGroup>
                ))}
                {/* forward nested context/state if utilized, otherwise directly render children */}
                {typeof children === "function" ? children(ctx) : children}
              </PrimitiveMenuContent>
            </PrimitiveMenuPositioner>
          </Portal>
        </>
      )}
    </PrimitiveMenu>
  );
};

export default Menu;
