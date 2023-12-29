import {
  Dialog,
  DialogBackdrop,
  DialogCloseTrigger,
  DialogPositioner,
  DialogContent,
  DialogDescription,
  DialogTitle,
  DialogTrigger,
} from "@ark-ui/react";

import { panda } from "generated/panda/jsx";
import { modal } from "generated/panda/recipes";
import { createStyleContext } from "lib/util";

import type { ComponentProps } from "react";

const { withProvider, withContext } = createStyleContext(modal);

/**
 * Core UI modal primitives.
 */
export type PrimitiveModalProps = ComponentProps<typeof PrimitiveModal>;
const PrimitiveModal = withProvider(panda(Dialog), "root");

export type PrimitiveModalTriggerProps = ComponentProps<
  typeof PrimitiveModalTrigger
>;
export const PrimitiveModalTrigger = panda(DialogTrigger);

export type PrimitiveModalBackdropProps = ComponentProps<
  typeof PrimitiveModalBackdrop
>;
export const PrimitiveModalBackdrop = panda(DialogBackdrop);

export type PrimitiveModalPositionerProps = ComponentProps<
  typeof PrimitiveModalPositioner
>;
export const PrimitiveModalPositioner = panda(DialogPositioner);

export type PrimitiveModalContentProps = ComponentProps<
  typeof PrimitiveModalContent
>;
export const PrimitiveModalContent = panda(DialogContent);

export type PrimitiveModalCloseTriggerProps = ComponentProps<
  typeof PrimitiveModalCloseTrigger
>;
export const PrimitiveModalCloseTrigger = panda(DialogCloseTrigger);

export type PrimitiveModalTitleProps = ComponentProps<
  typeof PrimitiveModalTitle
>;
export const PrimitiveModalTitle = panda(DialogTitle);

export type PrimitiveModalDescriptionProps = ComponentProps<
  typeof PrimitiveModalDescription
>;
export const PrimitiveModalDescription = panda(DialogDescription);

export default PrimitiveModal;
