import { Checkbox, CheckboxControl, CheckboxLabel } from "@ark-ui/react";

import { panda } from "generated/panda/jsx";

import type { ComponentProps } from "react";

/**
 * Core UI checkbox primitives.
 */
export type PrimitiveCheckboxProps = ComponentProps<typeof PrimitiveCheckbox>;
const PrimitiveCheckbox = panda(Checkbox);

export type PrimitiveCheckboxControlProps = ComponentProps<
  typeof PrimitiveCheckboxControl
>;
export const PrimitiveCheckboxControl = panda(CheckboxControl);

export type PrimitiveCheckboxLabelProps = ComponentProps<
  typeof PrimitiveCheckboxLabel
>;
export const PrimitiveCheckboxLabel = panda(CheckboxLabel);

export default PrimitiveCheckbox;
