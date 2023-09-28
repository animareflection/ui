import {
  Menu,
  MenuArrow,
  MenuArrowTip,
  MenuContent,
  MenuContextTrigger,
  MenuItem,
  MenuItemGroup,
  MenuItemGroupLabel,
  MenuOptionItem,
  MenuPositioner,
  MenuSeparator,
  MenuTrigger,
  MenuTriggerItem,
} from "@ark-ui/react";

import { panda } from "generated/panda/jsx";

import type {
  MenuProps,
  MenuArrowProps,
  MenuArrowTipProps,
  MenuContentProps,
  MenuContextTriggerProps,
  MenuItemProps,
  MenuItemGroupProps,
  MenuItemGroupLabelProps,
  MenuOptionItemProps,
  MenuPositionerProps,
  MenuSeparatorProps,
  MenuTriggerProps,
  MenuTriggerItemProps,
} from "@ark-ui/react";
import type { PandaComponent } from "generated/panda/jsx";

/**
 * Core UI menu primitives.
 */
export type PrimitiveMenuProps = MenuProps;

// TODO remove explicit type annotation, required due to `pnpm` bug (and therefore Yarn with `pnpm` linker); https://github.com/microsoft/TypeScript/issues/47663
const PrimitiveMenu: PandaComponent<typeof Menu> = panda(Menu);

export type PrimitiveMenuArrowProps = MenuArrowProps;
export const PrimitiveMenuArrow = panda(MenuArrow);

export type PrimitiveMenuArrowTipProps = MenuArrowTipProps;
export const PrimitiveMenuArrowTip = panda(MenuArrowTip);

export type PrimitiveMenuContentProps = MenuContentProps;
export const PrimitiveMenuContent = panda(MenuContent);

export type PrimitiveMenuContextTriggerProps = MenuContextTriggerProps;
export const PrimitiveMenuContextTrigger = panda(MenuContextTrigger);

export type PrimitiveMenuItemProps = MenuItemProps;

// TODO remove explicit type annotation, required due to `pnpm` bug (and therefore Yarn with `pnpm` linker); https://github.com/microsoft/TypeScript/issues/47663
export const PrimitiveMenuItem: PandaComponent<typeof MenuItem> =
  panda(MenuItem);

export type PrimitiveMenuItemGroupProps = MenuItemGroupProps;

// TODO remove explicit type annotation, required due to `pnpm` bug (and therefore Yarn with `pnpm` linker); https://github.com/microsoft/TypeScript/issues/47663
export const PrimitiveMenuItemGroup: PandaComponent<typeof MenuItemGroup> =
  panda(MenuItemGroup);

export type PrimitiveMenuItemGroupLabelProps = MenuItemGroupLabelProps;
export const PrimitiveMenuItemGroupLabel = panda(MenuItemGroupLabel);

export type PrimitiveMenuOptionItemProps = MenuOptionItemProps;
// TODO remove explicit type annotation, required due to `pnpm` bug (and therefore Yarn with `pnpm` linker); https://github.com/microsoft/TypeScript/issues/47663
export const PrimitiveMenuOptionItem: PandaComponent<typeof MenuOptionItem> =
  panda(MenuOptionItem);

export type PrimitiveMenuPositionerProps = MenuPositionerProps;
export const PrimitiveMenuPositioner = panda(MenuPositioner);

export type PrimitiveMenuSeparatorProps = MenuSeparatorProps;
export const PrimitiveMenuSeparator = panda(MenuSeparator);

export type PrimitiveMenuTriggerProps = MenuTriggerProps;
export const PrimitiveMenuTrigger = panda(MenuTrigger);

export type PrimitiveMenuTriggerItemProps = MenuTriggerItemProps;
export const PrimitiveMenuTriggerItem = panda(MenuTriggerItem);

export default PrimitiveMenu;
