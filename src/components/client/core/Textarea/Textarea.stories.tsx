import { textareaState } from "./Textarea.spec";
import { Textarea } from "components/client";

import type { Meta, StoryObj } from "@storybook/react";

type Story = StoryObj<typeof Textarea>;

export const Default: Story = {
  render: () => <Textarea label="Textarea Label" placeholder="Placeholder" />,
};

export const TextareaState: Story = {
  ...Default,
  play: textareaState,
  name: "[TEST] Textarea State",
  tags: ["test"],
};

// TODO remove explicit type annotation, required due to `pnpm` bug (and therefore Yarn with `pnpm` linker); https://github.com/microsoft/TypeScript/issues/47663
const meta: Meta<typeof Textarea> = {
  title: "Components/Client/Core/Textarea",
  component: Textarea,
  tags: ["autodocs"],
  decorators: [(Story) => <Story />],
} satisfies Meta<typeof Textarea>;

export default meta;
