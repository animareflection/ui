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
import { datePicker } from "generated/panda/recipes";
import { createStyleContext } from "lib/util";

import type { ComponentProps } from "react";

const { withProvider, withContext } = createStyleContext(datePicker);

export interface PrimitiveDatePickerProps
  extends ComponentProps<typeof PrimitiveDatePicker> {}
const PrimitiveDatePicker = withProvider(panda(DatePicker), "root");

export interface PrimitiveDatePickerClearTriggerProps
  extends ComponentProps<typeof PrimitiveDatePickerClearTrigger> {}
export const PrimitiveDatePickerClearTrigger = withContext(
  panda(DatePickerClearTrigger),
  "clearTrigger",
);

export interface PrimitiveDatePickerContentProps
  extends ComponentProps<typeof PrimitiveDatePickerContent> {}
export const PrimitiveDatePickerContent = withContext(
  panda(DatePickerContent),
  "content",
);

export interface PrimitiveDatePickerControlProps
  extends ComponentProps<typeof PrimitiveDatePickerControl> {}
export const PrimitiveDatePickerControl = withContext(
  panda(DatePickerControl),
  "control",
);

export interface PrimitiveDatePickerInputProps
  extends ComponentProps<typeof PrimitiveDatePickerInput> {}
export const PrimitiveDatePickerInput = withContext(
  panda(DatePickerInput),
  "input",
);

export interface PrimitiveDatePickerLabelProps
  extends ComponentProps<typeof PrimitiveDatePickerLabel> {}
export const PrimitiveDatePickerLabel = withContext(
  panda(DatePickerLabel),
  "label",
);

export interface PrimitiveDatePickerMonthSelectProps
  extends ComponentProps<typeof PrimitiveDatePickerMonthSelect> {}
export const PrimitiveDatePickerMonthSelect = withContext(
  panda(DatePickerMonthSelect),
  "monthSelect",
);

export interface PrimitiveDatePickerNextTriggerProps
  extends ComponentProps<typeof PrimitiveDatePickerNextTrigger> {}
export const PrimitiveDatePickerNextTrigger = withContext(
  panda(DatePickerNextTrigger),
  "nextTrigger",
);

export interface PrimitiveDatePickerPositionerProps
  extends ComponentProps<typeof PrimitiveDatePickerPositioner> {}
export const PrimitiveDatePickerPositioner = withContext(
  panda(DatePickerPositioner),
  "positioner",
);

export interface PrimitiveDatePickerPrevTriggerProps
  extends ComponentProps<typeof PrimitiveDatePickerPrevTrigger> {}
export const PrimitiveDatePickerPrevTrigger = withContext(
  panda(DatePickerPrevTrigger),
  "prevTrigger",
);

export interface PrimitiveDatePickerRangeTextProps
  extends ComponentProps<typeof PrimitiveDatePickerRangeText> {}
export const PrimitiveDatePickerRangeText = withContext(
  panda(DatePickerRangeText),
  "rangeText",
);

export interface PrimitiveDatePickerTableProps
  extends ComponentProps<typeof PrimitiveDatePickerTable> {}
export const PrimitiveDatePickerTable = withContext(
  panda(DatePickerTable),
  "table",
);

export interface PrimitiveDatePickerTableBodyProps
  extends ComponentProps<typeof PrimitiveDatePickerTableBody> {}
export const PrimitiveDatePickerTableBody = withContext(
  panda(DatePickerTableBody),
  "tableBody",
);

export interface PrimitiveDatePickerTableCellProps
  extends ComponentProps<typeof PrimitiveDatePickerTableCell> {}
export const PrimitiveDatePickerTableCell = withContext(
  panda(DatePickerTableCell),
  "tableCell",
);

export interface PrimitiveDatePickerTableCellTriggerProps
  extends ComponentProps<typeof PrimitiveDatePickerTableCellTrigger> {}
export const PrimitiveDatePickerTableCellTrigger = withContext(
  panda(DatePickerTableCellTrigger),
  "tableCellTrigger",
);

export interface PrimitiveDatePickerTableHeadProps
  extends ComponentProps<typeof PrimitiveDatePickerTableHead> {}
export const PrimitiveDatePickerTableHead = withContext(
  panda(DatePickerTableHead),
  "tableHead",
);

export interface PrimitiveDatePickerTableHeaderProps
  extends ComponentProps<typeof PrimitiveDatePickerTableHeader> {}
export const PrimitiveDatePickerTableHeader = withContext(
  panda(DatePickerTableHeader),
  "tableHeader",
);

export interface PrimitiveDatePickerTableRowProps
  extends ComponentProps<typeof PrimitiveDatePickerTableRow> {}
export const PrimitiveDatePickerTableRow = withContext(
  panda(DatePickerTableRow),
  "tableRow",
);

export interface PrimitiveDatePickerTriggerProps
  extends ComponentProps<typeof PrimitiveDatePickerTrigger> {}
export const PrimitiveDatePickerTrigger = withContext(
  panda(DatePickerTrigger),
  "trigger",
);

export interface PrimitiveDatePickerViewProps
  extends ComponentProps<typeof PrimitiveDatePickerView> {}
export const PrimitiveDatePickerView = withContext(
  panda(DatePickerView),
  "view",
);

export interface PrimitiveDatePickerViewControlProps
  extends ComponentProps<typeof PrimitiveDatePickerViewControl> {}
export const PrimitiveDatePickerViewControl = withContext(
  panda(DatePickerViewControl),
  "viewControl",
);

export interface PrimitiveDatePickerViewTriggerProps
  extends ComponentProps<typeof PrimitiveDatePickerViewTrigger> {}
export const PrimitiveDatePickerViewTrigger = withContext(
  panda(DatePickerViewTrigger),
  "viewTrigger",
);

export interface PrimitiveDatePickerYearSelectProps
  extends ComponentProps<typeof PrimitiveDatePickerYearSelect> {}
export const PrimitiveDatePickerYearSelect = withContext(
  panda(DatePickerYearSelect),
  "yearSelect",
);

export default PrimitiveDatePicker;
