import {
  Tooltip,
  TooltipArrow,
  TooltipArrowTip,
  TooltipContent,
  TooltipPositioner,
  TooltipTrigger,
} from "@ark-ui/react";

import { panda } from "generated/panda/jsx";

import type {
  TooltipProps,
  TooltipArrowProps,
  TooltipArrowTipProps,
  TooltipContentProps,
  TooltipPositionerProps,
  TooltipTriggerProps,
} from "@ark-ui/react";
import type { HTMLPandaProps } from "generated/panda/jsx";

/**
 * Core UI tooltip primitives.
 */
export type PrimitiveTooltipProps = TooltipProps;
const PrimitiveTooltip = panda(Tooltip);

export type PrimitiveTooltipArrowProps = TooltipArrowProps;
export const PrimitiveTooltipArrow = panda(TooltipArrow);

export type PrimitiveTooltipArrowTipProps = TooltipArrowTipProps;
export const PrimitiveTooltipArrowTip = panda(TooltipArrowTip);

export type PrimitiveTooltipContentProps = TooltipContentProps;
export const PrimitiveTooltipContent = panda(TooltipContent);

export type PrimitiveTooltipPositionerProps = TooltipPositionerProps;
export const PrimitiveTooltipPositioner = panda(TooltipPositioner);

export type PrimitiveTooltipTriggerProps = TooltipTriggerProps &
  HTMLPandaProps<"button">;
export const PrimitiveTooltipTrigger = panda(TooltipTrigger);

export default PrimitiveTooltip;
