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
import { useDisclosure, useIsClient } from "lib/hooks";

import type {
  PrimitiveFlyoutProps,
  PrimitiveFlyoutContentProps,
} from "components/primitives";
import type { ReactNode } from "react";

export interface Props extends PrimitiveFlyoutProps {
  trigger?: ReactNode;
  title?: ReactNode;
  contentProps?: PrimitiveFlyoutContentProps;
  children: ReactNode;
}

/**
 * Core UI flyout.
 */
const Flyout = ({ trigger, title, contentProps, children, ...rest }: Props) => {
  const { isOpen, onClose, onToggle } = useDisclosure();

  const isClient = useIsClient();

  if (!isClient) return null;

  return (
    <PrimitiveFlyout open={isOpen} onOpenChange={onToggle} {...rest}>
      {trigger && (
        <PrimitiveFlyoutTrigger asChild onClick={onToggle}>
          {trigger}
        </PrimitiveFlyoutTrigger>
      )}

      <PrimitiveFlyoutPositioner>
        <PrimitiveFlyoutContent {...contentProps}>
          <PrimitiveFlyoutArrow>
            <PrimitiveFlyoutArrowTip />
          </PrimitiveFlyoutArrow>
          {title && <PrimitiveFlyoutTitle>{title}</PrimitiveFlyoutTitle>}
          <PrimitiveFlyoutDescription asChild>
            {children}
          </PrimitiveFlyoutDescription>

          <PrimitiveFlyoutCloseTrigger onClick={onClose}>
            <Icon>
              <CloseIcon />
            </Icon>
          </PrimitiveFlyoutCloseTrigger>
        </PrimitiveFlyoutContent>
      </PrimitiveFlyoutPositioner>
    </PrimitiveFlyout>
  );
};

export default Flyout;
