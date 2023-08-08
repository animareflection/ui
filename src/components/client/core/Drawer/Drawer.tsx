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
import { drawer } from "generated/panda/recipes";

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
import type { DrawerVariantProps } from "generated/panda/recipes";

export type DrawerProps = DialogProps;
const Drawer = panda(Dialog);

export type DrawerTriggerProps = DialogTriggerProps;
export const DrawerTrigger = panda(DialogTrigger);

export type DrawerBackdropProps = DrawerVariantProps & DialogBackdropProps;
export const DrawerBackdrop = panda(DialogBackdrop, drawer);

export type DrawerContainerProps = DrawerVariantProps & DialogContainerProps;
export const DrawerContainer = panda(DialogContainer, drawer);

export type DrawerContentProps = DialogContentProps;
export const DrawerContent = panda(DialogContent, drawer);

export type DrawerCloseTriggerProps = DialogCloseTriggerProps;
export const DrawerCloseTrigger = panda(DialogCloseTrigger);

export type DrawerTitleProps = DialogTitleProps;
export const DrawerTitle = panda(DialogTitle);

export type DrawerDescriptionProps = DialogDescriptionProps;
export const DrawerDescription = panda(DialogDescription);

export default Drawer;
