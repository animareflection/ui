import { openState } from "./Menu.spec";
import { Button, Menu } from "components/client";
import { Text } from "components/universal";
import { HStack } from "generated/panda/jsx";

import type { Meta, StoryObj } from "@storybook/react";
import type { MenuItemRecord, MenuItemGroupRecord } from "components/client";

type Story = StoryObj<typeof meta>;

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

const WITH_CONTEXT_GROUPS: MenuItemGroupRecord[] = [
  {
    id: "group-1",
    label: "Group 1",
    items: GROUP_ONE_ITEMS,
  },
  {
    id: "group-2",
    label: "Group 2",
    items: GROUP_TWO_ITEMS,
    separator: true,
  },
];

export const Default: Story = {
  render: () => <Menu trigger="Open Menu" groups={GROUPS} />,
};

export const Small: Story = {
  render: () => <Menu trigger="Open Menu" groups={GROUPS} size="sm" />,
};

export const Large: Story = {
  render: () => <Menu trigger="Open Menu" groups={GROUPS} size="lg" />,
};

export const WithContext: Story = {
  render: () => (
    <Menu
      closeOnSelect={false}
      trigger="Open Menu"
      groups={WITH_CONTEXT_GROUPS}
    >
      {({ onClose }) => (
        <Button borderRadius="unset" variant="ghost" w="full" onClick={onClose}>
          Close
        </Button>
      )}
    </Menu>
  ),
};

export const OpenState: Story = {
  ...WithContext,
  play: openState,
  name: "[TEST] Open State",
  tags: ["test"],
};

// TODO remove explicit type annotation, required due to `pnpm` bug (and therefore Yarn with `pnpm` linker); https://github.com/microsoft/TypeScript/issues/47663
const meta: Meta<typeof Menu> = {
  title: "Components/Client/Core/Menu",
  component: Menu,
  tags: ["autodocs"],
  decorators: [(Story) => <Story />],
} satisfies Meta<typeof Menu>;

export default meta;
