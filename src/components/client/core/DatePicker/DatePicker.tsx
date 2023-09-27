import { Portal } from "@ark-ui/react";
import {
  FiChevronLeft as ChevronLeft,
  FiChevronRight as ChevronRight,
  FiCalendar as CalendarIcon,
} from "react-icons/fi";

import Input from "../Input/Input";
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
} from "components/primitives";
import { Stack } from "generated/panda/jsx";
import { datePicker } from "generated/panda/recipes";

import type { DatePickerProps } from "components/primitives";

export interface Props extends DatePickerProps {}

/**
 * Core UI date picker.
 */
const DatePicker = ({ ...rest }: Props) => {
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
            <Stack direction="row">
              <DatePickerInput asChild>
                <Input />
              </DatePickerInput>
              <DatePickerTrigger asChild>
                <Button>
                  <Icon>
                    <CalendarIcon />
                  </Icon>
                </Button>
              </DatePickerTrigger>
            </Stack>
          </DatePickerControl>
          <Portal>
            <DatePickerPositioner>
              <DatePickerContent className={classNames.content}>
                <Stack gap="3">
                  <Stack justify="space-between" direction="row">
                    <DatePickerPrevTrigger asChild>
                      <Button>
                        <Icon>
                          <ChevronLeft />
                        </Icon>
                      </Button>
                    </DatePickerPrevTrigger>
                    <DatePickerViewTrigger asChild>
                      <Button variant="ghost" size="sm">
                        {api.view === "day" && api.visibleRangeText.start}
                        {api.view === "month" && api.visibleRange.start.year}
                        {api.view === "year" &&
                          `${api.getDecade().start} - ${api.getDecade().end}`}
                      </Button>
                    </DatePickerViewTrigger>
                    <DatePickerNextTrigger asChild>
                      <Button>
                        <Icon>
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
                                  asChild
                                  className={classNames.cellTrigger}
                                >
                                  <Button variant="ghost" px="0">
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
                            <DatePickerRow key={row}>
                              {months.map((month, index) => (
                                <DatePickerMonthCell
                                  key={index}
                                  value={month.value}
                                >
                                  <DatePickerMonthCellTrigger
                                    asChild
                                    className={classNames.cellTrigger}
                                  >
                                    <Button variant="ghost">
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
                          <DatePickerRow key={row}>
                            {years.map((year, index) => (
                              <DatePickerYearCell
                                key={index}
                                value={year.value}
                              >
                                <DatePickerYearCellTrigger
                                  className={classNames.cellTrigger}
                                >
                                  <Button variant="ghost">{year.label}</Button>
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
