import { FiCalendar as CalendarIcon } from "react-icons/fi";

import { datePickerState } from "./DatePicker.spec";
import { DatePicker, Input } from "components/core";
import Button from "components/core/Button/Button";
import Icon from "components/core/Icon/Icon";

import type { Meta, StoryObj } from "@storybook/react";

type Story = StoryObj<typeof DatePicker>;

export const Default: Story = {
  render: () => (
    <DatePicker
      clearTrigger
      input={
        <Input
          color="fg.default"
          _focus={{
            borderColor: "border.accent",
            boxShadow: "sm",
          }}
          outline={0}
          backgroundColor="bg.default"
          borderWidth="1px"
          borderColor="border.default"
          h={10}
          mt={-1.5}
          placeholder="mm/dd/yyyy"
        />
      }
      trigger={
        <Button size="xs">
          <Icon h={6} w={6}>
            <CalendarIcon />
          </Icon>
        </Button>
      }
    />
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
  decorators: [(Story) => <Story />],
} satisfies Meta<typeof DatePicker>;

export default meta;
