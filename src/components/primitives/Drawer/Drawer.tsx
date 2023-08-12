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
export type DrawerProps = DialogProps;
const Drawer = panda(Dialog);

export type DrawerTriggerProps = DialogTriggerProps;
export const DrawerTrigger = panda(DialogTrigger);

export type DrawerBackdropProps = DialogBackdropProps;
export const DrawerBackdrop = panda(DialogBackdrop);

export type DrawerContainerProps = DialogContainerProps;
export const DrawerContainer = panda(DialogContainer);

export type DrawerContentProps = DialogContentProps;
export const DrawerContent = panda(DialogContent);

export type DrawerCloseTriggerProps = DialogCloseTriggerProps;
export const DrawerCloseTrigger = panda(DialogCloseTrigger);

export type DrawerTitleProps = DialogTitleProps;
export const DrawerTitle = panda(DialogTitle);

export type DrawerDescriptionProps = DialogDescriptionProps;
export const DrawerDescription = panda(DialogDescription);

export default Drawer;
