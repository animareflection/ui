import {
  Dialog,
  DialogBackdrop,
  DialogCloseTrigger,
  DialogContainer,
  DialogContent,
  DialogDescription,
  DialogTitle,
  DialogTrigger,
} from "@ark-ui/react";

import { panda } from "generated/panda/jsx";

import type {
  DialogBackdropProps,
  DialogCloseTriggerProps,
  DialogContainerProps,
  DialogContentProps,
  DialogDescriptionProps,
  DialogProps,
  DialogTitleProps,
  DialogTriggerProps,
} from "@ark-ui/react";

/**
 * Core UI modal primitives.
 */
export type ModalProps = DialogProps;
const Modal = panda(Dialog);

export type ModalTriggerProps = DialogTriggerProps;
export const ModalTrigger = panda(DialogTrigger);

export type ModalBackdropProps = DialogBackdropProps;
export const ModalBackdrop = panda(DialogBackdrop);

export type ModalContainerProps = DialogContainerProps;
export const ModalContainer = panda(DialogContainer);

export type ModalContentProps = DialogContentProps;
export const ModalContent = panda(DialogContent);

export type ModalCloseTriggerProps = DialogCloseTriggerProps;
export const ModalCloseTrigger = panda(DialogCloseTrigger);

export type ModalTitleProps = DialogTitleProps;
export const ModalTitle = panda(DialogTitle);

export type ModalDescriptionProps = DialogDescriptionProps;
export const ModalDescription = panda(DialogDescription);

export default Modal;
