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

// prettier-ignore
import type { DialogProps } from "@ark-ui/react";
import type { HTMLPandaProps } from "generated/panda/jsx";

const modalRecipe = sva({
  slots: [
    "backdrop",
    "container",
    "content",
    "title",
    "description",
    "body",
    "closeTrigger",
  ],
  base: {
    backdrop: {
      backdropFilter: "blur(4px)",
      background: {
        base: "rgba(250, 250, 250, 0.8)",
        _dark: "rgba(10, 10, 10, 0.8)",
      },
      inset: "0",
      position: "fixed",
      zIndex: "overlay",
    },
    container: {
      alignItems: "center",
      display: "flex",
      inset: "0",
      justifyContent: "center",
      position: "fixed",
      zIndex: "modal",
    },
    content: {
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
    title: {
      fontWeight: "semibold",
      textStyle: "lg",
    },
    description: {
      color: "gray.400",
      textStyle: "sm",
    },
    body: {
      display: "flex",
      flexDirection: "column",
    },
    closeTrigger: {
      display: "flex",
    },
  },
});

const modalClasses = modalRecipe();

type Props = HTMLPandaProps<"div">;

const Modal = ({ children, ...rest }: DialogProps) => {
  return <Dialog {...rest}>{children}</Dialog>;
};

export const ModalTrigger = ({ children, ...rest }: Props) => (
  <DialogTrigger asChild>
    <panda.div {...rest}>{children}</panda.div>
  </DialogTrigger>
);

export const ModalPortal = ({ children, ...rest }: Props) => (
  <Portal {...rest}>{children}</Portal>
);

export const ModalBackdrop = ({ ...rest }: Props) => (
  <DialogBackdrop asChild>
    <panda.div className={modalClasses.backdrop} {...rest} />
  </DialogBackdrop>
);

export const ModalContainer = ({ children, ...rest }: Props) => {
  return (
    <DialogContainer asChild>
      <panda.div className={modalClasses.container} {...rest}>
        {children}
      </panda.div>
    </DialogContainer>
  );
};

export const ModalContent = ({ children, ...rest }: Props) => {
  return (
    <DialogContent lazyMount unmountOnExit asChild>
      <panda.div className={modalClasses.content} {...rest}>
        {children}
      </panda.div>
    </DialogContent>
  );
};

export const ModalCloseTrigger = ({ children, ...rest }: Props) => (
  <DialogCloseTrigger asChild>
    <panda.div className={modalClasses.closeTrigger} {...rest}>
      {children}
    </panda.div>
  </DialogCloseTrigger>
);

export const ModalTitle = ({ children, ...rest }: Props) => (
  <DialogTitle asChild>
    <panda.div className={modalClasses.title} {...rest}>
      {children}
    </panda.div>
  </DialogTitle>
);

export const ModalDescription = ({ children, ...rest }: Props) => (
  <DialogDescription asChild>
    <panda.div className={modalClasses.description} {...rest}>
      {children}
    </panda.div>
  </DialogDescription>
);

export const ModalBody = ({ children, ...rest }: Props) => (
  <panda.div className={modalClasses.body} {...rest}>
    {children}
  </panda.div>
);

export type {
  DialogProps as ModalProps,
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
