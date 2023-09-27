import { Checkbox, CheckboxControl, CheckboxLabel } from "@ark-ui/react";

import { panda } from "generated/panda/jsx";

import type {
  CheckboxProps,
  CheckboxControlProps,
  CheckboxLabelProps,
} from "@ark-ui/react";

/**
 * Core UI checkbox primitives.
 */
export type PrimitiveCheckboxProps = CheckboxProps;
const PrimitiveCheckbox = panda(Checkbox);

export type PrimitiveCheckboxControlProps = CheckboxControlProps;
export const PrimitiveCheckboxControl = panda(CheckboxControl);

export type PrimitiveCheckboxLabelProps = CheckboxLabelProps;
export const PrimitiveCheckboxLabel = panda(CheckboxLabel);

export default PrimitiveCheckbox;
