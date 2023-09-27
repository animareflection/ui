import {
  Popover,
  PopoverArrow,
  PopoverArrowTip,
  PopoverCloseTrigger,
  PopoverContent,
  PopoverDescription,
  PopoverPositioner,
  PopoverTitle,
  PopoverTrigger,
} from "@ark-ui/react";

import { panda } from "generated/panda/jsx";

import type {
  PopoverProps,
  PopoverArrowProps,
  PopoverArrowTipProps,
  PopoverCloseTriggerProps,
  PopoverContentProps,
  PopoverDescriptionProps,
  PopoverPositionerProps,
  PopoverTitleProps,
  PopoverTriggerProps,
} from "@ark-ui/react";

/**
 * Core UI flyout primitives.
 */
export type PrimitiveFlyoutProps = PopoverProps;
const PrimitiveFlyout = panda(Popover);

export type PrimitiveFlyoutArrowProps = PopoverArrowProps;
export const PrimitiveFlyoutArrow = panda(PopoverArrow);

export type PrimitiveFlyoutArrowTipProps = PopoverArrowTipProps;
export const PrimitiveFlyoutArrowTip = panda(PopoverArrowTip);

export type PrimitiveFlyoutCloseTriggerProps = PopoverCloseTriggerProps;
export const PrimitiveFlyoutCloseTrigger = panda(PopoverCloseTrigger);

export type PrimitiveFlyoutContentProps = PopoverContentProps;
export const PrimitiveFlyoutContent = panda(PopoverContent);

export type PrimitiveFlyoutDescriptionProps = PopoverDescriptionProps;
export const PrimitiveFlyoutDescription = panda(PopoverDescription);

export type PrimitiveFlyoutPositionerProps = PopoverPositionerProps;
export const PrimitiveFlyoutPositioner = panda(PopoverPositioner);

export type PrimitiveFlyoutTitleProps = PopoverTitleProps;
export const PrimitiveFlyoutTitle = panda(PopoverTitle);

export type PrimitiveFlyoutTriggerProps = PopoverTriggerProps;
export const PrimitiveFlyoutTrigger = panda(PopoverTrigger);

export default PrimitiveFlyout;
