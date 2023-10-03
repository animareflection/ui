import { Radio, RadioControl, RadioGroup, RadioLabel } from "@ark-ui/react";

import { panda } from "generated/panda/jsx";

import type { PandaComponent } from "generated/panda/types/jsx";
import type { ComponentProps } from "react";

/**
 * Core UI radio group primitives.
 */
export type PrimitiveRadioGroupProps = ComponentProps<
  typeof PrimitiveRadioGroup
>;
const PrimitiveRadioGroup: PandaComponent<typeof RadioGroup> =
  panda(RadioGroup);

export type PrimitiveRadioControlProps = ComponentProps<
  typeof PrimitiveRadioControl
>;
export const PrimitiveRadioControl = panda(RadioControl);

export type PrimitiveRadioLabelProps = ComponentProps<
  typeof PrimitiveRadioLabel
>;
export const PrimitiveRadioLabel = panda(RadioLabel);

export type PrimitiveRadioProps = ComponentProps<typeof PrimitiveRadio>;
export const PrimitiveRadio: PandaComponent<typeof Radio> = panda(Radio);

export default PrimitiveRadioGroup;
