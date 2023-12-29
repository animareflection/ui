import { Checkbox, CheckboxControl, CheckboxLabel } from "@ark-ui/react";

import { panda } from "generated/panda/jsx";
import { checkbox } from "generated/panda/recipes";
import { createStyleContext } from "lib/util";

import type { ComponentProps } from "react";

const { withProvider, withContext } = createStyleContext(checkbox);

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
