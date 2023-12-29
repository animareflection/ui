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
import { menu } from "generated/panda/recipes";
import { createStyleContext } from "lib/util";

import type { PandaComponent } from "generated/panda/jsx";
import type { ComponentProps } from "react";

const { withProvider, withContext } = createStyleContext(menu);

/**
 * Core UI menu primitives.
 */
export type PrimitiveMenuProps = ComponentProps<typeof PrimitiveMenu>;
const PrimitiveMenu: PandaComponent<typeof Menu> = withProvider(
  panda(Menu),
  "root",
);

export type PrimitiveMenuArrowProps = ComponentProps<typeof PrimitiveMenuArrow>;
export const PrimitiveMenuArrow = panda(MenuArrow);

export type PrimitiveMenuArrowTipProps = ComponentProps<
  typeof PrimitiveMenuArrowTip
>;
export const PrimitiveMenuArrowTip = panda(MenuArrowTip);

export type PrimitiveMenuContentProps = ComponentProps<
  typeof PrimitiveMenuContent
>;
export const PrimitiveMenuContent = panda(MenuContent);

export type PrimitiveMenuContextTriggerProps = ComponentProps<
  typeof PrimitiveMenuContextTrigger
>;
export const PrimitiveMenuContextTrigger = panda(MenuContextTrigger);

export type PrimitiveMenuItemProps = ComponentProps<typeof PrimitiveMenuItem>;
export const PrimitiveMenuItem: PandaComponent<typeof MenuItem> =
  panda(MenuItem);

export type PrimitiveMenuItemGroupProps = ComponentProps<
  typeof PrimitiveMenuItemGroup
>;
export const PrimitiveMenuItemGroup: PandaComponent<typeof MenuItemGroup> =
  panda(MenuItemGroup);

export type PrimitiveMenuItemGroupLabelProps = ComponentProps<
  typeof PrimitiveMenuItemGroupLabel
>;
export const PrimitiveMenuItemGroupLabel = panda(MenuItemGroupLabel);

export type PrimitiveMenuOptionItemProps = ComponentProps<
  typeof PrimitiveMenuOptionItem
>;
export const PrimitiveMenuOptionItem: PandaComponent<typeof MenuOptionItem> =
  panda(MenuOptionItem);

export type PrimitiveMenuPositionerProps = ComponentProps<
  typeof PrimitiveMenuPositioner
>;
export const PrimitiveMenuPositioner = panda(MenuPositioner);

export type PrimitiveMenuSeparatorProps = ComponentProps<
  typeof PrimitiveMenuSeparator
>;
export const PrimitiveMenuSeparator = panda(MenuSeparator);

export type PrimitiveMenuTriggerProps = ComponentProps<
  typeof PrimitiveMenuTrigger
>;
export const PrimitiveMenuTrigger = panda(MenuTrigger);

export type PrimitiveMenuTriggerItemProps = ComponentProps<
  typeof PrimitiveMenuTriggerItem
>;
export const PrimitiveMenuTriggerItem = panda(MenuTriggerItem);

export default PrimitiveMenu;
