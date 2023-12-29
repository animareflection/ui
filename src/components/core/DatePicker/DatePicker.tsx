import {
  FiChevronLeft as ChevronLeftIcon,
  FiChevronRight as ChevronRightIcon,
} from "react-icons/fi";

import Button from "../Button/Button";
import Icon from "../Icon/Icon";
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
import { datePicker } from "generated/panda/recipes";

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
  const classNames = datePicker();

  return (
    <PrimitiveDatePicker
      className={classNames.root}
      positioning={{ sameWidth: true }}
      {...rest}
    >
      {label && (
        <PrimitiveDatePickerLabel className={classNames.label}>
          {label}
        </PrimitiveDatePickerLabel>
      )}

      <PrimitiveDatePickerControl className={classNames.control}>
        <PrimitiveDatePickerInput asChild className={classNames.input}>
          {input}
        </PrimitiveDatePickerInput>

        <PrimitiveDatePickerTrigger
          asChild
          className={classNames.trigger}
          aria-label="Open date picker"
        >
          {trigger}
        </PrimitiveDatePickerTrigger>

        {clearTrigger && (
          <PrimitiveDatePickerClearTrigger className={classNames.clearTrigger}>
            {clearTrigger}
          </PrimitiveDatePickerClearTrigger>
        )}
      </PrimitiveDatePickerControl>

      <PrimitiveDatePickerPositioner className={classNames.positioner}>
        <PrimitiveDatePickerContent className={classNames.content}>
          <PrimitiveDatePickerView className={classNames.view} view="day">
            {(api) => (
              <>
                <PrimitiveDatePickerViewControl
                  className={classNames.viewControl}
                >
                  <PrimitiveDatePickerPrevTrigger
                    asChild
                    className={classNames.prevTrigger}
                    aria-label="Previous month"
                  >
                    <Icon w={5} h={5}>
                      <ChevronLeftIcon />
                    </Icon>
                  </PrimitiveDatePickerPrevTrigger>

                  <PrimitiveDatePickerViewTrigger
                    asChild
                    className={classNames.viewTrigger}
                    aria-label="View trigger"
                  >
                    <Button variant="ghost" size="sm">
                      <PrimitiveDatePickerRangeText
                        className={classNames.rangeText}
                      />
                    </Button>
                  </PrimitiveDatePickerViewTrigger>

                  <PrimitiveDatePickerNextTrigger
                    asChild
                    className={classNames.nextTrigger}
                    aria-label="Next month"
                  >
                    <Icon w={5} h={5}>
                      <ChevronRightIcon />
                    </Icon>
                  </PrimitiveDatePickerNextTrigger>
                </PrimitiveDatePickerViewControl>

                <PrimitiveDatePickerTable className={classNames.table}>
                  <PrimitiveDatePickerTableHead
                    className={classNames.tableHead}
                  >
                    <PrimitiveDatePickerTableRow
                      className={classNames.tableRow}
                    >
                      {api.weekDays.map((weekDay, id) => (
                        <PrimitiveDatePickerTableHeader
                          className={classNames.tableHeader}
                          key={id}
                        >
                          {weekDay.narrow}
                        </PrimitiveDatePickerTableHeader>
                      ))}
                    </PrimitiveDatePickerTableRow>
                  </PrimitiveDatePickerTableHead>

                  <PrimitiveDatePickerTableBody
                    className={classNames.tableBody}
                  >
                    {api.weeks.map((week, id) => (
                      <PrimitiveDatePickerTableRow
                        className={classNames.tableRow}
                        key={id}
                      >
                        {week.map((day, id) => (
                          <PrimitiveDatePickerTableCell
                            className={classNames.tableCell}
                            key={id}
                            value={day}
                          >
                            <PrimitiveDatePickerTableCellTrigger
                              asChild
                              className={classNames.tableCellTrigger}
                            >
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

          <PrimitiveDatePickerView className={classNames.view} view="month">
            {(api) => (
              <>
                <PrimitiveDatePickerViewControl
                  className={classNames.viewControl}
                >
                  <PrimitiveDatePickerPrevTrigger
                    asChild
                    className={classNames.prevTrigger}
                    aria-label="Previous year"
                  >
                    <Icon w={5} h={5}>
                      <ChevronLeftIcon />
                    </Icon>
                  </PrimitiveDatePickerPrevTrigger>

                  <PrimitiveDatePickerViewTrigger
                    asChild
                    className={classNames.viewTrigger}
                    aria-label="View trigger"
                  >
                    <Button variant="ghost" size="sm">
                      <PrimitiveDatePickerRangeText
                        className={classNames.rangeText}
                      />
                    </Button>
                  </PrimitiveDatePickerViewTrigger>

                  <PrimitiveDatePickerNextTrigger
                    asChild
                    className={classNames.nextTrigger}
                    aria-label="Next year"
                  >
                    <Icon w={5} h={5}>
                      <ChevronRightIcon />
                    </Icon>
                  </PrimitiveDatePickerNextTrigger>
                </PrimitiveDatePickerViewControl>

                <PrimitiveDatePickerTable className={classNames.table}>
                  <PrimitiveDatePickerTableBody
                    className={classNames.tableBody}
                  >
                    {api
                      .getMonthsGrid({ columns: 4, format: "short" })
                      .map((months, id) => (
                        <PrimitiveDatePickerTableRow
                          className={classNames.tableRow}
                          key={id}
                        >
                          {months.map((month, id) => (
                            <PrimitiveDatePickerTableCell
                              className={classNames.tableCell}
                              key={id}
                              value={month.value}
                            >
                              <PrimitiveDatePickerTableCellTrigger
                                asChild
                                className={classNames.tableCellTrigger}
                              >
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

          <PrimitiveDatePickerView className={classNames.view} view="year">
            {(api) => (
              <>
                <PrimitiveDatePickerViewControl
                  className={classNames.viewControl}
                >
                  <PrimitiveDatePickerPrevTrigger
                    asChild
                    className={classNames.prevTrigger}
                    aria-label="Previous decade"
                  >
                    <Icon w={5} h={5}>
                      <ChevronLeftIcon />
                    </Icon>
                  </PrimitiveDatePickerPrevTrigger>

                  <PrimitiveDatePickerViewTrigger
                    asChild
                    className={classNames.viewTrigger}
                    aria-label="View trigger"
                  >
                    <Button variant="ghost" size="sm">
                      <PrimitiveDatePickerRangeText
                        className={classNames.rangeText}
                      />
                    </Button>
                  </PrimitiveDatePickerViewTrigger>

                  <PrimitiveDatePickerNextTrigger
                    asChild
                    className={classNames.nextTrigger}
                    aria-label="Next decade"
                  >
                    <Icon w={5} h={5}>
                      <ChevronRightIcon />
                    </Icon>
                  </PrimitiveDatePickerNextTrigger>
                </PrimitiveDatePickerViewControl>

                <PrimitiveDatePickerTable className={classNames.table}>
                  <PrimitiveDatePickerTableBody
                    className={classNames.tableBody}
                  >
                    {api.getYearsGrid({ columns: 4 }).map((years, id) => (
                      <PrimitiveDatePickerTableRow
                        className={classNames.tableRow}
                        key={id}
                      >
                        {years.map((year, id) => (
                          <PrimitiveDatePickerTableCell
                            className={classNames.tableCell}
                            key={id}
                            value={year.value}
                          >
                            <PrimitiveDatePickerTableCellTrigger
                              asChild
                              className={classNames.tableCellTrigger}
                            >
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
