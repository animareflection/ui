import { ark } from "@ark-ui/react";

import { panda } from "generated/panda/jsx";
import { textarea } from "generated/panda/recipes";
import { createStyleContext } from "lib/util";

import type { ComponentProps } from "react";

const { withProvider, withContext } = createStyleContext(textarea);

export type PrimitiveTextareaProps = ComponentProps<typeof PrimitiveTextarea>;
const PrimitiveTextarea = withProvider(panda.div, "root");

export type PrimitiveTextareaLabelProps = ComponentProps<
  typeof PrimitiveTextareaLabel
>;
export const PrimitiveTextareaLabel = withContext(panda(ark.label), "label");

export type PrimitiveTextareaTextareaProps = ComponentProps<
  typeof PrimitiveTextareaTextarea
>;
export const PrimitiveTextareaTextarea = withContext(
  panda(ark.textarea),
  "textarea",
);

export default PrimitiveTextarea;
