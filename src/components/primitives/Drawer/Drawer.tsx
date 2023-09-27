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
 * Core UI drawer primitives.
 */
export type PrimitiveDrawerProps = DialogProps;
const PrimitiveDrawer = panda(Dialog);

export type PrimitiveDrawerTriggerProps = DialogTriggerProps;
export const PrimitiveDrawerTrigger = panda(DialogTrigger);

export type PrimitiveDrawerBackdropProps = DialogBackdropProps;
export const PrimitiveDrawerBackdrop = panda(DialogBackdrop);

export type PrimitiveDrawerContainerProps = DialogContainerProps;
export const PrimitiveDrawerContainer = panda(DialogContainer);

export type PrimitiveDrawerContentProps = DialogContentProps;
export const PrimitiveDrawerContent = panda(DialogContent);

export type PrimitiveDrawerCloseTriggerProps = DialogCloseTriggerProps;
export const PrimitiveDrawerCloseTrigger = panda(DialogCloseTrigger);

export type PrimitiveDrawerTitleProps = DialogTitleProps;
export const PrimitiveDrawerTitle = panda(DialogTitle);

export type PrimitiveDrawerDescriptionProps = DialogDescriptionProps;
export const PrimitiveDrawerDescription = panda(DialogDescription);

export default PrimitiveDrawer;
