import { Portal } from "@ark-ui/react";
import {
  FiChevronLeft as ChevronLeft,
  FiChevronRight as ChevronRight,
  FiX,
} from "react-icons/fi";

import Button from "components/client/core/Button/Button";
import Icon from "components/client/core/Icon/Icon";
import {
  DatePicker as PrimitiveDatePicker,
  DatePickerControl,
  DatePickerInput,
  DatePickerTrigger,
  DatePickerContent,
  DatePickerPrevTrigger,
  DatePickerViewTrigger,
  DatePickerNextTrigger,
  DatePickerGrid,
  DatePickerRowHeader,
  DatePickerColumnHeader,
  DatePickerRowGroup,
  DatePickerRow,
  DatePickerDayCell,
  DatePickerDayCellTrigger,
  DatePickerMonthCell,
  DatePickerMonthCellTrigger,
  DatePickerYearCell,
  DatePickerYearCellTrigger,
  DatePickerPositioner,
  DatePickerClearTrigger,
} from "components/primitives";
import { HStack, Stack } from "generated/panda/jsx";
import { datePicker } from "generated/panda/recipes";

import type { DatePickerProps } from "components/primitives";
import type { ReactNode } from "react";

export interface Props extends DatePickerProps {
  trigger: ReactNode;
  input: ReactNode;
  clearTrigger?: boolean;
}

/**
 * Core UI date picker.
 */
const DatePicker = ({ trigger, input, clearTrigger, ...rest }: Props) => {
  const classNames = datePicker();

  return (
    <PrimitiveDatePicker
      positioning={{ sameWidth: true }}
      selectionMode="range"
      {...rest}
    >
      {(api) => (
        <>
          <DatePickerControl>
            <HStack w="fit">
              <DatePickerInput asChild>{input}</DatePickerInput>
              <DatePickerTrigger aria-label="calendar icon">
                {trigger}
              </DatePickerTrigger>
              {clearTrigger && (
                <DatePickerClearTrigger color="white">
                  <Button size="xs" variant="secondary">
                    <Icon h={5} w={5}>
                      <FiX />
                    </Icon>
                  </Button>
                </DatePickerClearTrigger>
              )}
            </HStack>
          </DatePickerControl>
          <Portal>
            <DatePickerPositioner>
              <DatePickerContent className={classNames.content}>
                <Stack gap="3">
                  <Stack justify="space-between" direction="row">
                    <DatePickerPrevTrigger aria-label="Prev">
                      <Button size="xs" variant="ghost">
                        <Icon h={5} w={5}>
                          <ChevronLeft />
                        </Icon>
                      </Button>
                    </DatePickerPrevTrigger>
                    <DatePickerViewTrigger aria-label="view trigger">
                      <Button variant="ghost" size="xs" textStyle="sm">
                        {api.view === "day" && api.visibleRangeText.start}
                        {api.view === "month" && api.visibleRange.start.year}
                        {api.view === "year" &&
                          `${api.getDecade().start} - ${api.getDecade().end}`}
                      </Button>
                    </DatePickerViewTrigger>
                    <DatePickerNextTrigger aria-label="Next">
                      <Button size="xs" variant="ghost">
                        <Icon h={5} w={5}>
                          <ChevronRight />
                        </Icon>
                      </Button>
                    </DatePickerNextTrigger>
                  </Stack>
                  {api.view === "day" && (
                    <DatePickerGrid className={classNames.grid}>
                      <DatePickerRowHeader className={classNames.rowHeader}>
                        {api.weekDays.map((day, i) => (
                          <DatePickerColumnHeader
                            key={i}
                            aria-label={day.long}
                            className={classNames.columnHeader}
                          >
                            {day.narrow}
                          </DatePickerColumnHeader>
                        ))}
                      </DatePickerRowHeader>
                      <DatePickerRowGroup className={classNames.rowGroup}>
                        {api.weeks.map((week, id) => (
                          <DatePickerRow className={classNames.row} key={id}>
                            {week.map((day, id) => (
                              <DatePickerDayCell key={id} value={day}>
                                <DatePickerDayCellTrigger
                                  className={classNames.cellTrigger}
                                >
                                  <Button
                                    variant="ghost"
                                    justifyContent="center"
                                    display="flex"
                                    alignItems="center"
                                    w="9"
                                    h="9"
                                  >
                                    {day.day}
                                  </Button>
                                </DatePickerDayCellTrigger>
                              </DatePickerDayCell>
                            ))}
                          </DatePickerRow>
                        ))}
                      </DatePickerRowGroup>
                    </DatePickerGrid>
                  )}
                  {api.view === "month" && (
                    <DatePickerGrid className={classNames.grid}>
                      <DatePickerRowGroup className={classNames.rowGroup}>
                        {api
                          .getMonthsGrid({ columns: 4, format: "short" })
                          .map((months, row) => (
                            <DatePickerRow
                              gap={1}
                              className={classNames.row}
                              key={row}
                            >
                              {months.map((month, index) => (
                                <DatePickerMonthCell
                                  key={index}
                                  value={month.value}
                                >
                                  <DatePickerMonthCellTrigger
                                    className={classNames.cellTrigger}
                                  >
                                    <Button
                                      variant="ghost"
                                      justifyContent="center"
                                      display="flex"
                                      alignItems="center"
                                      w="16"
                                      h="10"
                                    >
                                      {month.label}
                                    </Button>
                                  </DatePickerMonthCellTrigger>
                                </DatePickerMonthCell>
                              ))}
                            </DatePickerRow>
                          ))}
                      </DatePickerRowGroup>
                    </DatePickerGrid>
                  )}
                  {api.view === "year" && (
                    <DatePickerGrid className={classNames.grid}>
                      <DatePickerRowGroup className={classNames.rowGroup}>
                        {api.getYearsGrid({ columns: 4 }).map((years, row) => (
                          <DatePickerRow
                            key={row}
                            gap={1}
                            className={classNames.row}
                          >
                            {years.map((year, index) => (
                              <DatePickerYearCell
                                key={index}
                                value={year.value}
                              >
                                <DatePickerYearCellTrigger
                                  className={classNames.cellTrigger}
                                >
                                  <Button
                                    variant="ghost"
                                    justifyContent="center"
                                    display="flex"
                                    alignItems="center"
                                    w="16"
                                    h="10"
                                  >
                                    {year.label}
                                  </Button>
                                </DatePickerYearCellTrigger>
                              </DatePickerYearCell>
                            ))}
                          </DatePickerRow>
                        ))}
                      </DatePickerRowGroup>
                    </DatePickerGrid>
                  )}
                </Stack>
              </DatePickerContent>
            </DatePickerPositioner>
          </Portal>
        </>
      )}
    </PrimitiveDatePicker>
  );
};

export default DatePicker;
