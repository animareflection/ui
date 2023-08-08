import {
  Dialog,
  DialogBackdrop,
  DialogCloseTrigger,
  DialogContainer,
  DialogContent,
  DialogDescription,
  DialogTitle,
  DialogTrigger,
  Portal,
} from "@ark-ui/react";

import { sva } from "generated/panda/css";
import { panda } from "generated/panda/jsx";
import { getChildrenOnDisplayName } from "lib/utils";

import type { HTMLPandaProps } from "generated/panda/jsx";

const modalRecipe = sva({
  slots: [
    "modalBackdrop",
    "modalContainer",
    "modalContent",
    "modalTitle",
    "modalDescription",
    "modalBody",
  ],
  base: {
    modalBackdrop: {
      backdropFilter: "blur(4px)",
      background: {
        base: "rgba(250, 250, 250, 0.8)",
        _dark: "rgba(10, 10, 10, 0.8)",
      },
      opacity: 0.5,
      inset: "0",
      position: "fixed",
      zIndex: "overlay",
    },
    modalContainer: {
      alignItems: "center",
      display: "flex",
      inset: "0",
      justifyContent: "center",
      position: "fixed",
      zIndex: "modal",
    },
    modalContent: {
      display: "flex",
      flexDirection: "column",
      gap: 1,
      background: "white",
      borderRadius: "lg",
      boxShadow: "lg",
      minW: "sm",
      position: "relative",
      margin: 4,
      padding: 4,
      _focus: {
        outline: "none",
      },
    },
    modalTitle: {
      fontWeight: "semibold",
      textStyle: "lg",
    },
    modalDescription: {
      color: "gray.400",
      textStyle: "sm",
    },
    modalBody: {
      display: "flex",
      flexDirection: "column",
    },
  },
});

const modalClasses = modalRecipe();

type Props = HTMLPandaProps<"div">;

const Modal = ({ children }: Props) => {
  const modalTrigger = getChildrenOnDisplayName({
    children,
    displayName: "ModalTrigger",
  });
  const modalBackdrop = getChildrenOnDisplayName({
    children,
    displayName: "ModalBackdrop",
  });
  const modalContainer = getChildrenOnDisplayName({
    children,
    displayName: "ModalContainer",
  });

  return (
    <Dialog>
      {modalTrigger}
      <Portal>
        {modalBackdrop}
        {modalContainer}
      </Portal>
    </Dialog>
  );
};

export const ModalTrigger = ({ children, ...rest }: Props) => (
  <DialogTrigger asChild>
    <panda.div {...rest}>{children}</panda.div>
  </DialogTrigger>
);

ModalTrigger.displayName = "ModalTrigger";

export const ModalBackdrop = ({ ...rest }: Props) => (
  <DialogBackdrop asChild>
    <panda.div className={modalClasses.modalBackdrop} {...rest} />
  </DialogBackdrop>
);

ModalBackdrop.displayName = "ModalBackdrop";

export const ModalContainer = ({ children, ...rest }: Props) => {
  const modalContent = getChildrenOnDisplayName({
    children,
    displayName: "ModalContent",
  });

  return (
    <DialogContainer asChild>
      <panda.div className={modalClasses.modalContainer} {...rest}>
        {modalContent}
      </panda.div>
    </DialogContainer>
  );
};

ModalContainer.displayName = "ModalContainer";

export const ModalContent = ({ children, ...rest }: Props) => {
  const modalCloseTrigger = getChildrenOnDisplayName({
    children,
    displayName: "ModalCloseTrigger",
  });
  const modalTitle = getChildrenOnDisplayName({
    children,
    displayName: "ModalTitle",
  });
  const modalDescription = getChildrenOnDisplayName({
    children,
    displayName: "ModalDescription",
  });
  const modalBody = getChildrenOnDisplayName({
    children,
    displayName: "ModalBody",
  });

  return (
    <DialogContent lazyMount unmountOnExit asChild>
      <panda.div className={modalClasses.modalContent} {...rest}>
        {modalCloseTrigger}
        {modalTitle}
        {modalDescription}
        {modalBody}
      </panda.div>
    </DialogContent>
  );
};

ModalContent.displayName = "ModalContent";

export const ModalCloseTrigger = ({ children, ...rest }: Props) => (
  <DialogCloseTrigger asChild>
    <panda.div {...rest}>{children}</panda.div>
  </DialogCloseTrigger>
);

ModalCloseTrigger.displayName = "ModalCloseTrigger";

export const ModalTitle = ({ children, ...rest }: Props) => (
  <DialogTitle asChild>
    <panda.div className={modalClasses.modalTitle} {...rest}>
      {children}
    </panda.div>
  </DialogTitle>
);

ModalTitle.displayName = "ModalTitle";

export const ModalDescription = ({ children, ...rest }: Props) => (
  <DialogDescription asChild>
    <panda.div className={modalClasses.modalDescription} {...rest}>
      {children}
    </panda.div>
  </DialogDescription>
);

ModalDescription.displayName = "ModalDescription";

export const ModalBody = ({ children, ...rest }: Props) => (
  <panda.div className={modalClasses.modalBody} {...rest}>
    {children}
  </panda.div>
);

ModalBody.displayName = "ModalBody";

export type {
  Props as ModalProps,
  Props as ModalTriggerProps,
  Props as ModalBackdropProps,
  Props as ModalCloseTriggerProps,
  Props as ModalContainerProps,
  Props as ModalContentProps,
  Props as ModalTitleProps,
  Props as ModalDescriptionProps,
  Props as ModalBodyProps,
};

export default Modal;
