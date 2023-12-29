import { Switch, SwitchControl, SwitchThumb, SwitchLabel } from "@ark-ui/react";

import { panda } from "generated/panda/jsx";
import { toggle } from "generated/panda/recipes";
import { createStyleContext } from "lib/util";

import type { ComponentProps } from "react";

const { withProvider, withContext } = createStyleContext(toggle);

/**
 * Core UI toggle primitives.
 */
export type PrimitiveToggleProps = ComponentProps<typeof PrimitiveToggle>;
// NB: Using `Toggle` instead of `Switch` here to avoid recipe issues with `switch` being a reserved word.
const PrimitiveToggle = panda(Switch);

export type PrimitiveToggleControlProps = ComponentProps<
  typeof PrimitiveToggleControl
>;
export const PrimitiveToggleControl = panda(SwitchControl);

export type PrimitiveToggleThumbProps = ComponentProps<
  typeof PrimitiveToggleThumb
>;
export const PrimitiveToggleThumb = panda(SwitchThumb);

export type PrimitiveToggleLabelProps = ComponentProps<
  typeof PrimitiveToggleLabel
>;
export const PrimitiveToggleLabel = panda(SwitchLabel);

export default PrimitiveToggle;
