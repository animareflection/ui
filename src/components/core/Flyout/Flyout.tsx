import { Portal } from "@ark-ui/react";
import { useState } from "react";
import { FiX as CloseIcon } from "react-icons/fi";

import Icon from "components/core/Icon/Icon";
import {
  PrimitiveFlyout,
  PrimitiveFlyoutArrow,
  PrimitiveFlyoutArrowTip,
  PrimitiveFlyoutCloseTrigger,
  PrimitiveFlyoutContent,
  PrimitiveFlyoutDescription,
  PrimitiveFlyoutPositioner,
  PrimitiveFlyoutTitle,
  PrimitiveFlyoutTrigger,
} from "components/primitives";
import { flyout } from "generated/panda/recipes";
import { useIsClient } from "lib/hooks";

import type {
  PrimitiveFlyoutProps,
  PrimitiveFlyoutTriggerProps,
} from "components/primitives";
import type { RefObject, ReactNode } from "react";

export interface Props extends PrimitiveFlyoutProps {
  trigger?: ReactNode;
  title?: ReactNode;
  children: ReactNode;
  triggerProps?: PrimitiveFlyoutTriggerProps;
  containerRef?: RefObject<HTMLElement>;
}

/**
 * Core UI flyout.
 */
const Flyout = ({
  trigger,
  title,
  children,
  triggerProps,
  containerRef,
  ...rest
}: Props) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const classNames = flyout();

  const isClient = useIsClient();

  if (!isClient) return null;

  return (
    <PrimitiveFlyout
      open={isOpen}
      onClose={() => setIsOpen(false)}
      portalled
      {...rest}
    >
      {trigger && (
        <PrimitiveFlyoutTrigger
          asChild
          className={classNames.trigger}
          onClick={() => setIsOpen(!isOpen)}
          {...triggerProps}
        >
          {trigger}
        </PrimitiveFlyoutTrigger>
      )}

      <Portal container={containerRef}>
        <PrimitiveFlyoutPositioner className={classNames.positioner}>
          <PrimitiveFlyoutContent className={classNames.content}>
            <PrimitiveFlyoutArrow className={classNames.arrow}>
              <PrimitiveFlyoutArrowTip className={classNames.arrowTip} />
            </PrimitiveFlyoutArrow>
            {title && (
              <PrimitiveFlyoutTitle className={classNames.title}>
                {title}
              </PrimitiveFlyoutTitle>
            )}
            <PrimitiveFlyoutDescription
              className={classNames.description}
              asChild
            >
              {children}
            </PrimitiveFlyoutDescription>

            <PrimitiveFlyoutCloseTrigger
              onClick={() => setIsOpen(false)}
              className={classNames.closeTrigger}
            >
              <Icon className={classNames.closeTriggerIcon}>
                <CloseIcon />
              </Icon>
            </PrimitiveFlyoutCloseTrigger>
          </PrimitiveFlyoutContent>
        </PrimitiveFlyoutPositioner>
      </Portal>
    </PrimitiveFlyout>
  );
};

export default Flyout;
