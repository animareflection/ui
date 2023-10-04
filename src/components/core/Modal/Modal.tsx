import { Portal } from "@ark-ui/react";
import { FiX as CloseIcon } from "react-icons/fi";

import Icon from "components/core/Icon/Icon";
import {
  PrimitiveModal,
  PrimitiveModalBackdrop,
  PrimitiveModalCloseTrigger,
  PrimitiveModalContainer,
  PrimitiveModalContent,
  PrimitiveModalDescription,
  PrimitiveModalTitle,
  PrimitiveModalTrigger,
} from "components/primitives";
import { modal } from "generated/panda/recipes";
import { useIsMounted } from "lib/hooks";

import type { PrimitiveModalProps } from "components/primitives";
import type { ReactNode, RefObject } from "react";

export interface Props extends PrimitiveModalProps {
  trigger?: ReactNode;
  title?: string;
  description?: string;
  targetRef?: RefObject<HTMLElement>;
}

/**
 * Core UI modal.
 */
const Modal = ({
  children,
  trigger,
  title,
  description,
  targetRef,
  ...rest
}: Props) => {
  const classNames = modal();

  const isMounted = useIsMounted();

  if (!isMounted) return null;

  return (
    <PrimitiveModal {...rest}>
      {(ctx) => (
        <>
          {trigger && (
            <PrimitiveModalTrigger className={classNames.trigger}>
              {trigger}
            </PrimitiveModalTrigger>
          )}

          <Portal target={targetRef}>
            <PrimitiveModalBackdrop className={classNames.backdrop} />
            <PrimitiveModalContainer className={classNames.container}>
              <PrimitiveModalContent
                lazyMount
                unmountOnExit
                className={classNames.content}
              >
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
            </PrimitiveModalContainer>
          </Portal>
        </>
      )}
    </PrimitiveModal>
  );
};

export default Modal;
