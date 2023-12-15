import { Portal } from "@ark-ui/react";

import {
  PrimitiveTooltip,
  PrimitiveTooltipArrow,
  PrimitiveTooltipArrowTip,
  PrimitiveTooltipContent,
  PrimitiveTooltipPositioner,
  PrimitiveTooltipTrigger,
} from "components/primitives";
import { tooltip } from "generated/panda/recipes";
import { useIsClient } from "lib/hooks";

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
  containerRef?: RefObject<HTMLElement>;
  contentProps?: PrimitiveTooltipContentProps;
}

/**
 * Core UI tooltip.
 */
const Tooltip = ({
  trigger,
  tooltipContent,
  openDelay = 0,
  closeDelay = 0,
  bgColor = "bg.default",
  variant,
  arrow = true,
  containerRef,
  contentProps,
  ...rest
}: Props) => {
  const isClient = useIsClient();

  const classNames = tooltip({ variant });

  if (!isClient) return null;

  return (
    <PrimitiveTooltip openDelay={openDelay} closeDelay={closeDelay} {...rest}>
      {({ isOpen }) => (
        <>
          {trigger && (
            <PrimitiveTooltipTrigger asChild className={classNames.trigger}>
              {trigger}
            </PrimitiveTooltipTrigger>
          )}

          <Portal container={containerRef}>
            <PrimitiveTooltipPositioner className={classNames.positioner}>
              {isOpen && (
                <>
                  {arrow && (
                    <PrimitiveTooltipArrow
                      bgColor={bgColor}
                      className={classNames.arrow}
                    >
                      <PrimitiveTooltipArrowTip
                        className={classNames.arrowTip}
                      />
                    </PrimitiveTooltipArrow>
                  )}
                  <PrimitiveTooltipContent
                    bgColor={bgColor}
                    className={classNames.content}
                    {...contentProps}
                  >
                    {tooltipContent}
                  </PrimitiveTooltipContent>
                </>
              )}
            </PrimitiveTooltipPositioner>
          </Portal>
        </>
      )}
    </PrimitiveTooltip>
  );
};

export default Tooltip;
