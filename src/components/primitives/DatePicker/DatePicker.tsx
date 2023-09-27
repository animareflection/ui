import {
  DatePicker as ArkDatePicker,
  DatePickerControl as ArkDatePickerControl,
  DatePickerInput as ArkDatePickerInput,
  DatePickerTrigger as ArkDatePickerTrigger,
  DatePickerClearTrigger as ArkDatePickerClearTrigger,
  DatePickerContent as ArkDatePickerContent,
  DatePickerYearSelect as ArkDatePickerYearSelect,
  DatePickerMonthSelect as ArkDatePickerMonthSelect,
  DatePickerPrevTrigger as ArkDatePickerPrevTrigger,
  DatePickerViewTrigger as ArkDatePickerViewTrigger,
  DatePickerNextTrigger as ArkDatePickerNextTrigger,
  DatePickerGrid as ArkDatePickerGrid,
  DatePickerRowHeader as ArkDatePickerRowHeader,
  DatePickerColumnHeader as ArkDatePickerColumnHeader,
  DatePickerRowGroup as ArkDatePickerRowGroup,
  DatePickerRow as ArkDatePickerRow,
  DatePickerDayCell as ArkDatePickerDayCell,
  DatePickerDayCellTrigger as ArkDatePickerDayCellTrigger,
  DatePickerMonthCell as ArkDatePickerMonthCell,
  DatePickerMonthCellTrigger as ArkDatePickerMonthCellTrigger,
  DatePickerYearCell as ArkDatePickerYearCell,
  DatePickerYearCellTrigger as ArkDatePickerYearCellTrigger,
  DatePickerPositioner as ArkDatePickerPositioner,
} from "@ark-ui/react";

import { panda } from "generated/panda/jsx";

import type {
  DatePickerProps as ArkDatePickerProps,
  DatePickerControlProps as ArkDatePickerControlProps,
  DatePickerInputProps as ArkDatePickerInputProps,
  DatePickerTriggerProps as ArkDatePickerTriggerProps,
  DatePickerClearTriggerProps as ArkDatePickerClearTriggerProps,
  DatePickerContentProps as ArkDatePickerContentProps,
  DatePickerYearSelectProps as ArkDatePickerYearSelectProps,
  DatePickerMonthSelectProps as ArkDatePickerMonthSelectProps,
  DatePickerPrevTriggerProps as ArkDatePickerPrevTriggerProps,
  DatePickerViewTriggerProps as ArkDatePickerViewTriggerProps,
  DatePickerNextTriggerProps as ArkDatePickerNextTriggerProps,
  DatePickerGridProps as ArkDatePickerGridProps,
  DatePickerRowHeaderProps as ArkDatePickerRowHeaderProps,
  DatePickerColumnHeaderProps as ArkDatePickerColumnHeaderProps,
  DatePickerRowGroupProps as ArkDatePickerRowGroupProps,
  DatePickerRowProps as ArkDatePickerRowProps,
  DatePickerDayCellProps as ArkDatePickerDayCellProps,
  DatePickerDayCellTriggerProps as ArkDatePickerDayCellTriggerProps,
  DatePickerMonthCellProps as ArkDatePickerMonthCellProps,
  DatePickerMonthCellTriggerProps as ArkDatePickerMonthCellTriggerProps,
  DatePickerYearCellProps as ArkDatePickerYearCellProps,
  DatePickerYearCellTriggerProps as ArkDatePickerYearCellTriggerProps,
  DatePickerPositionerProps as ArkDatePickerPositionerProps,
} from "@ark-ui/react";
import type { PandaComponent } from "generated/panda/types/jsx";

/**
 * Core UI date picker primitives.
 */
export type DatePickerProps = ArkDatePickerProps;
const DatePicker: PandaComponent<typeof ArkDatePicker> = panda(ArkDatePicker);

