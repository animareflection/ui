import { Switch, SwitchControl, SwitchThumb, SwitchLabel } from "@ark-ui/react";

import { panda } from "generated/panda/jsx";

import type {
  SwitchProps,
  SwitchControlProps,
  SwitchThumbProps,
  SwitchLabelProps,
} from "@ark-ui/react";
import type { PandaComponent } from "generated/panda/types/jsx";

/**
 * Core UI toggle primitives.
 */
export type ToggleProps = SwitchProps;
// TODO remove explicit type annotation, required due to `pnpm` bug (and therefore Yarn with `pnpm` linker);
// NB: Using `Toggle` instead of `Switch` here to avoid recipe issues with `switch` being a reserved word.
const Toggle: PandaComponent<typeof Switch> = panda(Switch);

export type ToggleControlProps = SwitchControlProps;
export const ToggleControl = panda(SwitchControl);

export type ToggleThumbProps = SwitchThumbProps;
export const ToggleThumb = panda(SwitchThumb);

export type ToggleLabelProps = SwitchLabelProps;
export const ToggleLabel = panda(SwitchLabel);

export default Toggle;
