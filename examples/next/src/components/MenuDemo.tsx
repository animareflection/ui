import { HStack, Text } from "@animareflection/ui";
import { Menu } from "@animareflection/ui/client";

import { Wrapper } from "components";

import type {
  MenuItemGroupRecord,
  MenuItemRecord,
} from "@animareflection/ui/client";

const SUBMENU_GROUP_ITEMS: MenuItemRecord[] = [
  { id: "item-7", child: "Item 7" },
  { id: "item-8", child: "Item 8" },
  { id: "item-9", child: "Item 9" },
];

const SUBMENU_GROUP: MenuItemGroupRecord = {
  id: "group-3",
  label: "Group 3",
  items: SUBMENU_GROUP_ITEMS,
};

const GROUP_ONE_ITEMS: MenuItemRecord[] = [
  {
    id: "item-1",
    child: (
      <HStack justify="space-between" flex={1}>
        Item 1
        <Text color="fg.subtle" textStyle="xs">
          Ctrl+P
        </Text>
      </HStack>
    ),
  },
  { id: "item-2", child: "Item 2" },
  { id: "item-3", child: "Item 3" },
];

const GROUP_TWO_ITEMS: MenuItemRecord[] = [
  { id: "item-4", child: "Item 4" },
  {
    id: "item-5",
    subMenu: true,
    child: (
      <Menu
        key="item-5"
        positioning={{ placement: "right-start", gutter: -2 }}
        triggerItem="Item 5"
        groups={[SUBMENU_GROUP]}
      />
    ),
  },
  { id: "item-6", child: "Item 6" },
];

const GROUPS: MenuItemGroupRecord[] = [
  {
    id: "group-1",
    label: "Group 1",
    items: GROUP_ONE_ITEMS,
  },
  {
    id: "group-2",
    label: "Group 2",
    items: GROUP_TWO_ITEMS,
  },
];

const MenuDemo = () => (
  <Wrapper title="Menu">
    <Menu trigger="Open Menu" groups={GROUPS} />
  </Wrapper>
);

export default MenuDemo;