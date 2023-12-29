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
import { drawer } from "generated/panda/recipes";
import { createStyleContext } from "lib/util";

import type { ComponentProps } from "react";

const { withProvider, withContext } = createStyleContext(drawer);

/**
 * Core UI drawer primitives.
 */
export type PrimitiveDrawerProps = ComponentProps<typeof PrimitiveDrawer>;
const PrimitiveDrawer = withProvider(panda(Dialog), "root");

export type PrimitiveDrawerTriggerProps = ComponentProps<
  typeof PrimitiveDrawerTrigger
>;
export const PrimitiveDrawerTrigger = panda(DialogTrigger);

export type PrimitiveDrawerBackdropProps = ComponentProps<
  typeof PrimitiveDrawerBackdrop
>;
export const PrimitiveDrawerBackdrop = panda(DialogBackdrop);

export type PrimitiveDrawerPositionerProps = ComponentProps<
  typeof PrimitiveDrawerPositioner
>;
export const PrimitiveDrawerPositioner = panda(DialogPositioner);

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
