/**
 * @file Menu primitives.
 */
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

export type PrimitiveMenuProps = ComponentProps<typeof PrimitiveMenu>;
const PrimitiveMenu: PandaComponent<typeof Menu> = withProvider(
  panda(Menu),
  "root",
);

export type PrimitiveMenuArrowProps = ComponentProps<typeof PrimitiveMenuArrow>;
export const PrimitiveMenuArrow = withContext(panda(MenuArrow), "arrow");

export type PrimitiveMenuArrowTipProps = ComponentProps<
  typeof PrimitiveMenuArrowTip
>;
export const PrimitiveMenuArrowTip = withContext(
  panda(MenuArrowTip),
  "arrowTip",
);

export type PrimitiveMenuContentProps = ComponentProps<
  typeof PrimitiveMenuContent
>;
export const PrimitiveMenuContent = withContext(panda(MenuContent), "content");

export type PrimitiveMenuContextTriggerProps = ComponentProps<
  typeof PrimitiveMenuContextTrigger
>;
export const PrimitiveMenuContextTrigger = withContext(
  panda(MenuContextTrigger),
  "contextTrigger",
);

export type PrimitiveMenuItemProps = ComponentProps<typeof PrimitiveMenuItem>;
export const PrimitiveMenuItem: PandaComponent<typeof MenuItem> = withContext(
  panda(MenuItem),
  "item",
);

export type PrimitiveMenuItemGroupProps = ComponentProps<
  typeof PrimitiveMenuItemGroup
>;
export const PrimitiveMenuItemGroup: PandaComponent<typeof MenuItemGroup> =
  withContext(panda(MenuItemGroup), "itemGroup");

export type PrimitiveMenuItemGroupLabelProps = ComponentProps<
  typeof PrimitiveMenuItemGroupLabel
>;
export const PrimitiveMenuItemGroupLabel = withContext(
  panda(MenuItemGroupLabel),
  "itemGroupLabel",
);

export type PrimitiveMenuOptionItemProps = ComponentProps<
  typeof PrimitiveMenuOptionItem
>;
export const PrimitiveMenuOptionItem: PandaComponent<typeof MenuOptionItem> =
  withContext(panda(MenuOptionItem), "optionItem");

export type PrimitiveMenuPositionerProps = ComponentProps<
  typeof PrimitiveMenuPositioner
>;
export const PrimitiveMenuPositioner = withContext(
  panda(MenuPositioner),
  "positioner",
);

export type PrimitiveMenuSeparatorProps = ComponentProps<
  typeof PrimitiveMenuSeparator
>;
export const PrimitiveMenuSeparator = withContext(
  panda(MenuSeparator),
  "separator",
);

export type PrimitiveMenuTriggerProps = ComponentProps<
  typeof PrimitiveMenuTrigger
>;
export const PrimitiveMenuTrigger = withContext(panda(MenuTrigger), "trigger");

export type PrimitiveMenuTriggerItemProps = ComponentProps<
  typeof PrimitiveMenuTriggerItem
>;
export const PrimitiveMenuTriggerItem = withContext(
  panda(MenuTriggerItem),
  "triggerItem",
);

export default PrimitiveMenu;
