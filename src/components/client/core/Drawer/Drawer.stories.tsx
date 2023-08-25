import { expect } from "@storybook/jest";
import { screen, within } from "@storybook/testing-library";

import { Button, Drawer } from "components/client";
import { Text } from "components/universal";
import { sleep } from "lib/utils";

import type { Meta, StoryObj } from "@storybook/react";

type Story = StoryObj<typeof meta>;

export const RightPlacement: Story = {
  render: () => (
    <Drawer
      trigger={<Button>Open Drawer</Button>}
      title="Drawer Title"
      description="Drawer Description"
    >
      <Text mt={2}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam.
      </Text>
    </Drawer>
  ),
};

export const LeftPlacement: Story = {
  render: () => (
    <Drawer
      placement="left"
      trigger={<Button>Open Drawer</Button>}
      title="Drawer Title"
      description="Drawer Description"
    >
      <Text mt={2}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam.
      </Text>
    </Drawer>
  ),
};

export const WithContext: Story = {
  render: () => (
    <Drawer
      trigger={<Button>Open Drawer</Button>}
      title="Drawer Title"
      description="Drawer Description"
    >
      {({ isOpen }) => <Text mt={2}>Open: {String(isOpen)}</Text>}
    </Drawer>
  ),
};

export const OpenState: Story = {
  ...WithContext,
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);

    const openButton = canvas.getByRole("button", {
      name: /open drawer/i,
    });

    // await userEvent.click(openButton);

    // ? this works, above does not
    openButton.click();

    await sleep(2000);

    const drawerTitle = screen.getByText("Drawer Title");

    await expect(drawerTitle).toBeInTheDocument();

    const closeButton = screen.getByRole("button");
    closeButton.click();

    await sleep(2000);

    await expect(drawerTitle).not.toBeInTheDocument();

    // TODO determine if below is better practice than `screen` utility
    // const body = canvasElement.ownerDocument.body;
    // await expect(within(body).getByText("Drawer Title")).toBeInTheDocument();
  },
  name: "[TEST] Open State",
  tags: ["test"],
};

// TODO remove explicit type annotation, required due to `pnpm` bug (and therefore Yarn with `pnpm` linker); https://github.com/microsoft/TypeScript/issues/47663
const meta: Meta<typeof Drawer> = {
  title: "Components/Client/Core/Drawer",
  component: Drawer,
  tags: ["autodocs"],
  decorators: [(Story) => <Story />],
} satisfies Meta<typeof Drawer>;

export default meta;
