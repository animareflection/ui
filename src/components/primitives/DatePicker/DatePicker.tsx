/**
 * @file Date picker primitives.
 */
import { DatePickerView } from "@ark-ui/react";
import {
  DatePicker,
  DatePickerClearTrigger,
  DatePickerContent,
  DatePickerControl,
  DatePickerInput,
  DatePickerLabel,
  DatePickerMonthSelect,
  DatePickerNextTrigger,
  DatePickerPositioner,
  DatePickerPrevTrigger,
  DatePickerRangeText,
  DatePickerTable,
  DatePickerTableBody,
  DatePickerTableCell,
  DatePickerTableCellTrigger,
  DatePickerTableHead,
  DatePickerTableHeader,
  DatePickerTableRow,
  DatePickerTrigger,
  DatePickerViewControl,
  DatePickerViewTrigger,
  DatePickerYearSelect,
} from "@ark-ui/react/date-picker";

import { panda } from "generated/panda/jsx";

import type { ComponentProps } from "react";

export interface PrimitiveDatePickerProps
  extends ComponentProps<typeof PrimitiveDatePicker> {}
const PrimitiveDatePicker = panda(DatePicker);

export interface PrimitiveDatePickerClearTriggerProps
  extends ComponentProps<typeof PrimitiveDatePickerClearTrigger> {}
export const PrimitiveDatePickerClearTrigger = panda(DatePickerClearTrigger);

export interface PrimitiveDatePickerContentProps
  extends ComponentProps<typeof PrimitiveDatePickerContent> {}
export const PrimitiveDatePickerContent = panda(DatePickerContent);

export interface PrimitiveDatePickerControlProps
  extends ComponentProps<typeof PrimitiveDatePickerControl> {}
export const PrimitiveDatePickerControl = panda(DatePickerControl);

export interface PrimitiveDatePickerInputProps
  extends ComponentProps<typeof PrimitiveDatePickerInput> {}
export const PrimitiveDatePickerInput = panda(DatePickerInput);

export interface PrimitiveDatePickerLabelProps
  extends ComponentProps<typeof PrimitiveDatePickerLabel> {}
export const PrimitiveDatePickerLabel = panda(DatePickerLabel);

export interface PrimitiveDatePickerMonthSelectProps
  extends ComponentProps<typeof PrimitiveDatePickerMonthSelect> {}
export const PrimitiveDatePickerMonthSelect = panda(DatePickerMonthSelect);

export interface PrimitiveDatePickerNextTriggerProps
  extends ComponentProps<typeof PrimitiveDatePickerNextTrigger> {}
export const PrimitiveDatePickerNextTrigger = panda(DatePickerNextTrigger);

export interface PrimitiveDatePickerPositionerProps
  extends ComponentProps<typeof PrimitiveDatePickerPositioner> {}
export const PrimitiveDatePickerPositioner = panda(DatePickerPositioner);

export interface PrimitiveDatePickerPrevTriggerProps
  extends ComponentProps<typeof PrimitiveDatePickerPrevTrigger> {}
export const PrimitiveDatePickerPrevTrigger = panda(DatePickerPrevTrigger);

export interface PrimitiveDatePickerRangeTextProps
  extends ComponentProps<typeof PrimitiveDatePickerRangeText> {}
export const PrimitiveDatePickerRangeText = panda(DatePickerRangeText);

export interface PrimitiveDatePickerTableProps
  extends ComponentProps<typeof PrimitiveDatePickerTable> {}
export const PrimitiveDatePickerTable = panda(DatePickerTable);

export interface PrimitiveDatePickerTableBodyProps
  extends ComponentProps<typeof PrimitiveDatePickerTableBody> {}
export const PrimitiveDatePickerTableBody = panda(DatePickerTableBody);

export interface PrimitiveDatePickerTableCellProps
  extends ComponentProps<typeof PrimitiveDatePickerTableCell> {}
export const PrimitiveDatePickerTableCell = panda(DatePickerTableCell);

export interface PrimitiveDatePickerTableCellTriggerProps
  extends ComponentProps<typeof PrimitiveDatePickerTableCellTrigger> {}
export const PrimitiveDatePickerTableCellTrigger = panda(
  DatePickerTableCellTrigger,
);

export interface PrimitiveDatePickerTableHeadProps
  extends ComponentProps<typeof PrimitiveDatePickerTableHead> {}
export const PrimitiveDatePickerTableHead = panda(DatePickerTableHead);

export interface PrimitiveDatePickerTableHeaderProps
  extends ComponentProps<typeof PrimitiveDatePickerTableHeader> {}
export const PrimitiveDatePickerTableHeader = panda(DatePickerTableHeader);

export interface PrimitiveDatePickerTableRowProps
  extends ComponentProps<typeof PrimitiveDatePickerTableRow> {}
export const PrimitiveDatePickerTableRow = panda(DatePickerTableRow);

export interface PrimitiveDatePickerTriggerProps
  extends ComponentProps<typeof PrimitiveDatePickerTrigger> {}
export const PrimitiveDatePickerTrigger = panda(DatePickerTrigger);

export interface PrimitiveDatePickerViewProps
  extends ComponentProps<typeof PrimitiveDatePickerView> {}
export const PrimitiveDatePickerView = panda(DatePickerView);

export interface PrimitiveDatePickerViewControlProps
  extends ComponentProps<typeof PrimitiveDatePickerViewControl> {}
export const PrimitiveDatePickerViewControl = panda(DatePickerViewControl);

export interface PrimitiveDatePickerViewTriggerProps
  extends ComponentProps<typeof PrimitiveDatePickerViewTrigger> {}
export const PrimitiveDatePickerViewTrigger = panda(DatePickerViewTrigger);

export interface PrimitiveDatePickerYearSelectProps
  extends ComponentProps<typeof PrimitiveDatePickerYearSelect> {}
export const PrimitiveDatePickerYearSelect = panda(DatePickerYearSelect);

export default PrimitiveDatePicker;
