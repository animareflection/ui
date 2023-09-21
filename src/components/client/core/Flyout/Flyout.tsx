import { Portal } from "@ark-ui/react";
import { useState } from "react";
import { FiX as CloseIcon } from "react-icons/fi";

import Icon from "components/client/core/Icon/Icon";
import {
  Flyout as PrimitiveFlyout,
  FlyoutArrow,
  FlyoutArrowTip,
  FlyoutCloseTrigger,
  FlyoutContent,
  FlyoutDescription,
  FlyoutPositioner,
  FlyoutTitle,
  FlyoutTrigger,
} from "components/primitives";
import { flyout } from "generated/panda/recipes";
import { useIsMounted } from "lib/hooks";

import type { FlyoutProps } from "components/primitives";
import type { ReactNode } from "react";

export interface Props extends FlyoutProps {
  trigger: ReactNode;
  title?: ReactNode;
  children: ReactNode;
}

/**
 * Core UI flyout.
 */
const Flyout = ({ trigger, title, children, ...rest }: Props) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const classNames = flyout();

  const isMounted = useIsMounted();

  if (!isMounted) return null;

  return (
    <PrimitiveFlyout
      open={isOpen}
      onClose={() => setIsOpen(false)}
      portalled
      {...rest}
    >
      <FlyoutTrigger asChild onClick={() => setIsOpen(!isOpen)}>
        {trigger}
      </FlyoutTrigger>

      <Portal>
        <FlyoutPositioner className={classNames.positioner}>
          <FlyoutContent className={classNames.content}>
            <FlyoutArrow className={classNames.arrow}>
              <FlyoutArrowTip className={classNames.arrowTip} />
            </FlyoutArrow>
            {title && (
              <FlyoutTitle className={classNames.title}>{title}</FlyoutTitle>
            )}
            <FlyoutDescription className={classNames.description}>
              {children}
            </FlyoutDescription>

            <FlyoutCloseTrigger
              onClick={() => setIsOpen(false)}
              className={classNames.closeTrigger}
            >
              <Icon as={CloseIcon} className={classNames.closeTriggerIcon} />
            </FlyoutCloseTrigger>
          </FlyoutContent>
        </FlyoutPositioner>
      </Portal>
    </PrimitiveFlyout>
  );
};

export default Flyout;
