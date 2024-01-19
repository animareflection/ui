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
import type { ReactNode } from "react";

export interface Props extends PrimitiveTooltipProps, TooltipVariantProps {
  trigger?: ReactNode;
  tooltipContent: ReactNode;
  bgColor?: JsxStyleProps["bgColor"];
  arrow?: boolean;
  contentProps?: PrimitiveTooltipContentProps;
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
  ...rest
}: Props) => (
  <PrimitiveTooltip openDelay={openDelay} closeDelay={closeDelay} {...rest}>
    {({ isOpen }) => (
      <>
        {trigger && (
          <PrimitiveTooltipTrigger asChild>{trigger}</PrimitiveTooltipTrigger>
        )}

        <PrimitiveTooltipPositioner>
          {isOpen && (
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
          )}
        </PrimitiveTooltipPositioner>
      </>
    )}
  </PrimitiveTooltip>
);

export default Tooltip;
