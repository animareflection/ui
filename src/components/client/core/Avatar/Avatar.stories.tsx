import { Avatar } from "components/client";

import type { Meta, StoryObj } from "@storybook/react";

type Story = StoryObj<typeof Avatar>;

export const Default: Story = {
  render: () => <Avatar src="/img/logo.png" alt="avatar" />,
};

export const Fallback: Story = {
  render: () => <Avatar src="" alt="" />,
};

//   export const AccordionState: Story = {
//     ...Default,
//     play: accordionState,
//     name: "[TEST] Accordion State",
//     tags: ["test"],
//   };

// TODO remove explicit type annotation, required due to `pnpm` bug (and therefore Yarn with `pnpm` linker); https://github.com/microsoft/TypeScript/issues/47663
const meta: Meta<typeof Avatar> = {
  title: "Components/Client/Core/Avatar",
  component: Avatar,
  tags: ["autodocs"],
  decorators: [(Story) => <Story />],
} satisfies Meta<typeof Avatar>;

export default meta;
