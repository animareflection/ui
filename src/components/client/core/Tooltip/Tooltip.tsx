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
}

/**
 * Core UI tooltip.
 */
const Tooltip = ({
  trigger,
  content,
  openDelay = 0,
  closeDelay = 0,
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
                <TooltipArrow className={classNames.arrow}>
                  <TooltipArrowTip className={classNames.arrowTip} />
                </TooltipArrow>
              )}
              <TooltipContent className={classNames.content}>
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
