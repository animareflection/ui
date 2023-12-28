import {
  Tooltip,
  TooltipArrow,
  TooltipArrowTip,
  TooltipContent,
  TooltipPositioner,
  TooltipTrigger,
} from "@ark-ui/react";

import { panda } from "generated/panda/jsx";

import type { ComponentProps } from "react";

/**
 * Core UI tooltip primitives.
 */
export type PrimitiveTooltipProps = ComponentProps<typeof PrimitiveTooltip>;
const PrimitiveTooltip = panda(Tooltip);

export type PrimitiveTooltipArrowProps = ComponentProps<
  typeof PrimitiveTooltipArrow
>;
export const PrimitiveTooltipArrow = panda(TooltipArrow);

export type PrimitiveTooltipArrowTipProps = ComponentProps<
  typeof PrimitiveTooltipArrowTip
>;
export const PrimitiveTooltipArrowTip = panda(TooltipArrowTip);

export type PrimitiveTooltipContentProps = ComponentProps<
  typeof PrimitiveTooltipContent
>;
export const PrimitiveTooltipContent = panda(TooltipContent);

export type PrimitiveTooltipPositionerProps = ComponentProps<
  typeof PrimitiveTooltipPositioner
>;
export const PrimitiveTooltipPositioner = panda(TooltipPositioner);

export type PrimitiveTooltipTriggerProps = ComponentProps<
  typeof PrimitiveTooltipTrigger
>;
export const PrimitiveTooltipTrigger = panda(TooltipTrigger);

export default PrimitiveTooltip;
