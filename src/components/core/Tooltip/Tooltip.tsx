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
import { useIsMounted } from "lib/hooks";

import type {
  PrimitiveTooltipProps,
  PrimitiveTooltipTriggerProps,
} from "components/primitives";
import type { TooltipVariantProps } from "generated/panda/recipes";
import type { JsxStyleProps } from "generated/panda/types";
import type { ReactNode } from "react";

export interface Props extends PrimitiveTooltipProps, TooltipVariantProps {
  trigger: ReactNode;
  content: ReactNode;
  bgColor?: JsxStyleProps["bgColor"];
  triggerProps?: PrimitiveTooltipTriggerProps;
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
  variant,
  triggerProps,
  ...rest
}: Props) => {
  const classNames = tooltip({ variant });

  const isMounted = useIsMounted();

  if (!isMounted) return null;

  return (
    <PrimitiveTooltip openDelay={openDelay} closeDelay={closeDelay} {...rest}>
      {({ isOpen }) => (
        <>
          <PrimitiveTooltipTrigger
            className={classNames.trigger}
            {...triggerProps}
          >
            {trigger}
          </PrimitiveTooltipTrigger>
          <Portal>
            <PrimitiveTooltipPositioner className={classNames.positioner}>
              {isOpen && (
                <>
                  <PrimitiveTooltipArrow
                    bgColor={bgColor}
                    className={classNames.arrow}
                  >
                    <PrimitiveTooltipArrowTip className={classNames.arrowTip} />
                  </PrimitiveTooltipArrow>
                  <PrimitiveTooltipContent
                    bgColor={bgColor}
                    className={classNames.content}
                  >
                    {content}
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
