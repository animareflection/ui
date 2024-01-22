/**
 * @file Toast primitives.
 */
import { panda } from "generated/panda/jsx";
import { toast } from "generated/panda/recipes";
import { createStyleContext } from "lib/util";

import type { PandaComponent } from "generated/panda/types/jsx";
import type { ComponentProps } from "react";

const { withProvider, withContext } = createStyleContext(toast);

export type PrimitiveToastProps = ComponentProps<typeof PrimitiveToast>;
const PrimitiveToast: PandaComponent<typeof panda.div> = withProvider(
  panda.div,
  "root",
);

export type PrimitiveToastTitleProps = ComponentProps<
  typeof PrimitiveToastTitle
>;
export const PrimitiveToastTitle = withContext(panda.p, "title");

export type PrimitiveToastDescriptionProps = ComponentProps<
  typeof PrimitiveToastDescription
>;
export const PrimitiveToastDescription = withContext(panda.p, "description");

export type PrimitiveToastCloseProps = ComponentProps<
  typeof PrimitiveToastClose
>;
export const PrimitiveToastClose = withContext(panda.button, "closeTrigger");

export default PrimitiveToast;
