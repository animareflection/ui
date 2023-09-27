import { Radio, RadioControl, RadioGroup, RadioLabel } from "@ark-ui/react";

import { panda } from "generated/panda/jsx";

import type {
  RadioProps,
  RadioControlProps,
  RadioGroupProps,
  RadioLabelProps,
} from "@ark-ui/react";
import type { PandaComponent } from "generated/panda/types/jsx";

/**
 * Core UI radio group primitives.
 */
export type PrimitiveRadioGroupProps = RadioGroupProps;
const PrimitiveRadioGroup: PandaComponent<typeof RadioGroup> =
  panda(RadioGroup);

export type PrimitiveRadioControlProps = RadioControlProps;
export const PrimitiveRadioControl = panda(RadioControl);

export type PrimitiveRadioLabelProps = RadioLabelProps;
export const PrimitiveRadioLabel = panda(RadioLabel);

export type PrimitiveRadioProps = RadioProps;
export const PrimitiveRadio = panda(Radio);

export default PrimitiveRadioGroup;
