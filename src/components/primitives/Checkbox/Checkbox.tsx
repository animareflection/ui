import {
  Checkbox as ArkCheckbox,
  CheckboxControl as ArkCheckboxControl,
  CheckboxLabel as ArkCheckboxLabel,
} from "@ark-ui/react";

import { panda } from "generated/panda/jsx";

import type {
  CheckboxProps as ArkCheckboxProps,
  CheckboxControlProps as ArkCheckboxControlProps,
  CheckboxLabelProps as ArkCheckboxLabelProps,
} from "@ark-ui/react";

/**
 * Core UI checkbox primitives.
 */
export type CheckboxProps = ArkCheckboxProps;
const Checkbox = panda(ArkCheckbox);

export type CheckboxControlProps = ArkCheckboxControlProps;
export const CheckboxControl = panda(ArkCheckboxControl);

export type CheckboxLabelProps = ArkCheckboxLabelProps;
export const CheckboxLabel = panda(ArkCheckboxLabel);

export default Checkbox;
