import {
  FiCalendar as CalendarIcon,
  FiChevronLeft as ChevronLeftIcon,
  FiChevronRight as ChevronRightIcon,
  FiX,
} from "react-icons/fi";

import Button from "components/core/Button/Button";
import Icon from "components/core/Icon/Icon";
import Input from "components/core/Input/Input";
import Text from "components/core/Text/Text";
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
  trigger?: ReactNode;
  /** Date input field. */
  input?: ReactNode;
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
}: Props) => (
  <PrimitiveDatePicker positioning={{ sameWidth: true }} {...rest}>
    {label && <PrimitiveDatePickerLabel>{label}</PrimitiveDatePickerLabel>}

    <PrimitiveDatePickerControl>
      <PrimitiveDatePickerInput asChild>
        {input || <Input />}
      </PrimitiveDatePickerInput>

      <PrimitiveDatePickerTrigger asChild aria-label="Open date picker">
        {trigger || (
          <Button variant="secondary" borderColor="fg.default">
            <Icon w={3.5} h={3.5}>
              <CalendarIcon />
            </Icon>
          </Button>
        )}
      </PrimitiveDatePickerTrigger>

      <PrimitiveDatePickerClearTrigger>
        {clearTrigger || (
          <Button variant="ghost" size="sm" gap={1}>
            <Icon w={4}>
              <FiX />
            </Icon>

            <Text fontSize="sm">Clear</Text>
          </Button>
        )}
      </PrimitiveDatePickerClearTrigger>
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
                  <Button variant="ghost" size="sm">
                    <Icon w={5} h={5}>
                      <ChevronLeftIcon />
                    </Icon>
                  </Button>
                </PrimitiveDatePickerPrevTrigger>

                <PrimitiveDatePickerViewTrigger
                  asChild
                  aria-label="View trigger"
                >
                  <Button variant="ghost" size="sm">
                    <PrimitiveDatePickerRangeText />
                  </Button>
                </PrimitiveDatePickerViewTrigger>

                <PrimitiveDatePickerNextTrigger asChild aria-label="Next month">
                  <Button variant="ghost" size="sm">
                    <Icon w={5} h={5}>
                      <ChevronRightIcon />
                    </Icon>
                  </Button>
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
                            <Button variant="ghost">{day.day}</Button>
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
                  <Button variant="ghost" size="sm">
                    <Icon w={5} h={5}>
                      <ChevronLeftIcon />
                    </Icon>
                  </Button>
                </PrimitiveDatePickerPrevTrigger>

                <PrimitiveDatePickerViewTrigger
                  asChild
                  aria-label="View trigger"
                >
                  <Button variant="ghost" size="sm">
                    <PrimitiveDatePickerRangeText />
                  </Button>
                </PrimitiveDatePickerViewTrigger>

                <PrimitiveDatePickerNextTrigger asChild aria-label="Next year">
                  <Button variant="ghost" size="sm">
                    <Icon w={5} h={5}>
                      <ChevronRightIcon />
                    </Icon>
                  </Button>
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
                  <Button variant="ghost" size="sm">
                    <Icon w={5} h={5}>
                      <ChevronLeftIcon />
                    </Icon>
                  </Button>
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
                  <Button variant="ghost" size="sm">
                    <Icon w={5} h={5}>
                      <ChevronRightIcon />
                    </Icon>
                  </Button>
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

export default DatePicker;
