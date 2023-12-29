import {
  NumberInput,
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

import type { PandaComponent } from "generated/panda/types/jsx";
import type { ComponentProps } from "react";

const { withProvider, withContext } = createStyleContext(numberInput);

/**
 * Core UI number input primitives.
 */
export type PrimitiveNumberInputProps = ComponentProps<
  typeof PrimitiveNumberInput
>;
const PrimitiveNumberInput: PandaComponent<typeof NumberInput> = withProvider(
  panda(NumberInput),
  "root",
);

export type PrimitiveNumberInputControlProps = ComponentProps<
  typeof PrimitiveNumberInputControl
>;
export const PrimitiveNumberInputControl = withContext(
  panda(NumberInputControl),
  "control",
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
