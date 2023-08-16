import { Button, Menu } from "components/client";

import type { Meta, StoryObj } from "@storybook/react";
import type { MenuItem, MenuItemGroup } from "components/client";

type Story = StoryObj<typeof meta>;

const SUBMENU_GROUP_ITEMS: MenuItem[] = [
  { id: "item-7", child: "Item 7" },
  { id: "item-8", child: "Item 8" },
  { id: "item-9", child: "Item 9" },
];

const SUBMENU_GROUP: MenuItemGroup = {
  id: "group-3",
  label: "Group 3",
  items: SUBMENU_GROUP_ITEMS,
};

const GROUP_ONE_ITEMS: MenuItem[] = [
  { id: "item-1", child: "Item 1" },
  { id: "item-2", child: "Item 2" },
  { id: "item-3", child: "Item 3" },
];

const GROUP_TWO_ITEMS: MenuItem[] = [
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

const GROUPS: MenuItemGroup[] = [
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

const WITH_CONTEXT_GROUPS: MenuItemGroup[] = [
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
  args: {
    trigger: "Open Menu",
    groups: GROUPS,
  },
};

export const WithContext: Story = {
  args: {
    closeOnSelect: false,
    trigger: "Open Menu",
    groups: WITH_CONTEXT_GROUPS,
    children: ({ onClose }) => (
      <Button variant="ghost" p={1} onClick={onClose}>
        Close
      </Button>
    ),
  },
};

// TODO remove explicit type annotation, required due to `pnpm` bug (and therefore Yarn with `pnpm` linker); https://github.com/microsoft/TypeScript/issues/47663
const meta: Meta<typeof Menu> = {
  title: "Components/Client/Core/Menu",
  component: Menu,
  tags: ["autodocs"],
  decorators: [(Story) => <Story />],
  argTypes: {
    triggerVariant: {
      options: ["primary", "secondary", "ghost", "round"],
      control: { type: "radio" },
      defaultValue: "primary",
    },
    size: {
      options: ["xs", "sm", "md"],
      control: { type: "radio" },
      defaultValue: "sm",
    },
  },
} satisfies Meta<typeof Menu>;

export default meta;
