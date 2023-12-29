import { ark } from "@ark-ui/react";

import { panda } from "generated/panda/jsx";
import { input } from "generated/panda/recipes";
import { createStyleContext } from "lib/util";

import type { ComponentProps } from "react";

const { withProvider, withContext } = createStyleContext(input);

export type PrimitiveInputProps = ComponentProps<typeof PrimitiveInput>;
const PrimitiveInput = withProvider(panda.div, "root");

export type PrimitiveInputLabelProps = ComponentProps<
  typeof PrimitiveInputLabel
>;
export const PrimitiveInputLabel = withContext(panda(ark.label), "label");

export type PrimitiveInputAddonProps = ComponentProps<
  typeof PrimitiveInputAddon
>;
export const PrimitiveInputAddon = withContext(panda.div, "addon");

export type PrimitiveInputLeftElementProps = ComponentProps<
  typeof PrimitiveInputLeftElement
>;
export const PrimitiveInputLeftElement = withContext(panda.div, "leftElement");

export type PrimitiveInputInputProps = ComponentProps<
  typeof PrimitiveInputInput
>;
export const PrimitiveInputInput = withContext(panda(ark.input), "input");

export type PrimitiveInputRightElementProps = ComponentProps<
  typeof PrimitiveInputRightElement
>;
export const PrimitiveInputRightElement = withContext(
  panda.div,
  "rightElement",
);

export default PrimitiveInput;
