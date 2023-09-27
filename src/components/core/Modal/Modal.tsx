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

import type { PrimitiveModalProps } from "components/primitives";
import type { ReactNode } from "react";

export interface Props extends PrimitiveModalProps {
  trigger: ReactNode;
  title?: string;
  description?: string;
}

/**
 * Core UI modal.
 */
const Modal = ({ children, trigger, title, description, ...rest }: Props) => {
  const classNames = modal();

  return (
    <PrimitiveModal {...rest}>
      {(ctx) => (
        <>
          <PrimitiveModalTrigger className={classNames.trigger}>
            {trigger}
          </PrimitiveModalTrigger>
          <Portal>
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
