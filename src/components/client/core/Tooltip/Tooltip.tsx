import { Portal } from "@ark-ui/react";

import {
  Tooltip as PrimitiveTooltip,
  TooltipArrow,
  TooltipArrowTip,
  TooltipContent,
  TooltipPositioner,
  TooltipTrigger,
} from "components/primitives";
import { tooltip } from "generated/panda/recipes";
import { useIsMounted } from "lib/hooks";

import type { TooltipProps } from "components/primitives";
import type { ReactNode } from "react";

export interface Props extends TooltipProps {
  trigger: ReactNode;
  content: ReactNode;
  bgColor?: string;
}

/**
 * Core UI tooltip.
 */
const Tooltip = ({
  trigger,
  content,
  openDelay = 0,
  closeDelay = 0,
  bgColor = "bg.default",
  ...rest
}: Props) => {
  const classNames = tooltip();

  const isMounted = useIsMounted();

  if (!isMounted) return null;

  return (
    <PrimitiveTooltip openDelay={openDelay} closeDelay={closeDelay} {...rest}>
      {({ isOpen }) => (
        <>
          <TooltipTrigger asChild>{trigger}</TooltipTrigger>
          <Portal>
            <TooltipPositioner className={classNames.positioner}>
              {isOpen && (
                <TooltipArrow
                  bgColor={bgColor}
                  rotate="45deg"
                  className={classNames.arrow}
                >
                  <TooltipArrowTip
                    rotate="-45deg"
                    className={classNames.arrowTip}
                  />
                </TooltipArrow>
              )}
              <TooltipContent bgColor={bgColor} className={classNames.content}>
                {content}
              </TooltipContent>
            </TooltipPositioner>
          </Portal>
        </>
      )}
    </PrimitiveTooltip>
  );
};

export default Tooltip;
