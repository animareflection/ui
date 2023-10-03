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

import type {
  NumberInputControlProps,
  NumberInputDecrementTriggerProps,
  NumberInputIncrementTriggerProps,
  NumberInputInputProps,
  NumberInputLabelProps,
  NumberInputProps,
  NumberInputScrubberProps,
} from "@ark-ui/react";
import type { HTMLPandaProps } from "generated/panda/jsx";
import type { PandaComponent } from "generated/panda/types/jsx";

/**
 * Core UI number input primitives.
 */
export type PrimitiveNumberInputProps = NumberInputProps &
  HTMLPandaProps<"div">;
const PrimitiveNumberInput: PandaComponent<typeof NumberInput> =
  panda(NumberInput);

export type PrimitiveNumberInputControlProps = NumberInputControlProps;
export const PrimitiveNumberInputControl = panda(NumberInputControl);

export type PrimitiveNumberInputDecrementTriggerProps =
  NumberInputDecrementTriggerProps;
export const PrimitiveNumberInputDecrementTrigger = panda(
  NumberInputDecrementTrigger,
);

export type PrimitiveNumberInputIncrementTriggerProps =
  NumberInputIncrementTriggerProps;
export const PrimitiveNumberInputIncrementTrigger = panda(
  NumberInputIncrementTrigger,
);

export type PrimitiveNumberInputInputProps = NumberInputInputProps &
  HTMLPandaProps<"input">;
export const PrimitiveNumberInputInput = panda(NumberInputInput);

export type PrimitiveNumberInputLabelProps = NumberInputLabelProps;
export const PrimitiveNumberInputLabel = panda(NumberInputLabel);

export type PrimitiveNumberInputScrubberProps = NumberInputScrubberProps;
export const PrimitiveNumberInputScrubber = panda(NumberInputScrubber);

export default PrimitiveNumberInput;
