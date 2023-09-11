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
export type FlyoutProps = PopoverProps;
const Flyout = panda(Popover);

export type FlyoutArrowProps = PopoverArrowProps;
export const FlyoutArrow = panda(PopoverArrow);

export type FlyoutArrowTipProps = PopoverArrowTipProps;
export const FlyoutArrowTip = panda(PopoverArrowTip);

export type FlyoutCloseTriggerProps = PopoverCloseTriggerProps;
export const FlyoutCloseTrigger = panda(PopoverCloseTrigger);

export type FlyoutContentProps = PopoverContentProps;
export const FlyoutContent = panda(PopoverContent);

export type FlyoutDescriptionProps = PopoverDescriptionProps;
export const FlyoutDescription = panda(PopoverDescription);

export type FlyoutPositionerProps = PopoverPositionerProps;
export const FlyoutPositioner = panda(PopoverPositioner);

export type FlyoutTitleProps = PopoverTitleProps;
export const FlyoutTitle = panda(PopoverTitle);

export type FlyoutTriggerProps = PopoverTriggerProps;
export const FlyoutTrigger = panda(PopoverTrigger);

export default Flyout;
