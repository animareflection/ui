import { menuState } from "./Menu.spec";
import { Button, Menu, Text } from "components/core";
import { HStack } from "generated/panda/jsx";

import type { Meta, StoryObj } from "@storybook/react";
import type { MenuItemRecord, MenuItemGroupRecord } from "components/core";

type Story = StoryObj<typeof Menu>;

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
        <Text>Item 1</Text>

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
    child: (
      <Menu
        key="item-5"
        positioning={{ placement: "right-start", gutter: -2 }}
        triggerItem={<Text>Item 5</Text>}
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
  render: () => <Menu trigger={<Button>Open Menu</Button>} groups={GROUPS} />,
};

export const Small: Story = {
  render: () => (
    <Menu trigger={<Button>Open Menu</Button>} groups={GROUPS} size="sm" />
  ),
};

export const Large: Story = {
  render: () => (
    <Menu trigger={<Button>Open Menu</Button>} groups={GROUPS} size="lg" />
  ),
};

/**
 * Set the menu content container width to the same width as the trigger.
 */
export const MatchingWidth: Story = {
  render: () => (
    <Menu
      positioning={{ sameWidth: true }}
      trigger={
        <Button justifyContent="center" width="400px">
          Open Menu
        </Button>
      }
      groups={GROUPS}
    />
  ),
};

export const WithContext: Story = {
  render: () => (
    <Menu
      closeOnSelect={false}
      trigger={<Button>Open Menu</Button>}
      groups={WITH_CONTEXT_GROUPS}
    >
      {({ close: onClose }) => (
        <Button borderRadius="unset" variant="ghost" w="full" onClick={onClose}>
          Close
        </Button>
      )}
    </Menu>
  ),
};

export const MenuState: Story = {
  ...WithContext,
  play: menuState,
  name: "[TEST] Menu State",
  tags: ["test"],
};

// NB: type annotation resolves type portability error
const meta: Meta = {
  title: "Components/Core/Menu",
  component: Menu,
  tags: ["autodocs"],
} satisfies Meta<typeof Menu>;

export default meta;
