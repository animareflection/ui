"use client";

import { Button, DatePicker, Icon, Input } from "@animareflection/ui";
import { FiCalendar as CalendarIcon } from "react-icons/fi";

import { Wrapper } from "components";

const DatePickerDemo = () => (
  <Wrapper title="Date Picker">
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
  </Wrapper>
);

export default DatePickerDemo;
