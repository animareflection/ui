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

import type { PandaComponent } from "generated/panda/types/jsx";
import type { ComponentProps } from "react";

/**
 * Core UI number input primitives.
 */
export type PrimitiveNumberInputProps = ComponentProps<
  typeof PrimitiveNumberInput
>;
const PrimitiveNumberInput: PandaComponent<typeof NumberInput> =
  panda(NumberInput);

export type PrimitiveNumberInputControlProps = ComponentProps<
  typeof PrimitiveNumberInputControl
>;
export const PrimitiveNumberInputControl = panda(NumberInputControl);

export type PrimitiveNumberInputDecrementTriggerProps = ComponentProps<
  typeof PrimitiveNumberInputDecrementTrigger
>;
export const PrimitiveNumberInputDecrementTrigger = panda(
  NumberInputDecrementTrigger,
);

export type PrimitiveNumberInputIncrementTriggerProps = ComponentProps<
  typeof PrimitiveNumberInputIncrementTrigger
>;
export const PrimitiveNumberInputIncrementTrigger = panda(
  NumberInputIncrementTrigger,
);

export type PrimitiveNumberInputInputProps = ComponentProps<
  typeof PrimitiveNumberInputInput
>;
export const PrimitiveNumberInputInput = panda(NumberInputInput);

export type PrimitiveNumberInputLabelProps = ComponentProps<
  typeof PrimitiveNumberInputLabel
>;
export const PrimitiveNumberInputLabel = panda(NumberInputLabel);

export type PrimitiveNumberInputScrubberProps = ComponentProps<
  typeof PrimitiveNumberInputScrubber
>;
export const PrimitiveNumberInputScrubber = panda(NumberInputScrubber);

export default PrimitiveNumberInput;
