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

/**
 * Core UI menu primitives.
 */
export type PrimitiveMenuProps = MenuProps;

const PrimitiveMenu = panda(Menu);

export type PrimitiveMenuArrowProps = MenuArrowProps;
export const PrimitiveMenuArrow = panda(MenuArrow);

export type PrimitiveMenuArrowTipProps = MenuArrowTipProps;
export const PrimitiveMenuArrowTip = panda(MenuArrowTip);

export type PrimitiveMenuContentProps = MenuContentProps;
export const PrimitiveMenuContent = panda(MenuContent);

export type PrimitiveMenuContextTriggerProps = MenuContextTriggerProps;
export const PrimitiveMenuContextTrigger = panda(MenuContextTrigger);

export type PrimitiveMenuItemProps = MenuItemProps;

export const PrimitiveMenuItem = panda(MenuItem);

export type PrimitiveMenuItemGroupProps = MenuItemGroupProps;

export const PrimitiveMenuItemGroup = panda(MenuItemGroup);

export type PrimitiveMenuItemGroupLabelProps = MenuItemGroupLabelProps;
export const PrimitiveMenuItemGroupLabel = panda(MenuItemGroupLabel);

export type PrimitiveMenuOptionItemProps = MenuOptionItemProps;

export const PrimitiveMenuOptionItem = panda(MenuOptionItem);

export type PrimitiveMenuPositionerProps = MenuPositionerProps;
export const PrimitiveMenuPositioner = panda(MenuPositioner);

export type PrimitiveMenuSeparatorProps = MenuSeparatorProps;
export const PrimitiveMenuSeparator = panda(MenuSeparator);

export type PrimitiveMenuTriggerProps = MenuTriggerProps;
export const PrimitiveMenuTrigger = panda(MenuTrigger);

export type PrimitiveMenuTriggerItemProps = MenuTriggerItemProps;
export const PrimitiveMenuTriggerItem = panda(MenuTriggerItem);

export default PrimitiveMenu;
