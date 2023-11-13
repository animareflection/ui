import { Portal } from "@ark-ui/react";
import { FiX as CloseIcon } from "react-icons/fi";

import Icon from "components/core/Icon/Icon";
import {
  PrimitiveModal,
  PrimitiveModalBackdrop,
  PrimitiveModalCloseTrigger,
  PrimitiveModalContent,
  PrimitiveModalDescription,
  PrimitiveModalPositioner,
  PrimitiveModalTitle,
  PrimitiveModalTrigger,
} from "components/primitives";
import { modal } from "generated/panda/recipes";
import { useIsClient } from "lib/hooks";

import type { PrimitiveModalProps } from "components/primitives";
import type { ReactNode, RefObject } from "react";

export interface Props extends PrimitiveModalProps {
  trigger?: ReactNode;
  title?: string;
  description?: string;
  containerRef?: RefObject<HTMLElement>;
}

/**
 * Core UI modal.
 */
const Modal = ({
  children,
  trigger,
  title,
  description,
  containerRef,
  ...rest
}: Props) => {
  const classNames = modal();

  const isClient = useIsClient();

  if (!isClient) return null;

  return (
    <PrimitiveModal lazyMount unmountOnExit {...rest}>
      {(ctx) => (
        <>
          {trigger && (
            <PrimitiveModalTrigger className={classNames.trigger}>
              {trigger}
            </PrimitiveModalTrigger>
          )}

          <Portal container={containerRef}>
            <PrimitiveModalBackdrop className={classNames.backdrop} />
            <PrimitiveModalPositioner className={classNames.positioner}>
              <PrimitiveModalContent className={classNames.content}>
                {title && (
                  <PrimitiveModalTitle className={classNames.title}>
                    {title}
                  </PrimitiveModalTitle>
                )}
                {description && (
                  <PrimitiveModalDescription className={classNames.description}>
                    {description}
                  </PrimitiveModalDescription>
                )}

                {/* forward nested context/state if utilized, otherwise directly render children */}
                {typeof children === "function" ? children(ctx) : children}

                <PrimitiveModalCloseTrigger className={classNames.closeTrigger}>
                  <Icon color="fg.default">
                    <CloseIcon />
                  </Icon>
                </PrimitiveModalCloseTrigger>
              </PrimitiveModalContent>
            </PrimitiveModalPositioner>
          </Portal>
        </>
      )}
    </PrimitiveModal>
  );
};

export default Modal;
