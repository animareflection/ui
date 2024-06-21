import { Portal, TooltipContext } from "@ark-ui/react";

import {
  PrimitiveTooltip,
  PrimitiveTooltipArrow,
  PrimitiveTooltipArrowTip,
  PrimitiveTooltipContent,
  PrimitiveTooltipPositioner,
  PrimitiveTooltipTrigger,
} from "components/primitives";

import type {
  PrimitiveTooltipContentProps,
  PrimitiveTooltipProps,
} from "components/primitives";
import type { TooltipVariantProps } from "generated/panda/recipes";
import type { JsxStyleProps } from "generated/panda/types";
import type { ReactNode, RefObject } from "react";

export interface Props extends PrimitiveTooltipProps, TooltipVariantProps {
  trigger?: ReactNode;
  tooltipContent: ReactNode;
  bgColor?: JsxStyleProps["bgColor"];
  arrow?: boolean;
  contentProps?: PrimitiveTooltipContentProps;
  /** Portal container ref to mount to. */
  containerRef?: RefObject<HTMLElement>;
}

/**
 * Tooltip.
 */
const Tooltip = ({
  trigger,
  tooltipContent,
  openDelay = 0,
  closeDelay = 0,
  bgColor = "bg.default",
  arrow = true,
  contentProps,
  containerRef,
  ...rest
}: Props) => (
  <PrimitiveTooltip openDelay={openDelay} closeDelay={closeDelay} {...rest}>
    {trigger && (
      <PrimitiveTooltipTrigger asChild>{trigger}</PrimitiveTooltipTrigger>
    )}

    <Portal container={containerRef}>
      <PrimitiveTooltipPositioner>
        <TooltipContext>
          {({ open }) =>
            open && (
              <>
                {arrow && (
                  <PrimitiveTooltipArrow bgColor={bgColor}>
                    <PrimitiveTooltipArrowTip />
                  </PrimitiveTooltipArrow>
                )}

                <PrimitiveTooltipContent bgColor={bgColor} {...contentProps}>
                  {tooltipContent}
                </PrimitiveTooltipContent>
              </>
            )
          }
        </TooltipContext>
      </PrimitiveTooltipPositioner>
    </Portal>
  </PrimitiveTooltip>
);

export default Tooltip;
