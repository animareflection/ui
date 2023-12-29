import {
  FiChevronLeft as ChevronLeftIcon,
  FiChevronRight as ChevronRightIcon,
} from "react-icons/fi";

import Button from "components/core/Button/Button";
import Icon from "components/core/Icon/Icon";
import {
  PrimitiveDatePicker,
  PrimitiveDatePickerClearTrigger,
  PrimitiveDatePickerContent,
  PrimitiveDatePickerControl,
  PrimitiveDatePickerInput,
  PrimitiveDatePickerLabel,
  PrimitiveDatePickerNextTrigger,
  PrimitiveDatePickerPositioner,
  PrimitiveDatePickerPrevTrigger,
  PrimitiveDatePickerRangeText,
  PrimitiveDatePickerTable,
  PrimitiveDatePickerTableBody,
  PrimitiveDatePickerTableCell,
  PrimitiveDatePickerTableCellTrigger,
  PrimitiveDatePickerTableHead,
  PrimitiveDatePickerTableHeader,
  PrimitiveDatePickerTableRow,
  PrimitiveDatePickerTrigger,
  PrimitiveDatePickerView,
  PrimitiveDatePickerViewControl,
  PrimitiveDatePickerViewTrigger,
} from "components/primitives";

import type { PrimitiveDatePickerProps } from "components/primitives/DatePicker/DatePicker";
import type { ReactNode } from "react";

export interface Props extends PrimitiveDatePickerProps {
  /** Input label. */
  label?: ReactNode;
  /** Render to open date picker. */
  trigger: ReactNode;
  /** Date input field. */
  input: ReactNode;
  /** Render to clear date input. */
  clearTrigger?: ReactNode;
}

/**
 * Date picker.
 */
