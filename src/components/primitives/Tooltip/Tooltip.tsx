import {
  Tooltip as ArkTooltip,
  TooltipArrow as ArkTooltipArrow,
  TooltipArrowTip as ArkTooltipArrowTip,
  TooltipContent as ArkTooltipContent,
  TooltipPositioner as ArkTooltipPositioner,
  TooltipTrigger as ArkTooltipTrigger,
} from "@ark-ui/react";

import { panda } from "generated/panda/jsx";

import type {
  TooltipProps as ArkTooltipProps,
  TooltipArrowProps as ArkTooltipArrowProps,
  TooltipArrowTipProps as ArkTooltipArrowTipProps,
  TooltipContentProps as ArkTooltipContentProps,
  TooltipPositionerProps as ArkTooltipPositionerProps,
  TooltipTriggerProps as ArkTooltipTriggerProps,
} from "@ark-ui/react";

/**
 * Core UI tooltip primitives.
 */
export type TooltipProps = ArkTooltipProps;
const Tooltip = panda(ArkTooltip);

export type TooltipArrowProps = ArkTooltipArrowProps;
export const TooltipArrow = panda(ArkTooltipArrow);

export type TooltipArrowTipProps = ArkTooltipArrowTipProps;
export const TooltipArrowTip = panda(ArkTooltipArrowTip);

export type TooltipContentProps = ArkTooltipContentProps;
export const TooltipContent = panda(ArkTooltipContent);

export type TooltipPositionerProps = ArkTooltipPositionerProps;
export const TooltipPositioner = panda(ArkTooltipPositioner);

export type TooltipTriggerProps = ArkTooltipTriggerProps;
export const TooltipTrigger = panda(ArkTooltipTrigger);

export default Tooltip;
