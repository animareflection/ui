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

  const classNames = flyout();

  const isClient = useIsClient();

  if (!isClient) return null;

  return (
    <PrimitiveFlyout open={isOpen} onOpenChange={onToggle} {...rest}>
      {trigger && (
        <PrimitiveFlyoutTrigger
          asChild
          className={classNames.trigger}
          onClick={onToggle}
        >
          {trigger}
        </PrimitiveFlyoutTrigger>
      )}

      <PrimitiveFlyoutPositioner className={classNames.positioner}>
        <PrimitiveFlyoutContent
          className={classNames.content}
          {...contentProps}
        >
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
            onClick={onClose}
            className={classNames.closeTrigger}
          >
            <Icon color="fg.default">
              <CloseIcon />
            </Icon>
          </PrimitiveFlyoutCloseTrigger>
        </PrimitiveFlyoutContent>
      </PrimitiveFlyoutPositioner>
    </PrimitiveFlyout>
  );
};

export default Flyout;
