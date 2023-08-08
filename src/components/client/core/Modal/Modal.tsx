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
    "modalCloseTrigger",
    "modalContainer",
    "modalContent",
    "modalDescription",
    "modalTitle",
    "modalTrigger",
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
    modalCloseTrigger: {
      cursor: "pointer",
      position: "absolute",
      top: 2,
      right: 2,
      m: 1,
      p: 1,
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
      background: "white",
      borderRadius: "lg",
      boxShadow: "lg",
      minW: "sm",
      position: "relative",
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
    <panda.div className={modalClasses.modalTrigger} {...rest}>
      {children}
    </panda.div>
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

  return (
    <DialogContent lazyMount unmountOnExit asChild>
      <panda.div className={modalClasses.modalContent} {...rest}>
        {modalCloseTrigger}
        {modalTitle}
        {modalDescription}
      </panda.div>
    </DialogContent>
  );
};

ModalContent.displayName = "ModalContent";

export const ModalCloseTrigger = ({ children, ...rest }: Props) => (
  <DialogCloseTrigger asChild>
    <panda.div className={modalClasses.modalCloseTrigger} {...rest}>
      {children}
    </panda.div>
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

export type {
  Props as ModalProps,
  Props as ModalTriggerProps,
  Props as ModalBackdropProps,
  Props as ModalCloseTriggerProps,
  Props as ModalContainerProps,
  Props as ModalContentProps,
  Props as ModalTitleProps,
  Props as ModalDescriptionProps,
};

export default Modal;
