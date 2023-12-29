import { FiCalendar as CalendarIcon, FiX } from "react-icons/fi";

import { datePickerState, rangeDatePickerState } from "./DatePicker.spec";
import { DatePicker, Input, Text } from "components/core";
import Button from "components/core/Button/Button";
import Icon from "components/core/Icon/Icon";
import { Flex } from "generated/panda/jsx";

import type { Meta, StoryObj } from "@storybook/react";
import type { DatePickerProps } from "components/core";

type Story = StoryObj<typeof DatePicker>;

const DatePickerTemplate = (props: Partial<DatePickerProps>) => (
  <DatePicker
    label="Date Picker"
    startOfWeek={1}
    clearTrigger={
      <Flex
        gap={1}
        justify="center"
        css={{
          "& *": { color: "accent.default" },
        }}
      >
        <Icon w={4}>
          <FiX />
        </Icon>

        <Text fontSize="sm">Clear</Text>
      </Flex>
    }
    trigger={
      <Button size="xs">
        <Icon color="bg.default" h={6} w={6}>
          <CalendarIcon />
        </Icon>
      </Button>
    }
    input={<Input h={10} placeholder="mm/dd/yyyy" />}
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
