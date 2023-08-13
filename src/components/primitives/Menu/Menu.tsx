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
import type { PandaComponent } from "generated/panda/types/jsx";

/**
 * Core UI menu primitives.
 */
export type MenuProps = ArkMenuProps;
const Menu: PandaComponent<typeof ArkMenu> = panda(ArkMenu);

export type MenuArrowProps = ArkMenuArrowProps;
export const MenuArrow: PandaComponent<typeof ArkMenuArrow> =
  panda(ArkMenuArrow);

export type MenuArrowTipProps = ArkMenuArrowTipProps;
export const MenuArrowTip: PandaComponent<typeof ArkMenuArrowTip> =
  panda(ArkMenuArrowTip);

export type MenuContentProps = ArkMenuContentProps;
export const MenuContent: PandaComponent<typeof ArkMenuContent> =
  panda(ArkMenuContent);

export type MenuContextTriggerProps = ArkMenuContextTriggerProps;
export const MenuContextTrigger: PandaComponent<typeof ArkMenuContextTrigger> =
  panda(ArkMenuContextTrigger);

export type MenuItemProps = ArkMenuItemProps;
export const MenuItem: PandaComponent<typeof ArkMenuItem> = panda(ArkMenuItem);

export type MenuItemGroupProps = ArkMenuItemGroupProps;
export const MenuItemGroup: PandaComponent<typeof ArkMenuItemGroup> =
  panda(ArkMenuItemGroup);

export type MenuItemGroupLabelProps = ArkMenuItemGroupLabelProps;
export const MenuItemGroupLabel: PandaComponent<typeof ArkMenuItemGroupLabel> =
  panda(ArkMenuItemGroupLabel);

export type MenuOptionItemProps = ArkMenuOptionItemProps;
export const MenuOptionItem: PandaComponent<typeof ArkMenuOptionItem> =
  panda(ArkMenuOptionItem);

export type MenuPositionerProps = ArkMenuPositionerProps;
export const MenuPositioner: PandaComponent<typeof ArkMenuPositioner> =
  panda(ArkMenuPositioner);

export type MenuSeparatorProps = ArkMenuSeparatorProps;
export const MenuSeparator: PandaComponent<typeof ArkMenuSeparator> =
  panda(ArkMenuSeparator);

export type MenuTriggerProps = ArkMenuTriggerProps;
export const MenuTrigger: PandaComponent<typeof ArkMenuTrigger> =
  panda(ArkMenuTrigger);

export type MenuTriggerItemProps = ArkMenuTriggerItemProps;
export const MenuTriggerItem: PandaComponent<typeof ArkMenuTriggerItem> =
  panda(ArkMenuTriggerItem);

export default Menu;
