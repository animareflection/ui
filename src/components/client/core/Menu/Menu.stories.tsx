import { Button, Menu } from "components/client";

import type { Meta, StoryObj } from "@storybook/react";

type Story = StoryObj<typeof meta>;

const ITEMS = [
  { id: "item-1", child: "Item 1" },
  { id: "item-2", child: "Item 2" },
  { id: "item-3", child: "Item 3" },
];

export const Default: Story = {
  render: () => (
    <Menu
      positioning={{ placement: "bottom-end" }}
      trigger={<Button>Open Menu</Button>}
      items={ITEMS}
    />
  ),
};

export const WithContext: Story = {
  render: () => (
    <Menu
      positioning={{ placement: "bottom-end" }}
      trigger={<Button>Open Menu</Button>}
      items={ITEMS}
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
