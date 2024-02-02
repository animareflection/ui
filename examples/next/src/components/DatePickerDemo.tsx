"use client";

import { DatePicker } from "@animareflection/ui";

import { Wrapper } from "components";

const DatePickerDemo = () => (
  <Wrapper title="Date Picker">
    <DatePicker label="Date Picker" startOfWeek={1} />
  </Wrapper>
);

export default DatePickerDemo;
