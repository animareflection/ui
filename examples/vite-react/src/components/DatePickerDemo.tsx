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
