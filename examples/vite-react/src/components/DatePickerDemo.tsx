import {
  Button,
  DatePicker,
  Flex,
  Icon,
  Input,
  Text,
} from "@animareflection/ui";
import { input } from "generated/panda/recipes";

import { FiCalendar as CalendarIcon, FiX } from "react-icons/fi";

import { Wrapper } from "components";

const DatePickerDemo = () => (
  <Wrapper title="Date Picker">
    <DatePicker label="Date Picker" startOfWeek={1} />
  </Wrapper>
);

export default DatePickerDemo;
