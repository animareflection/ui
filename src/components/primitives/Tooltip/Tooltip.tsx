/**
 * @file Tooltip primitives.
 */
import {
  TooltipRoot,
  TooltipArrow,
  TooltipArrowTip,
  TooltipContent,
  TooltipPositioner,
  TooltipTrigger,
} from "@ark-ui/react";

import { panda } from "generated/panda/jsx";
import { tooltip } from "generated/panda/recipes";
import { createStyleContext } from "lib/util";

import type { ComponentProps } from "react";

const { withProvider, withContext } = createStyleContext(tooltip);

export type PrimitiveTooltipProps = ComponentProps<typeof PrimitiveTooltip>;
const PrimitiveTooltip = withProvider(panda(TooltipRoot), "root");

export type PrimitiveTooltipArrowProps = ComponentProps<
  typeof PrimitiveTooltipArrow
>;
export const PrimitiveTooltipArrow = withContext(panda(TooltipArrow), "arrow");

export type PrimitiveTooltipArrowTipProps = ComponentProps<
  typeof PrimitiveTooltipArrowTip
>;
export const PrimitiveTooltipArrowTip = withContext(
  panda(TooltipArrowTip),
  "arrowTip",
);

export type PrimitiveTooltipContentProps = ComponentProps<
  typeof PrimitiveTooltipContent
>;
export const PrimitiveTooltipContent = withContext(
  panda(TooltipContent),
  "content",
);

export type PrimitiveTooltipPositionerProps = ComponentProps<
  typeof PrimitiveTooltipPositioner
>;
export const PrimitiveTooltipPositioner = withContext(
  panda(TooltipPositioner),
  "positioner",
);

export type PrimitiveTooltipTriggerProps = ComponentProps<
  typeof PrimitiveTooltipTrigger
>;
export const PrimitiveTooltipTrigger = withContext(
  panda(TooltipTrigger),
  "trigger",
);

export default PrimitiveTooltip;
