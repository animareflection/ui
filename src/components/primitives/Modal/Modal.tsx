/**
 * @file Modal primitives.
 */
import {
  DialogRoot,
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

export type PrimitiveModalProps = ComponentProps<typeof PrimitiveModal>;
const PrimitiveModal = withProvider(panda(DialogRoot), "root");

export type PrimitiveModalTriggerProps = ComponentProps<
  typeof PrimitiveModalTrigger
>;
export const PrimitiveModalTrigger = withContext(
  panda(DialogTrigger),
  "trigger",
);

export type PrimitiveModalBackdropProps = ComponentProps<
  typeof PrimitiveModalBackdrop
>;
export const PrimitiveModalBackdrop = withContext(
  panda(DialogBackdrop),
  "backdrop",
);

export type PrimitiveModalPositionerProps = ComponentProps<
  typeof PrimitiveModalPositioner
>;
export const PrimitiveModalPositioner = withContext(
  panda(DialogPositioner),
  "positioner",
);

export type PrimitiveModalContentProps = ComponentProps<
  typeof PrimitiveModalContent
>;
export const PrimitiveModalContent = withContext(
  panda(DialogContent),
  "content",
);

export type PrimitiveModalCloseTriggerProps = ComponentProps<
  typeof PrimitiveModalCloseTrigger
>;
export const PrimitiveModalCloseTrigger = withContext(
  panda(DialogCloseTrigger),
  "closeTrigger",
);

export type PrimitiveModalTitleProps = ComponentProps<
  typeof PrimitiveModalTitle
>;
export const PrimitiveModalTitle = withContext(panda(DialogTitle), "title");

export type PrimitiveModalDescriptionProps = ComponentProps<
  typeof PrimitiveModalDescription
>;
export const PrimitiveModalDescription = withContext(
  panda(DialogDescription),
  "description",
);

export default PrimitiveModal;
