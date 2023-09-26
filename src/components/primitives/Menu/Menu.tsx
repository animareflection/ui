import {
  Menu as ArkMenu,
  MenuArrow as ArkMenuArrow,
  MenuArrowTip as ArkMenuArrowTip,
  MenuContent as ArkMenuContent,
  MenuContextTrigger as ArkMenuContextTrigger,
  MenuItem as ArkMenuItem,
  MenuItemGroup as ArkMenuItemGroup,
  MenuItemGroupLabel as ArkMenuItemGroupLabel,
  MenuOptionItem as ArkMenuOptionItem,
  MenuPositioner as ArkMenuPositioner,
  MenuSeparator as ArkMenuSeparator,
  MenuTrigger as ArkMenuTrigger,
  MenuTriggerItem as ArkMenuTriggerItem,
} from "@ark-ui/react";

import { panda } from "generated/panda/jsx";

import type {
  MenuProps as ArkMenuProps,
  MenuArrowProps as ArkMenuArrowProps,
  MenuArrowTipProps as ArkMenuArrowTipProps,
  MenuContentProps as ArkMenuContentProps,
  MenuContextTriggerProps as ArkMenuContextTriggerProps,
  MenuItemProps as ArkMenuItemProps,
  MenuItemGroupProps as ArkMenuItemGroupProps,
  MenuItemGroupLabelProps as ArkMenuItemGroupLabelProps,
  MenuOptionItemProps as ArkMenuOptionItemProps,
  MenuPositionerProps as ArkMenuPositionerProps,
  MenuSeparatorProps as ArkMenuSeparatorProps,
  MenuTriggerProps as ArkMenuTriggerProps,
  MenuTriggerItemProps as ArkMenuTriggerItemProps,
} from "@ark-ui/react";

/**
 * Core UI menu primitives.
 */
export type MenuProps = ArkMenuProps;

const Menu = panda(ArkMenu);

export type MenuArrowProps = ArkMenuArrowProps;
export const MenuArrow = panda(ArkMenuArrow);

export type MenuArrowTipProps = ArkMenuArrowTipProps;
export const MenuArrowTip = panda(ArkMenuArrowTip);

export type MenuContentProps = ArkMenuContentProps;
export const MenuContent = panda(ArkMenuContent);

export type MenuContextTriggerProps = ArkMenuContextTriggerProps;
export const MenuContextTrigger = panda(ArkMenuContextTrigger);

export type MenuItemProps = ArkMenuItemProps;

export const MenuItem = panda(ArkMenuItem);

export type MenuItemGroupProps = ArkMenuItemGroupProps;

export const MenuItemGroup = panda(ArkMenuItemGroup);

export type MenuItemGroupLabelProps = ArkMenuItemGroupLabelProps;
export const MenuItemGroupLabel = panda(ArkMenuItemGroupLabel);

export type MenuOptionItemProps = ArkMenuOptionItemProps;

export const MenuOptionItem = panda(ArkMenuOptionItem);

export type MenuPositionerProps = ArkMenuPositionerProps;
export const MenuPositioner = panda(ArkMenuPositioner);

export type MenuSeparatorProps = ArkMenuSeparatorProps;
export const MenuSeparator = panda(ArkMenuSeparator);

export type MenuTriggerProps = ArkMenuTriggerProps;
export const MenuTrigger = panda(ArkMenuTrigger);

export type MenuTriggerItemProps = ArkMenuTriggerItemProps;
export const MenuTriggerItem = panda(ArkMenuTriggerItem);

export default Menu;
