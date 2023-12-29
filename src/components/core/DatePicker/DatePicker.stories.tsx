import { FiCalendar as CalendarIcon } from "react-icons/fi";

import { datePickerState } from "./DatePicker.spec";
import { DatePicker, Input } from "components/core";
import Button from "components/core/Button/Button";
import Icon from "components/core/Icon/Icon";
import { input } from "generated/panda/recipes";

import type { Meta, StoryObj } from "@storybook/react";
import type { DatePickerProps } from "components/core";

type Story = StoryObj<typeof DatePicker>;

const DatePickerTemplate = (props: Partial<DatePickerProps>) => (
  <DatePicker
    label="Date Picker"
    startOfWeek={1}
    clearTrigger={
      <Button size="xs" variant="ghost">
        Clear
      </Button>
    }
    trigger={
      <Button size="xs">
        <Icon color="bg.default" h={6} w={6}>
          <CalendarIcon />
        </Icon>
      </Button>
    }
    input={
      <Input
        // TODO remove
        className={input().input}
        h={10}
        placeholder="mm/dd/yyyy"
      />
    }
    {...props}
  />
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

const meta = {
  title: "Components/Core/DatePicker",
  component: DatePicker,
  tags: ["autodocs"],
} satisfies Meta<typeof DatePicker>;

export default meta;
