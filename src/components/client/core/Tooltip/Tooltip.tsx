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
const Tooltip = ({ trigger, content, ...rest }: Props) => {
  const classNames = tooltip();

  const isMounted = useIsMounted();

  if (!isMounted) return null;
  return (
    <PrimitiveTooltip {...rest}>
      <TooltipTrigger asChild>{trigger}</TooltipTrigger>
      <Portal>
        <TooltipPositioner className={classNames.positioner}>
          <TooltipArrow>
            <TooltipArrowTip />
          </TooltipArrow>
          <TooltipContent className={classNames.content}>
            {content}
          </TooltipContent>
        </TooltipPositioner>
      </Portal>
    </PrimitiveTooltip>
  );
};

export default Tooltip;
