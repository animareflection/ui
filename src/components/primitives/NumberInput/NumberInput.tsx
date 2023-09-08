import {
  NumberInput as ArkNumberInput,
  NumberInputControl as ArkNumberInputControl,
  NumberInputDecrementTrigger as ArkNumberInputDecrementTrigger,
  NumberInputIncrementTrigger as ArkNumberInputIncrementTrigger,
  NumberInputInput as ArkNumberInputInput,
  NumberInputLabel as ArkNumberInputLabel,
  NumberInputScrubber as ArkNumberInputScrubber,
} from "@ark-ui/react";

import { panda } from "generated/panda/jsx";

import type {
  NumberInputControlProps as ArkNumberInputControlProps,
  NumberInputDecrementTriggerProps as ArkNumberInputDecrementTriggerProps,
  NumberInputIncrementTriggerProps as ArkNumberInputIncrementTriggerProps,
  NumberInputInputProps as ArkNumberInputInputProps,
  NumberInputLabelProps as ArkNumberInputLabelProps,
  NumberInputProps as ArkNumberInputProps,
  NumberInputScrubberProps as ArkNumberInputScrubberProps,
} from "@ark-ui/react";
import type { PandaComponent } from "generated/panda/types/jsx";

/**
 * Core UI number input primitives.
 */
export type NumberInputProps = ArkNumberInputProps;
const NumberInput: PandaComponent<typeof ArkNumberInput> =
  panda(ArkNumberInput);

export type NumberInputControlProps = ArkNumberInputControlProps;
export const NumberInputControl = panda(ArkNumberInputControl);

export type NumberInputDecrementTriggerProps =
  ArkNumberInputDecrementTriggerProps;
export const NumberInputDecrementTrigger = panda(
  ArkNumberInputDecrementTrigger,
);

export type NumberInputIncrementTriggerProps =
  ArkNumberInputIncrementTriggerProps;
export const NumberInputIncrementTrigger = panda(
  ArkNumberInputIncrementTrigger,
);

export type NumberInputInputProps = ArkNumberInputInputProps;
export const NumberInputInput = panda(ArkNumberInputInput);

export type NumberInputLabelProps = ArkNumberInputLabelProps;
export const NumberInputLabel = panda(ArkNumberInputLabel);

export type NumberInputScrubberProps = ArkNumberInputScrubberProps;
export const NumberInputScrubber = panda(ArkNumberInputScrubber);

export default NumberInput;
