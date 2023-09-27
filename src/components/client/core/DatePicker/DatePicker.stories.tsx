import {
  // FiChevronLeft as ChevronLeft,
  // FiChevronRight as ChevronRight,
  FiCalendar as CalendarIcon,
} from "react-icons/fi";

import { datePickerState } from "./DatePicker.spec";
import { DatePicker } from "components/client";
import Button from "components/client/core/Button/Button";
import Icon from "components/client/core/Icon/Icon";
import Input from "components/client/core/Input/Input";

import type { Meta, StoryObj } from "@storybook/react";

type Story = StoryObj<typeof DatePicker>;

export const Default: Story = {
  render: () => (
    <DatePicker
      input={
        <Input
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

// TODO remove explicit type annotation, required due to `pnpm` bug (and therefore Yarn with `pnpm` linker); https://github.com/microsoft/TypeScript/issues/47663
const meta: Meta<typeof DatePicker> = {
  title: "Components/Client/Core/DatePicker",
  component: DatePicker,
  tags: ["autodocs"],
  decorators: [(Story) => <Story />],
} satisfies Meta<typeof DatePicker>;

export default meta;
