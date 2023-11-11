import {
  RadioGroupItem,
  RadioGroupItemControl,
  RadioGroup,
  RadioGroupLabel,
} from "@ark-ui/react";

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
export const PrimitiveRadioControl = panda(RadioGroupItemControl);

export type PrimitiveRadioLabelProps = ComponentProps<
  typeof PrimitiveRadioLabel
>;
export const PrimitiveRadioLabel = panda(RadioGroupLabel);

export type PrimitiveRadioProps = ComponentProps<typeof PrimitiveRadio>;
export const PrimitiveRadio: PandaComponent<typeof RadioGroupItem> =
  panda(RadioGroupItem);

export default PrimitiveRadioGroup;
