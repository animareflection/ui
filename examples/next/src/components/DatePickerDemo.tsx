"use client";

import { Button, DatePicker, Icon, Input } from "@animareflection/ui";
import { FiCalendar as CalendarIcon } from "react-icons/fi";
import { input } from "generated/panda/recipes";

import { Wrapper } from "components";

const DatePickerDemo = () => (
  <Wrapper title="Date Picker">
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
          // TODO remove, this will be improved once slot recipe classes are automatically picked up
          className={input().input}
          h={10}
          placeholder="mm/dd/yyyy"
        />
      }
    />
  </Wrapper>
);

export default DatePickerDemo;
