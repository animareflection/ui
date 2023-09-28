import { Portal } from "@ark-ui/react";
import {
  FiChevronLeft as ChevronLeft,
  FiChevronRight as ChevronRight,
  FiX,
} from "react-icons/fi";

import Button from "components/core/Button/Button";
import Icon from "components/core/Icon/Icon";
import {
  PrimitiveDatePicker,
  PrimitiveDatePickerControl,
  PrimitiveDatePickerInput,
  PrimitiveDatePickerTrigger,
  PrimitiveDatePickerContent,
  PrimitiveDatePickerPrevTrigger,
  PrimitiveDatePickerViewTrigger,
  PrimitiveDatePickerNextTrigger,
  PrimitiveDatePickerGrid,
  PrimitiveDatePickerRowHeader,
  PrimitiveDatePickerColumnHeader,
  PrimitiveDatePickerRowGroup,
  PrimitiveDatePickerRow,
  PrimitiveDatePickerDayCell,
  PrimitiveDatePickerDayCellTrigger,
  PrimitiveDatePickerMonthCell,
  PrimitiveDatePickerMonthCellTrigger,
  PrimitiveDatePickerYearCell,
  PrimitiveDatePickerYearCellTrigger,
  PrimitiveDatePickerPositioner,
  PrimitiveDatePickerClearTrigger,
} from "components/primitives";
import { HStack, Stack } from "generated/panda/jsx";
import { datePicker } from "generated/panda/recipes";

import type { PrimitiveDatePickerProps } from "components/primitives";
import type { ReactNode } from "react";

export interface Props extends PrimitiveDatePickerProps {
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
          <PrimitiveDatePickerControl>
            <HStack w="fit">
              <PrimitiveDatePickerInput asChild>
                {input}
              </PrimitiveDatePickerInput>
              <PrimitiveDatePickerTrigger aria-label="calendar icon">
                {trigger}
              </PrimitiveDatePickerTrigger>
              {clearTrigger && (
                <PrimitiveDatePickerClearTrigger color="white">
                  <Button size="xs" variant="secondary">
                    <Icon h={5} w={5}>
                      <FiX />
                    </Icon>
                  </Button>
                </PrimitiveDatePickerClearTrigger>
              )}
            </HStack>
          </PrimitiveDatePickerControl>
          <Portal>
            <PrimitiveDatePickerPositioner>
              <PrimitiveDatePickerContent className={classNames.content}>
                <Stack gap="3">
                  <Stack justify="space-between" direction="row">
                    <PrimitiveDatePickerPrevTrigger aria-label="Prev">
                      <Button size="xs" variant="ghost">
                        <Icon h={5} w={5}>
                          <ChevronLeft />
                        </Icon>
                      </Button>
                    </PrimitiveDatePickerPrevTrigger>
                    <PrimitiveDatePickerViewTrigger aria-label="view trigger">
                      <Button variant="ghost" size="xs" textStyle="sm">
                        {api.view === "day" && api.visibleRangeText.start}
                        {api.view === "month" && api.visibleRange.start.year}
                        {api.view === "year" &&
                          `${api.getDecade().start} - ${api.getDecade().end}`}
                      </Button>
                    </PrimitiveDatePickerViewTrigger>
                    <PrimitiveDatePickerNextTrigger aria-label="Next">
                      <Button size="xs" variant="ghost">
                        <Icon h={5} w={5}>
                          <ChevronRight />
                        </Icon>
                      </Button>
                    </PrimitiveDatePickerNextTrigger>
                  </Stack>
                  {api.view === "day" && (
                    <PrimitiveDatePickerGrid className={classNames.grid}>
                      <PrimitiveDatePickerRowHeader
                        className={classNames.rowHeader}
                      >
                        {api.weekDays.map((day, i) => (
                          <PrimitiveDatePickerColumnHeader
                            key={i}
                            aria-label={day.long}
                            className={classNames.columnHeader}
                          >
                            {day.narrow}
                          </PrimitiveDatePickerColumnHeader>
                        ))}
                      </PrimitiveDatePickerRowHeader>
                      <PrimitiveDatePickerRowGroup
                        className={classNames.rowGroup}
                      >
                        {api.weeks.map((week, id) => (
                          <PrimitiveDatePickerRow
                            className={classNames.row}
                            key={id}
                          >
                            {week.map((day, id) => (
                              <PrimitiveDatePickerDayCell key={id} value={day}>
                                <PrimitiveDatePickerDayCellTrigger
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
                                </PrimitiveDatePickerDayCellTrigger>
                              </PrimitiveDatePickerDayCell>
                            ))}
                          </PrimitiveDatePickerRow>
                        ))}
                      </PrimitiveDatePickerRowGroup>
                    </PrimitiveDatePickerGrid>
                  )}
                  {api.view === "month" && (
                    <PrimitiveDatePickerGrid className={classNames.grid}>
                      <PrimitiveDatePickerRowGroup
                        className={classNames.rowGroup}
                      >
                        {api
                          .getMonthsGrid({ columns: 4, format: "short" })
                          .map((months, row) => (
                            <PrimitiveDatePickerRow
                              gap={1}
                              className={classNames.row}
                              key={row}
                            >
                              {months.map((month, index) => (
                                <PrimitiveDatePickerMonthCell
                                  key={index}
                                  value={month.value}
                                >
                                  <PrimitiveDatePickerMonthCellTrigger
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
                                  </PrimitiveDatePickerMonthCellTrigger>
                                </PrimitiveDatePickerMonthCell>
                              ))}
                            </PrimitiveDatePickerRow>
                          ))}
                      </PrimitiveDatePickerRowGroup>
                    </PrimitiveDatePickerGrid>
                  )}
                  {api.view === "year" && (
                    <PrimitiveDatePickerGrid className={classNames.grid}>
                      <PrimitiveDatePickerRowGroup
                        className={classNames.rowGroup}
                      >
                        {api.getYearsGrid({ columns: 4 }).map((years, row) => (
                          <PrimitiveDatePickerRow
                            key={row}
                            gap={1}
                            className={classNames.row}
                          >
                            {years.map((year, index) => (
                              <PrimitiveDatePickerYearCell
                                key={index}
                                value={year.value}
                              >
                                <PrimitiveDatePickerYearCellTrigger
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
                                </PrimitiveDatePickerYearCellTrigger>
                              </PrimitiveDatePickerYearCell>
                            ))}
                          </PrimitiveDatePickerRow>
                        ))}
                      </PrimitiveDatePickerRowGroup>
                    </PrimitiveDatePickerGrid>
                  )}
                </Stack>
              </PrimitiveDatePickerContent>
            </PrimitiveDatePickerPositioner>
          </Portal>
        </>
      )}
    </PrimitiveDatePicker>
  );
};

export default DatePicker;
