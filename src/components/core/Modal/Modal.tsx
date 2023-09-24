import { Portal } from "@ark-ui/react";
import { FiX as CloseIcon } from "react-icons/fi";

import Button from "components/core/Button/Button";
import Icon from "components/core/Icon/Icon";
import {
  Modal as PrimitiveModal,
  ModalBackdrop,
  ModalCloseTrigger,
  ModalContainer,
  ModalContent,
  ModalDescription,
  ModalTitle,
  ModalTrigger,
} from "components/primitives";
import { modal } from "generated/panda/recipes";

import type { ModalProps } from "components/primitives";
import type { ReactNode } from "react";

export interface Props extends ModalProps {
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
          <ModalTrigger asChild>{trigger}</ModalTrigger>
          <Portal>
            <ModalBackdrop className={classNames.backdrop} />
            <ModalContainer className={classNames.container}>
              <ModalContent
                lazyMount
                unmountOnExit
                className={classNames.content}
              >
                {title && (
                  <ModalTitle className={classNames.title}>{title}</ModalTitle>
                )}
                {description && (
                  <ModalDescription className={classNames.description}>
                    {description}
                  </ModalDescription>
                )}

                {/* forward nested context/state if utilized, otherwise directly render children */}
                {typeof children === "function" ? children(ctx) : children}

                <ModalCloseTrigger asChild>
                  <Button
                    pos="absolute"
                    top={2}
                    right={2}
                    bgColor={{
                      base: "inherit",
                      _hover: "bg.subtle",
                    }}
                  >
                    <Icon color="fg.default">
                      <CloseIcon />
                    </Icon>
                  </Button>
                </ModalCloseTrigger>
              </ModalContent>
            </ModalContainer>
          </Portal>
        </>
      )}
    </PrimitiveModal>
  );
};

export default Modal;
