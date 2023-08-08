import {
  Dialog,
  DialogBackdrop,
  // DialogCloseTrigger,
  DialogContainer,
  DialogContent,
  DialogDescription,
  // DialogPresence,
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
    // "modal",
    "modalBackdrop",
    // "modalCloseTrigger",
    "modalContainer",
    "modalContent",
    "modalDescription",
    "modalTitle",
    // "modalTrigger",
  ],
  base: {
    modalBackdrop: {
      backdropFilter: "blur(4px)",
      background: {
        base: "rgba(250, 250, 250, 0.8)",
        _dark: "rgba(10, 10, 10, 0.8)",
      },
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
      background: "white",
      borderRadius: "lg",
      boxShadow: "lg",
      minW: "sm",
      position: "relative",
      padding: 4,
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
      <DialogTrigger>Open Dialog</DialogTrigger>
      <Portal>
        {modalBackdrop}
        {modalContainer}
      </Portal>
    </Dialog>
  );
};

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
  const modalTitle = getChildrenOnDisplayName({
    children,
    displayName: "ModalTitle",
  });
  const modalDescription = getChildrenOnDisplayName({
    children,
    displayName: "ModalDescription",
  });

  return (
    <DialogContent asChild>
      <panda.div className={modalClasses.modalContent} {...rest}>
        {modalTitle}
        {modalDescription}
      </panda.div>
    </DialogContent>
  );
};

ModalContent.displayName = "ModalContent";

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
  Props as ModalBackdropProps,
  Props as ModalContainerProps,
  Props as ModalContentProps,
  Props as ModalTitleProps,
  Props as ModalDescriptionProps,
};

export default Modal;
