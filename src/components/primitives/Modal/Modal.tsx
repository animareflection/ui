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
export type PrimitiveModalProps = DialogProps;
const PrimitiveModal = panda(Dialog);

export type PrimitiveModalTriggerProps = DialogTriggerProps;
export const PrimitiveModalTrigger = panda(DialogTrigger);

export type PrimitiveModalBackdropProps = DialogBackdropProps;
export const PrimitiveModalBackdrop = panda(DialogBackdrop);

export type PrimitiveModalContainerProps = DialogContainerProps;
export const PrimitiveModalContainer = panda(DialogContainer);

export type PrimitiveModalContentProps = DialogContentProps;
export const PrimitiveModalContent = panda(DialogContent);

export type PrimitiveModalCloseTriggerProps = DialogCloseTriggerProps;
export const PrimitiveModalCloseTrigger = panda(DialogCloseTrigger);

export type PrimitiveModalTitleProps = DialogTitleProps;
export const PrimitiveModalTitle = panda(DialogTitle);

export type PrimitiveModalDescriptionProps = DialogDescriptionProps;
export const PrimitiveModalDescription = panda(DialogDescription);

export default PrimitiveModal;