const DatePicker = ({
  label,
  trigger,
  input,
  clearTrigger,
  ...rest
}: Props) => {
  return (
    <PrimitiveDatePicker positioning={{ sameWidth: true }} {...rest}>
      {label && <PrimitiveDatePickerLabel>{label}</PrimitiveDatePickerLabel>}

      <PrimitiveDatePickerControl>
        <PrimitiveDatePickerInput asChild>{input}</PrimitiveDatePickerInput>

        <PrimitiveDatePickerTrigger asChild aria-label="Open date picker">
          {trigger}
        </PrimitiveDatePickerTrigger>

        {clearTrigger && (
          <PrimitiveDatePickerClearTrigger>
            {/* ! NB: make sure not to pass a button here, as `PrimitiveDatePickerClearTrigger` is a button so DOM nesting validation would fail. `asChild` cannot be used on the clear trigger wrapper because it breaks the state (e.g. keeps the trigger visible at all times) */}
            {clearTrigger}
          </PrimitiveDatePickerClearTrigger>
        )}
      </PrimitiveDatePickerControl>

      <PrimitiveDatePickerPositioner>
        <PrimitiveDatePickerContent>
          <PrimitiveDatePickerView view="day">
            {(api) => (
              <>
                <PrimitiveDatePickerViewControl>
                  <PrimitiveDatePickerPrevTrigger
                    asChild
                    aria-label="Previous month"
                  >
                    <Icon w={5} h={5}>
                      <ChevronLeftIcon />
                    </Icon>
                  </PrimitiveDatePickerPrevTrigger>

                  <PrimitiveDatePickerViewTrigger
                    asChild
                    aria-label="View trigger"
                  >
                    <Button variant="ghost" size="sm">
                      <PrimitiveDatePickerRangeText />
                    </Button>
                  </PrimitiveDatePickerViewTrigger>

                  <PrimitiveDatePickerNextTrigger
                    asChild
                    aria-label="Next month"
                  >
                    <Icon w={5} h={5}>
                      <ChevronRightIcon />
                    </Icon>
                  </PrimitiveDatePickerNextTrigger>
                </PrimitiveDatePickerViewControl>

                <PrimitiveDatePickerTable>
                  <PrimitiveDatePickerTableHead>
                    <PrimitiveDatePickerTableRow>
                      {api.weekDays.map((weekDay, id) => (
                        <PrimitiveDatePickerTableHeader key={id}>
                          {weekDay.narrow}
                        </PrimitiveDatePickerTableHeader>
                      ))}
                    </PrimitiveDatePickerTableRow>
                  </PrimitiveDatePickerTableHead>

                  <PrimitiveDatePickerTableBody>
                    {api.weeks.map((week, id) => (
                      <PrimitiveDatePickerTableRow key={id}>
                        {week.map((day, id) => (
                          <PrimitiveDatePickerTableCell key={id} value={day}>
                            <PrimitiveDatePickerTableCellTrigger asChild>
                              <Button variant="ghost" justifyContent="center">
                                {day.day}
                              </Button>
                            </PrimitiveDatePickerTableCellTrigger>
                          </PrimitiveDatePickerTableCell>
                        ))}
                      </PrimitiveDatePickerTableRow>
                    ))}
                  </PrimitiveDatePickerTableBody>
                </PrimitiveDatePickerTable>
              </>
            )}
          </PrimitiveDatePickerView>

          <PrimitiveDatePickerView view="month">
            {(api) => (
              <>
                <PrimitiveDatePickerViewControl>
                  <PrimitiveDatePickerPrevTrigger
                    asChild
                    aria-label="Previous year"
                  >
                    <Icon w={5} h={5}>
                      <ChevronLeftIcon />
                    </Icon>
                  </PrimitiveDatePickerPrevTrigger>

                  <PrimitiveDatePickerViewTrigger
                    asChild
                    aria-label="View trigger"
                  >
                    <Button variant="ghost" size="sm">
                      <PrimitiveDatePickerRangeText />
                    </Button>
                  </PrimitiveDatePickerViewTrigger>

                  <PrimitiveDatePickerNextTrigger
                    asChild
                    aria-label="Next year"
                  >
                    <Icon w={5} h={5}>
                      <ChevronRightIcon />
                    </Icon>
                  </PrimitiveDatePickerNextTrigger>
                </PrimitiveDatePickerViewControl>

                <PrimitiveDatePickerTable>
                  <PrimitiveDatePickerTableBody>
                    {api
                      .getMonthsGrid({ columns: 4, format: "short" })
                      .map((months, id) => (
                        <PrimitiveDatePickerTableRow key={id}>
                          {months.map((month, id) => (
                            <PrimitiveDatePickerTableCell
                              key={id}
                              value={month.value}
                            >
                              <PrimitiveDatePickerTableCellTrigger asChild>
                                <Button variant="ghost" justifyContent="center">
                                  {month.label}
                                </Button>
                              </PrimitiveDatePickerTableCellTrigger>
                            </PrimitiveDatePickerTableCell>
                          ))}
                        </PrimitiveDatePickerTableRow>
                      ))}
                  </PrimitiveDatePickerTableBody>
                </PrimitiveDatePickerTable>
              </>
            )}
          </PrimitiveDatePickerView>

          <PrimitiveDatePickerView view="year">
            {(api) => (
              <>
                <PrimitiveDatePickerViewControl>
                  <PrimitiveDatePickerPrevTrigger
                    asChild
                    aria-label="Previous decade"
                  >
                    <Icon w={5} h={5}>
                      <ChevronLeftIcon />
                    </Icon>
                  </PrimitiveDatePickerPrevTrigger>

                  <PrimitiveDatePickerViewTrigger
                    asChild
                    aria-label="View trigger"
                  >
                    <Button variant="ghost" size="sm">
                      <PrimitiveDatePickerRangeText />
                    </Button>
                  </PrimitiveDatePickerViewTrigger>

                  <PrimitiveDatePickerNextTrigger
                    asChild
                    aria-label="Next decade"
                  >
                    <Icon w={5} h={5}>
                      <ChevronRightIcon />
                    </Icon>
                  </PrimitiveDatePickerNextTrigger>
                </PrimitiveDatePickerViewControl>

                <PrimitiveDatePickerTable>
                  <PrimitiveDatePickerTableBody>
                    {api.getYearsGrid({ columns: 4 }).map((years, id) => (
                      <PrimitiveDatePickerTableRow key={id}>
                        {years.map((year, id) => (
                          <PrimitiveDatePickerTableCell
                            key={id}
                            value={year.value}
                          >
                            <PrimitiveDatePickerTableCellTrigger asChild>
                              <Button variant="ghost" justifyContent="center">
                                {year.label}
                              </Button>
                            </PrimitiveDatePickerTableCellTrigger>
                          </PrimitiveDatePickerTableCell>
                        ))}
                      </PrimitiveDatePickerTableRow>
                    ))}
                  </PrimitiveDatePickerTableBody>
                </PrimitiveDatePickerTable>
              </>
            )}
          </PrimitiveDatePickerView>
        </PrimitiveDatePickerContent>
      </PrimitiveDatePickerPositioner>
    </PrimitiveDatePicker>
  );
};

export default DatePicker;
