import {
  DatePicker,
  DatePickerControl,
  DatePickerInput,
  DatePickerTrigger,
  DatePickerClearTrigger,
  DatePickerContent,
  DatePickerYearSelect,
  DatePickerMonthSelect,
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
} from "@ark-ui/react";

import { panda } from "generated/panda/jsx";

import type {
  DatePickerProps,
  DatePickerControlProps,
  DatePickerInputProps,
  DatePickerTriggerProps,
  DatePickerClearTriggerProps,
  DatePickerContentProps,
  DatePickerYearSelectProps,
  DatePickerMonthSelectProps,
  DatePickerPrevTriggerProps,
  DatePickerViewTriggerProps,
  DatePickerNextTriggerProps,
  DatePickerGridProps,
  DatePickerRowHeaderProps,
  DatePickerColumnHeaderProps,
  DatePickerRowGroupProps,
  DatePickerRowProps,
  DatePickerDayCellProps,
  DatePickerDayCellTriggerProps,
  DatePickerMonthCellProps,
  DatePickerMonthCellTriggerProps,
  DatePickerYearCellProps,
  DatePickerYearCellTriggerProps,
  DatePickerPositionerProps,
} from "@ark-ui/react";
import type { PandaComponent } from "generated/panda/types/jsx";

/**
 * Core UI date picker primitives.
 */
export type PrimitiveDatePickerProps = DatePickerProps;
const PrimitiveDatePicker: PandaComponent<typeof DatePicker> =
  panda(DatePicker);

export type PrimitiveDatePickerControlProps = DatePickerControlProps;
export const PrimitiveDatePickerControl = panda(DatePickerControl);

export type PrimitiveDatePickerInputProps = DatePickerInputProps;
export const PrimitiveDatePickerInput = panda(DatePickerInput);

export type PrimitiveDatePickerTriggerProps = DatePickerTriggerProps;
export const PrimitiveDatePickerTrigger = panda(DatePickerTrigger);

export type PrimitiveDatePickerClearTriggerProps = DatePickerClearTriggerProps;
export const PrimitiveDatePickerClearTrigger = panda(DatePickerClearTrigger);

export type PrimitiveDatePickerContentProps = DatePickerContentProps;
export const PrimitiveDatePickerContent = panda(DatePickerContent);

export type PrimitiveDatePickerYearSelectProps = DatePickerYearSelectProps;
export const PrimitiveDatePickerYearSelect = panda(DatePickerYearSelect);

export type PrimitiveDatePickerMonthSelectProps = DatePickerMonthSelectProps;
export const PrimitiveDatePickerMonthSelect = panda(DatePickerMonthSelect);

export type PrimitiveDatePickerPrevTriggerProps = DatePickerPrevTriggerProps;
export const PrimitiveDatePickerPrevTrigger: PandaComponent<
  typeof DatePickerPrevTrigger
> = panda(DatePickerPrevTrigger);

export type PrimitiveDatePickerViewTriggerProps = DatePickerViewTriggerProps;
export const PrimitiveDatePickerViewTrigger: PandaComponent<
  typeof DatePickerViewTrigger
> = panda(DatePickerViewTrigger);

export type PrimitiveDatePickerNextTriggerProps = DatePickerNextTriggerProps;
export const PrimitiveDatePickerNextTrigger = panda(DatePickerNextTrigger);

export type PrimitiveDatePickerGridProps = DatePickerGridProps;
export const PrimitiveDatePickerGrid: PandaComponent<typeof DatePickerGrid> =
  panda(DatePickerGrid);

export type PrimitiveDatePickerRowHeaderProps = DatePickerRowHeaderProps;
export const PrimitiveDatePickerRowHeader = panda(DatePickerRowHeader);

export type PrimitiveDatePickerColumnHeaderProps = DatePickerColumnHeaderProps;
export const PrimitiveDatePickerColumnHeader = panda(DatePickerColumnHeader);

export type PrimitiveDatePickerRowGroupProps = DatePickerRowGroupProps;
export const PrimitiveDatePickerRowGroup = panda(DatePickerRowGroup);

export type PrimitiveDatePickerRowProps = DatePickerRowProps;
export const PrimitiveDatePickerRow = panda(DatePickerRow);

export type PrimitiveDatePickerDayCellProps = DatePickerDayCellProps;
export const PrimitiveDatePickerDayCell: PandaComponent<
  typeof DatePickerDayCell
> = panda(DatePickerDayCell);

export type PrimitiveDatePickerDayCellTriggerProps =
  DatePickerDayCellTriggerProps;
export const PrimitiveDatePickerDayCellTrigger = panda(
  DatePickerDayCellTrigger,
);

export type PrimitiveDatePickerMonthCellProps = DatePickerMonthCellProps;
export const PrimitiveDatePickerMonthCell: PandaComponent<
  typeof DatePickerMonthCell
> = panda(DatePickerMonthCell);

export type PrimitiveDatePickerMonthCellTriggerProps =
  DatePickerMonthCellTriggerProps;
export const PrimitiveDatePickerMonthCellTrigger = panda(
  DatePickerMonthCellTrigger,
);

export type PrimitiveDatePickerYearCellProps = DatePickerYearCellProps;
export const PrimitiveDatePickerYearCell: PandaComponent<
  typeof DatePickerYearCell
> = panda(DatePickerYearCell);

export type PrimitiveDatePickerYearCellTriggerProps =
  DatePickerYearCellTriggerProps;
export const PrimitiveDatePickerYearCellTrigger = panda(
  DatePickerYearCellTrigger,
);

export type PrimitiveDatePickerPositionerProps = DatePickerPositionerProps;
export const PrimitiveDatePickerPositioner = panda(DatePickerPositioner);

export default PrimitiveDatePicker;
