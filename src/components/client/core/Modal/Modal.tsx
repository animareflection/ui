import { Portal } from "@ark-ui/react";
import { FiX as CloseIcon } from "react-icons/fi";

import { recipe as modal } from "./Modal.recipe";
import { Button, Icon } from "components/client";
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

import type { ModalProps } from "components/primitives";
import type { ReactNode } from "react";

export interface Props extends ModalProps {
  trigger: ReactNode;
  title?: string;
  description?: string;
  children?: ReactNode;
}

/**
 * Core UI Modal.
 */
const Modal = ({ children, trigger, title, description, ...rest }: Props) => {
  const classNames = modal();

  return (
    <PrimitiveModal {...rest}>
      <ModalTrigger asChild>{trigger}</ModalTrigger>
      <Portal>
        <ModalBackdrop className={classNames.backdrop} />
        <ModalContainer className={classNames.container}>
          <ModalContent lazyMount unmountOnExit className={classNames.content}>
            {title && (
              <ModalTitle className={classNames.title}>{title}</ModalTitle>
            )}
            {description && (
              <ModalDescription className={classNames.description}>
                {description}
              </ModalDescription>
            )}
            {children}
            <ModalCloseTrigger
              pos="absolute"
              top={2}
              right={2}
              _focus={{
                outline: "none",
              }}
              asChild
            >
              <Button bgColor={{ base: "inherit", _hover: "#f5f5f5" }}>
                <Icon as={CloseIcon} color="black" />
              </Button>
            </ModalCloseTrigger>
          </ModalContent>
        </ModalContainer>
      </Portal>
    </PrimitiveModal>
  );
};

export default Modal;
