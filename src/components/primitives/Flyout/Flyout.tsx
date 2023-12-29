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
import { flyout } from "generated/panda/recipes";
import { createStyleContext } from "lib/util";

import type { ComponentProps } from "react";

const { withProvider, withContext } = createStyleContext(flyout);

/**
 * Core UI flyout primitives.
 */
export type PrimitiveFlyoutProps = ComponentProps<typeof PrimitiveFlyout>;
const PrimitiveFlyout = panda(Popover);

export type PrimitiveFlyoutArrowProps = ComponentProps<
  typeof PrimitiveFlyoutArrow
>;
export const PrimitiveFlyoutArrow = panda(PopoverArrow);

export type PrimitiveFlyoutArrowTipProps = ComponentProps<
  typeof PrimitiveFlyoutArrowTip
>;
export const PrimitiveFlyoutArrowTip = panda(PopoverArrowTip);

export type PrimitiveFlyoutCloseTriggerProps = ComponentProps<
  typeof PrimitiveFlyoutCloseTrigger
>;
export const PrimitiveFlyoutCloseTrigger = panda(PopoverCloseTrigger);

export type PrimitiveFlyoutContentProps = ComponentProps<
  typeof PrimitiveFlyoutContent
>;
export const PrimitiveFlyoutContent = panda(PopoverContent);

export type PrimitiveFlyoutDescriptionProps = ComponentProps<
  typeof PrimitiveFlyoutDescription
>;
export const PrimitiveFlyoutDescription = panda(PopoverDescription);

export type PrimitiveFlyoutPositionerProps = ComponentProps<
  typeof PrimitiveFlyoutPositioner
>;
export const PrimitiveFlyoutPositioner = panda(PopoverPositioner);

export type PrimitiveFlyoutTitleProps = ComponentProps<
  typeof PrimitiveFlyoutTitle
>;
export const PrimitiveFlyoutTitle = panda(PopoverTitle);

export type PrimitiveFlyoutTriggerProps = ComponentProps<
  typeof PrimitiveFlyoutTrigger
>;
export const PrimitiveFlyoutTrigger = panda(PopoverTrigger);

export default PrimitiveFlyout;
