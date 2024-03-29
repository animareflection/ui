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
import { useIsClient } from "lib/hooks";

import type { PrimitiveMenuProps } from "components/primitives";
import type { MenuVariantProps } from "generated/panda/recipes";
import type { ReactElement, ReactNode } from "react";

export interface MenuItemRecord {
  id: string;
  child: ReactElement;
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
  groups?: MenuItemGroupRecord[];
}

/**
 * Menu.
 */
const Menu = ({ children, trigger, triggerItem, groups, ...rest }: Props) => {
  const isClient = useIsClient();

  if (!isClient) return null;

  return (
    <PrimitiveMenu {...rest}>
      {(ctx) => (
        <>
          {trigger && (
            <PrimitiveMenuTrigger asChild>{trigger}</PrimitiveMenuTrigger>
          )}

          {triggerItem && (
            <PrimitiveMenuTriggerItem asChild>
              {triggerItem}
            </PrimitiveMenuTriggerItem>
          )}

          <PrimitiveMenuPositioner>
            <PrimitiveMenuContent>
              {groups?.map(({ id, label, separator, items }) => (
                <PrimitiveMenuItemGroup key={id} id={id}>
                  {label && (
                    <PrimitiveMenuItemGroupLabel htmlFor={id}>
                      {label}
                    </PrimitiveMenuItemGroupLabel>
                  )}

                  {items.map(({ id, child }) => (
                    <PrimitiveMenuItem key={id} id={id} asChild>
                      {child}
                    </PrimitiveMenuItem>
                  ))}

                  {separator && <PrimitiveMenuSeparator />}
                </PrimitiveMenuItemGroup>
              ))}

              {/* forward nested context/state if utilized, otherwise directly render children */}
              {typeof children === "function" ? children(ctx) : children}
            </PrimitiveMenuContent>
          </PrimitiveMenuPositioner>
        </>
      )}
    </PrimitiveMenu>
  );
};

export default Menu;
