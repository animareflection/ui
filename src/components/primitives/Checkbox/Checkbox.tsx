/**
 * @file Checkbox primitives.
 */
import { Checkbox, CheckboxControl, CheckboxLabel } from "@ark-ui/react";

import { panda } from "generated/panda/jsx";
import { checkbox } from "generated/panda/recipes";
import { createStyleContext } from "lib/util";

import type { ComponentProps } from "react";

const { withProvider, withContext } = createStyleContext(checkbox);

export type PrimitiveCheckboxProps = ComponentProps<typeof PrimitiveCheckbox>;
const PrimitiveCheckbox = withProvider(panda(Checkbox), "root");

export type PrimitiveCheckboxControlProps = ComponentProps<
  typeof PrimitiveCheckboxControl
>;
export const PrimitiveCheckboxControl = withContext(
  panda(CheckboxControl),
  "control",
);

export type PrimitiveCheckboxLabelProps = ComponentProps<
  typeof PrimitiveCheckboxLabel
>;
export const PrimitiveCheckboxLabel = withContext(
  panda(CheckboxLabel),
  "label",
);

export default PrimitiveCheckbox;
