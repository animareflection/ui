/**
 * @file Number input primitives.
 */
import {
  NumberInputRoot,
  NumberInputControl,
  NumberInputDecrementTrigger,
  NumberInputIncrementTrigger,
  NumberInputInput,
  NumberInputLabel,
  NumberInputScrubber,
} from "@ark-ui/react";

import { panda } from "generated/panda/jsx";
import { numberInput } from "generated/panda/recipes";
import { createStyleContext } from "lib/util";

import type { ComponentProps } from "react";

const { withProvider, withContext } = createStyleContext(numberInput);

export type PrimitiveNumberInputProps = ComponentProps<
  typeof PrimitiveNumberInput
>;
const PrimitiveNumberInput = withProvider(panda(NumberInputRoot), "root");

export type PrimitiveNumberInputControlProps = ComponentProps<
  typeof PrimitiveNumberInputControl
>;
export const PrimitiveNumberInputControl = withContext(
  panda(NumberInputControl),
  "control",
);

export type PrimitiveNumberInputAddonProps = ComponentProps<
  typeof PrimitiveNumberInputAddon
>;
export const PrimitiveNumberInputAddon = withContext(panda.div, "addon");

export type PrimitiveNumberInputLeftElementProps = ComponentProps<
  typeof PrimitiveNumberInputLeftElement
>;
export const PrimitiveNumberInputLeftElement = withContext(
  panda.div,
  "leftElement",
);

export type PrimitiveNumberInputRightElementProps = ComponentProps<
  typeof PrimitiveNumberInputRightElement
>;
export const PrimitiveNumberInputRightElement = withContext(
  panda.div,
  "rightElement",
);

export type PrimitiveNumberInputDecrementTriggerProps = ComponentProps<
  typeof PrimitiveNumberInputDecrementTrigger
>;
export const PrimitiveNumberInputDecrementTrigger = withContext(
  panda(NumberInputDecrementTrigger),
  "decrementTrigger",
);

export type PrimitiveNumberInputIncrementTriggerProps = ComponentProps<
  typeof PrimitiveNumberInputIncrementTrigger
>;
export const PrimitiveNumberInputIncrementTrigger = withContext(
  panda(NumberInputIncrementTrigger),
  "incrementTrigger",
);

export type PrimitiveNumberInputInputProps = ComponentProps<
  typeof PrimitiveNumberInputInput
>;
export const PrimitiveNumberInputInput = withContext(
  panda(NumberInputInput),
  "input",
);

export type PrimitiveNumberInputLabelProps = ComponentProps<
  typeof PrimitiveNumberInputLabel
>;
export const PrimitiveNumberInputLabel = withContext(
  panda(NumberInputLabel),
  "label",
);

export type PrimitiveNumberInputScrubberProps = ComponentProps<
  typeof PrimitiveNumberInputScrubber
>;
export const PrimitiveNumberInputScrubber = withContext(
  panda(NumberInputScrubber),
  "scrubber",
);

export default PrimitiveNumberInput;
