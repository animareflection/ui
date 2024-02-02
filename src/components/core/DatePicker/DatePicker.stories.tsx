import { datePickerState, rangeDatePickerState } from "./DatePicker.spec";
import { DatePicker } from "components/core";

import type { Meta, StoryObj } from "@storybook/react";
import type { DatePickerProps } from "components/core";

type Story = StoryObj<typeof DatePicker>;

const DatePickerTemplate = (props: Partial<DatePickerProps>) => (
  <DatePicker label="Date Picker" startOfWeek={1} {...props} />
);

export const Default: Story = {
  render: DatePickerTemplate,
};

export const Range: Story = {
  render: () => (
    <DatePickerTemplate selectionMode="range" label="Date Picker (Range)" />
  ),
};

export const DatePickerState: Story = {
  ...Default,
  play: datePickerState,
  name: "[TEST] DatePicker State",
  tags: ["test"],
};

export const RangeDatePickerState: Story = {
  ...Range,
  play: rangeDatePickerState,
  name: "[TEST] Range DatePicker State",
  tags: ["test"],
};

const meta = {
  title: "Components/Core/DatePicker",
  component: DatePicker,
  tags: ["autodocs"],
} satisfies Meta<typeof DatePicker>;

export default meta;
