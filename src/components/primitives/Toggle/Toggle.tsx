import { Switch, SwitchControl, SwitchThumb, SwitchLabel } from "@ark-ui/react";

import { panda } from "generated/panda/jsx";

import type {
  SwitchProps,
  SwitchControlProps,
  SwitchThumbProps,
  SwitchLabelProps,
} from "@ark-ui/react";

/**
 * Core UI toggle primitives.
 */
export type ToggleProps = SwitchProps;

// NB: Using `Toggle` instead of `Switch` here to avoid recipe issues with `switch` being a reserved word.
const Toggle = panda(Switch);

export type ToggleControlProps = SwitchControlProps;
export const ToggleControl = panda(SwitchControl);

export type ToggleThumbProps = SwitchThumbProps;
export const ToggleThumb = panda(SwitchThumb);

export type ToggleLabelProps = SwitchLabelProps;
export const ToggleLabel = panda(SwitchLabel);

export default Toggle;
