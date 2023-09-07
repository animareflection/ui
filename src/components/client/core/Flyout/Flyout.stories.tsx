import { flyoutState } from "./Flyout.spec";
import { Button, Flyout } from "components/client";
import { Text } from "components/universal";

import type { Meta, StoryObj } from "@storybook/react";

type Story = StoryObj<typeof Flyout>;

export const Default: Story = {
  render: () => (
    <Flyout trigger={<Button>Open Flyout</Button>} title="Flyout Title">
      <Text mt={2}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam.
      </Text>
    </Flyout>
  ),
};

export const FlyoutState: Story = {
  ...Default,
  play: flyoutState,
  name: "[TEST] Flyout State",
  tags: ["test"],
};

// TODO remove explicit type annotation, required due to `pnpm` bug (and therefore Yarn with `pnpm` linker); https://github.com/microsoft/TypeScript/issues/47663
const meta: Meta<typeof Flyout> = {
  title: "Components/Client/Core/Flyout",
  component: Flyout,
  tags: ["autodocs"],
  decorators: [(Story) => <Story />],
} satisfies Meta<typeof Flyout>;

export default meta;