export type DatePickerControlProps = ArkDatePickerControlProps;
export const DatePickerControl = panda(ArkDatePickerControl);

export type DatePickerInputProps = ArkDatePickerInputProps;
export const DatePickerInput = panda(ArkDatePickerInput);

export type DatePickerTriggerProps = ArkDatePickerTriggerProps;
export const DatePickerTrigger = panda(ArkDatePickerTrigger);

export type DatePickerClearTriggerProps = ArkDatePickerClearTriggerProps;
export const DatePickerClearTrigger = panda(ArkDatePickerClearTrigger);

export type DatePickerContentProps = ArkDatePickerContentProps;
export const DatePickerContent = panda(ArkDatePickerContent);

export type DatePickerYearSelectProps = ArkDatePickerYearSelectProps;
export const DatePickerYearSelect = panda(ArkDatePickerYearSelect);

export type DatePickerMonthSelectProps = ArkDatePickerMonthSelectProps;
export const DatePickerMonthSelect = panda(ArkDatePickerMonthSelect);

export type DatePickerPrevTriggerProps = ArkDatePickerPrevTriggerProps;
export const DatePickerPrevTrigger: PandaComponent<
  typeof ArkDatePickerPrevTrigger
> = panda(ArkDatePickerPrevTrigger);

export type DatePickerViewTriggerProps = ArkDatePickerViewTriggerProps;
export const DatePickerViewTrigger: PandaComponent<
  typeof ArkDatePickerViewTrigger
> = panda(ArkDatePickerViewTrigger);

export type DatePickerNextTriggerProps = ArkDatePickerNextTriggerProps;
export const DatePickerNextTrigger = panda(ArkDatePickerNextTrigger);

export type DatePickerGridProps = ArkDatePickerGridProps;
export const DatePickerGrid: PandaComponent<typeof ArkDatePickerGrid> =
  panda(ArkDatePickerGrid);

export type DatePickerRowHeaderProps = ArkDatePickerRowHeaderProps;
export const DatePickerRowHeader = panda(ArkDatePickerRowHeader);

export type DatePickerColumnHeaderProps = ArkDatePickerColumnHeaderProps;
export const DatePickerColumnHeader = panda(ArkDatePickerColumnHeader);

export type DatePickerRowGroupProps = ArkDatePickerRowGroupProps;
export const DatePickerRowGroup = panda(ArkDatePickerRowGroup);

export type DatePickerRowProps = ArkDatePickerRowProps;
export const DatePickerRow = panda(ArkDatePickerRow);

export type DatePickerDayCellProps = ArkDatePickerDayCellProps;
export const DatePickerDayCell: PandaComponent<typeof ArkDatePickerDayCell> =
  panda(ArkDatePickerDayCell);

export type DatePickerDayCellTriggerProps = ArkDatePickerDayCellTriggerProps;
export const DatePickerDayCellTrigger = panda(ArkDatePickerDayCellTrigger);

export type DatePickerMonthCellProps = ArkDatePickerMonthCellProps;
export const DatePickerMonthCell: PandaComponent<
  typeof ArkDatePickerMonthCell
> = panda(ArkDatePickerMonthCell);

export type DatePickerMonthCellTriggerProps =
  ArkDatePickerMonthCellTriggerProps;
export const DatePickerMonthCellTrigger = panda(ArkDatePickerMonthCellTrigger);

export type DatePickerYearCellProps = ArkDatePickerYearCellProps;
export const DatePickerYearCell: PandaComponent<typeof ArkDatePickerYearCell> =
  panda(ArkDatePickerYearCell);

export type DatePickerYearCellTriggerProps = ArkDatePickerYearCellTriggerProps;
export const DatePickerYearCellTrigger = panda(ArkDatePickerYearCellTrigger);

export type DatePickerPositionerProps = ArkDatePickerPositionerProps;
export const DatePickerPositioner = panda(ArkDatePickerPositioner);

export default DatePicker;
