import { DatePicker } from "components/client";

import type { Meta, StoryObj } from "@storybook/react";

type Story = StoryObj<typeof DatePicker>;

export const Default: Story = {
  render: () => <DatePicker />,
};

// export const DatePickerState: Story = {
//     ...Default,
//     play: datePickerState,
//     name: "[TEST] DatePicker State",
//     tags: ["test"],
//   };

// TODO remove explicit type annotation, required due to `pnpm` bug (and therefore Yarn with `pnpm` linker); https://github.com/microsoft/TypeScript/issues/47663
const meta: Meta<typeof DatePicker> = {
  title: "Components/Client/Core/DatePicker",
  component: DatePicker,
  tags: ["autodocs"],
  decorators: [(Story) => <Story />],
} satisfies Meta<typeof DatePicker>;

export default meta;
