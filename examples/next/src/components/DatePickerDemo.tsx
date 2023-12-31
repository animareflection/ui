"use client";

import {
  Button,
  DatePicker,
  Flex,
  Icon,
  Input,
  Text,
} from "@animareflection/ui";
import { FiCalendar as CalendarIcon, FiX } from "react-icons/fi";
import { input } from "generated/panda/recipes";

import { Wrapper } from "components";

const DatePickerDemo = () => (
  <Wrapper title="Date Picker">
    <DatePicker label="Date Picker" startOfWeek={1} />
  </Wrapper>
);

export default DatePickerDemo;
