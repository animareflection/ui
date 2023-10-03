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

import type { ComponentProps } from "react";

/**
 * Core UI drawer primitives.
 */
export type PrimitiveDrawerProps = ComponentProps<typeof PrimitiveDrawer>;
const PrimitiveDrawer = panda(Dialog);

export type PrimitiveDrawerTriggerProps = ComponentProps<
  typeof PrimitiveDrawerTrigger
>;
export const PrimitiveDrawerTrigger = panda(DialogTrigger);

export type PrimitiveDrawerBackdropProps = ComponentProps<
  typeof PrimitiveDrawerBackdrop
>;
export const PrimitiveDrawerBackdrop = panda(DialogBackdrop);

export type PrimitiveDrawerContainerProps = ComponentProps<
  typeof PrimitiveDrawerContainer
>;
export const PrimitiveDrawerContainer = panda(DialogContainer);

export type PrimitiveDrawerContentProps = ComponentProps<
  typeof PrimitiveDrawerContent
>;
export const PrimitiveDrawerContent = panda(DialogContent);

export type PrimitiveDrawerCloseTriggerProps = ComponentProps<
  typeof PrimitiveDrawerCloseTrigger
>;
export const PrimitiveDrawerCloseTrigger = panda(DialogCloseTrigger);

export type PrimitiveDrawerTitleProps = ComponentProps<
  typeof PrimitiveDrawerTitle
>;
export const PrimitiveDrawerTitle = panda(DialogTitle);

export type PrimitiveDrawerDescriptionProps = ComponentProps<
  typeof PrimitiveDrawerDescription
>;
export const PrimitiveDrawerDescription = panda(DialogDescription);

export default PrimitiveDrawer;
