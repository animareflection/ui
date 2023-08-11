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
import { useStyleContext } from "lib/hooks";

import type {
  DialogProps,
  DialogBackdropProps,
  DialogCloseTriggerProps,
  DialogContainerProps,
  DialogContentProps,
  DialogDescriptionProps,
  DialogTitleProps,
  DialogTriggerProps,
} from "@ark-ui/react";
import type { DrawerVariantProps } from "generated/panda/recipes";

const { withProvider, withContext } = useStyleContext(drawer);

/**
 * Core UI drawer primitives.
 */
export type DrawerProps = DialogProps & DrawerVariantProps;
export type DrawerBackdropProps = DialogBackdropProps;
export type DrawerCloseTriggerProps = DialogCloseTriggerProps;
export type DrawerContainerProps = DialogContainerProps;
export type DrawerContentProps = DialogContentProps;
export type DrawerDescriptionProps = DialogDescriptionProps;
export type DrawerTitleProps = DialogTitleProps;
export type DrawerTriggerProps = DialogTriggerProps;

const DrawerRoot = withProvider(panda(Dialog), "root");
export const DrawerBackdrop = withContext(panda(DialogBackdrop), "backdrop");
export const DrawerCloseTrigger = withContext(
  panda(DialogCloseTrigger),
  "closeTrigger",
);
export const DrawerContainer = withContext(panda(DialogContainer), "container");
export const DrawerContent = withContext(panda(DialogContent), "content");
export const DrawerDescription = withContext(
  panda(DialogDescription),
  "description",
);
export const DrawerTitle = withContext(panda(DialogTitle), "title");
export const DrawerTrigger = withContext(panda(DialogTrigger), "trigger");

export const Drawer = Object.assign(DrawerRoot, {
  Root: DrawerRoot,
  Backdrop: DrawerBackdrop,
  CloseTrigger: DrawerCloseTrigger,
  Container: DrawerContainer,
  Content: DrawerContent,
  Description: DrawerDescription,
  Title: DrawerTitle,
  Trigger: DrawerTrigger,
});

export default Drawer;
