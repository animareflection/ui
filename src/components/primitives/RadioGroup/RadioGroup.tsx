import {
  RadioGroupItem,
  RadioGroupItemControl,
  RadioGroup,
  RadioGroupLabel,
  RadioGroupItemText,
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

export type PrimitiveRadioGroupItemControlProps = ComponentProps<
  typeof PrimitiveRadioGroupItemControl
>;
export const PrimitiveRadioGroupItemControl = panda(RadioGroupItemControl);

export type PrimitiveRadioGroupLabelProps = ComponentProps<
  typeof PrimitiveRadioGroupLabel
>;
export const PrimitiveRadioGroupLabel = panda(RadioGroupLabel);

export type PrimitiveRadioGroupItemProps = ComponentProps<
  typeof PrimitiveRadioGroupItem
>;
export const PrimitiveRadioGroupItem: PandaComponent<typeof RadioGroupItem> =
  panda(RadioGroupItem);

export type PrimitiveRadioGroupItemTextProps = ComponentProps<
  typeof RadioGroupItemText
>;
export const PrimitiveRadioGroupItemText = panda(RadioGroupItemText);

export default PrimitiveRadioGroup;
