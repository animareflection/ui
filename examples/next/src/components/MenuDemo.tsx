import { Button, HStack, Menu, Text } from "@animareflection/ui";

import { Wrapper } from "components";

import type { MenuItemGroupRecord, MenuItemRecord } from "@animareflection/ui";

const SUBMENU_GROUP_ITEMS: MenuItemRecord[] = [
  { id: "item-7", child: <Text>Item 7</Text> },
  { id: "item-8", child: <Text>Item 8</Text> },
  { id: "item-9", child: <Text>Item 9</Text> },
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
      <HStack justify="space-between">
        Item 1
        <Text color="fg.subtle" textStyle="xs">
          Ctrl+P
        </Text>
      </HStack>
    ),
  },
  { id: "item-2", child: <Text>Item 2</Text> },
  { id: "item-3", child: <Text>Item 3</Text> },
];

const GROUP_TWO_ITEMS: MenuItemRecord[] = [
  { id: "item-4", child: <Text>Item 4</Text> },
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
  { id: "item-6", child: <Text>Item 6</Text> },
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
    <Menu trigger={<Button>Open Menu</Button>} groups={GROUPS} />
  </Wrapper>
);

export default MenuDemo;
