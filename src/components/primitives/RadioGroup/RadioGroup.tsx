import {
  Radio as ArkRadio,
  RadioControl as ArkRadioControl,
  RadioGroup as ArkRadioGroup,
  RadioLabel as ArkRadioLabel,
} from "@ark-ui/react";

import { panda } from "generated/panda/jsx";

import type {
  RadioProps as ArkRadioProps,
  RadioControlProps as ArkRadioControlProps,
  RadioGroupProps as ArkRadioGroupProps,
  RadioLabelProps as ArkRadioLabelProps,
} from "@ark-ui/react";
import type { PandaComponent } from "generated/panda/types/jsx";

/**
 * Core UI radio group primitives.
 */
export type RadioGroupProps = ArkRadioGroupProps;
const RadioGroup: PandaComponent<typeof ArkRadioGroup> = panda(ArkRadioGroup);

export type RadioControlProps = ArkRadioControlProps;
export const RadioControl = panda(ArkRadioControl);

export type RadioLabelProps = ArkRadioLabelProps;
export const RadioLabel = panda(ArkRadioLabel);

export type RadioProps = ArkRadioProps;
export const Radio = panda(ArkRadio);

export default RadioGroup;
