import { Button, Menu } from "components/client";

import type { Meta, StoryObj } from "@storybook/react";
import type { MenuItem, MenuItemGroup } from "components/client";

type Story = StoryObj<typeof meta>;

const ITEMS: MenuItem[] = [
  { id: "item-1", child: "Item 1" },
  { id: "item-2", child: "Item 2" },
  { id: "item-3", child: "Item 3" },
];

const SECOND_ITEMS: MenuItem[] = [
  { id: "item-4", child: "Item 4" },
  { id: "item-5", child: "Item 5" },
  { id: "item-6", child: "Item 6" },
];

const GROUPS: MenuItemGroup[] = [
  {
    id: "group-1",
    label: "Group 1",
    items: ITEMS,
  },
  {
    id: "group-2",
    label: "Group 2",
    items: SECOND_ITEMS,
  },
];

const WITH_CONTEXT_GROUPS: MenuItemGroup[] = [
  {
    id: "group-1",
    label: "Group 1",
    items: ITEMS,
  },
  {
    id: "group-2",
    label: "Group 2",
    items: SECOND_ITEMS,
    separator: true,
  },
];

export const Default: Story = {
  render: () => (
    <Menu
      closeOnSelect={false}
      trigger={<Button>Open Menu</Button>}
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
      {({ onClose }) => (
        <Button onClick={onClose} mx={1}>
          Close Menu
        </Button>
      )}
    </Menu>
  ),
};

// TODO remove explicit type annotation, required due to `pnpm` bug (and therefore Yarn with `pnpm` linker); https://github.com/microsoft/TypeScript/issues/47663
const meta: Meta<typeof Menu> = {
  title: "Client/Core/Menu",
  component: Menu,
  tags: ["autodocs"],
  decorators: [(Story) => <Story />],
} satisfies Meta<typeof Menu>;

export default meta;
