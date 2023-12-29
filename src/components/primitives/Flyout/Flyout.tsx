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
const PrimitiveFlyout = withProvider(panda(Popover), "root");

export type PrimitiveFlyoutArrowProps = ComponentProps<
  typeof PrimitiveFlyoutArrow
>;
export const PrimitiveFlyoutArrow = withContext(panda(PopoverArrow), "arrow");

export type PrimitiveFlyoutArrowTipProps = ComponentProps<
  typeof PrimitiveFlyoutArrowTip
>;
export const PrimitiveFlyoutArrowTip = withContext(
  panda(PopoverArrowTip),
  "arrowTip",
);

export type PrimitiveFlyoutCloseTriggerProps = ComponentProps<
  typeof PrimitiveFlyoutCloseTrigger
>;
export const PrimitiveFlyoutCloseTrigger = withContext(
  panda(PopoverCloseTrigger),
  "closeTrigger",
);

export type PrimitiveFlyoutContentProps = ComponentProps<
  typeof PrimitiveFlyoutContent
>;
export const PrimitiveFlyoutContent = withContext(
  panda(PopoverContent),
  "content",
);

export type PrimitiveFlyoutDescriptionProps = ComponentProps<
  typeof PrimitiveFlyoutDescription
>;
export const PrimitiveFlyoutDescription = withContext(
  panda(PopoverDescription),
  "description",
);

export type PrimitiveFlyoutPositionerProps = ComponentProps<
  typeof PrimitiveFlyoutPositioner
>;
export const PrimitiveFlyoutPositioner = withContext(
  panda(PopoverPositioner),
  "positioner",
);

export type PrimitiveFlyoutTitleProps = ComponentProps<
  typeof PrimitiveFlyoutTitle
>;
export const PrimitiveFlyoutTitle = withContext(panda(PopoverTitle), "title");

export type PrimitiveFlyoutTriggerProps = ComponentProps<
  typeof PrimitiveFlyoutTrigger
>;
export const PrimitiveFlyoutTrigger = withContext(
  panda(PopoverTrigger),
  "trigger",
);

export default PrimitiveFlyout;
