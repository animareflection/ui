/**
 * @file Drawer primitives.
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
import { drawer } from "generated/panda/recipes";
import { createStyleContext } from "lib/util";

import type { ComponentProps } from "react";

const { withProvider, withContext } = createStyleContext(drawer);

export type PrimitiveDrawerProps = ComponentProps<typeof PrimitiveDrawer>;
const PrimitiveDrawer = withProvider(panda(DialogRoot), "root");

export type PrimitiveDrawerTriggerProps = ComponentProps<
  typeof PrimitiveDrawerTrigger
>;
export const PrimitiveDrawerTrigger = withContext(
  panda(DialogTrigger),
  "trigger",
);

export type PrimitiveDrawerBackdropProps = ComponentProps<
  typeof PrimitiveDrawerBackdrop
>;
export const PrimitiveDrawerBackdrop = withContext(
  panda(DialogBackdrop),
  "backdrop",
);

export type PrimitiveDrawerPositionerProps = ComponentProps<
  typeof PrimitiveDrawerPositioner
>;
export const PrimitiveDrawerPositioner = withContext(
  panda(DialogPositioner),
  "positioner",
);

export type PrimitiveDrawerContentProps = ComponentProps<
  typeof PrimitiveDrawerContent
>;
export const PrimitiveDrawerContent = withContext(
  panda(DialogContent),
  "content",
);

export type PrimitiveDrawerCloseTriggerProps = ComponentProps<
  typeof PrimitiveDrawerCloseTrigger
>;
export const PrimitiveDrawerCloseTrigger = withContext(
  panda(DialogCloseTrigger),
  "closeTrigger",
);

export type PrimitiveDrawerTitleProps = ComponentProps<
  typeof PrimitiveDrawerTitle
>;
export const PrimitiveDrawerTitle = withContext(panda(DialogTitle), "title");

export type PrimitiveDrawerDescriptionProps = ComponentProps<
  typeof PrimitiveDrawerDescription
>;
export const PrimitiveDrawerDescription = withContext(
  panda(DialogDescription),
  "description",
);

export default PrimitiveDrawer;
