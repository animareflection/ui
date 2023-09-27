import { FiInfo } from "react-icons/fi";

import { Alert } from "components/core";
import { Flex } from "generated/panda/jsx";

import type { Meta, StoryObj } from "@storybook/react";

type Story = StoryObj<typeof Alert>;

export const Default: Story = {
  render: () => (
    <Alert
      icon={<FiInfo />}
      title="Browser update available"
      description="For the best experience, please update your browser."
      variant="warning"
    />
  ),
};

// TODO remove explicit type annotation, required due to `pnpm` bug (and therefore Yarn with `pnpm` linker); https://github.com/microsoft/TypeScript/issues/47663
const meta: Meta<typeof Alert> = {
  title: "Components/Core/Alert",
  component: Alert,
  tags: ["autodocs"],
  decorators: [
    (Story) => (
      <Flex maxW="md">
        <Story />
      </Flex>
    ),
  ],
} satisfies Meta<typeof Alert>;

export default meta;
