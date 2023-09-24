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

import type { PrimitiveTooltipProps } from "components/primitives";
import type { JsxStyleProps } from "generated/panda/types";
import type { ReactNode } from "react";

export interface Props extends PrimitiveTooltipProps {
  trigger: ReactNode;
  content: ReactNode;
  bgColor?: JsxStyleProps["bgColor"];
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
          <PrimitiveTooltipTrigger asChild>{trigger}</PrimitiveTooltipTrigger>
          <Portal>
            <PrimitiveTooltipPositioner className={classNames.positioner}>
              {isOpen && (
                <PrimitiveTooltipArrow
                  bgColor={bgColor}
                  className={classNames.arrow}
                >
                  <PrimitiveTooltipArrowTip className={classNames.arrowTip} />
                </PrimitiveTooltipArrow>
              )}
              <PrimitiveTooltipContent
                bgColor={bgColor}
                className={classNames.content}
              >
                {content}
              </PrimitiveTooltipContent>
            </PrimitiveTooltipPositioner>
          </Portal>
        </>
      )}
    </PrimitiveTooltip>
  );
};

export default Tooltip;
