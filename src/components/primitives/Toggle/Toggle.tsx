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
export type PrimitiveToggleProps = SwitchProps;
// TODO remove explicit type annotation, required due to `pnpm` bug (and therefore Yarn with `pnpm` linker);
// NB: Using `Toggle` instead of `Switch` here to avoid recipe issues with `switch` being a reserved word.
const PrimitiveToggle: PandaComponent<typeof Switch> = panda(Switch);

export type PrimitiveToggleControlProps = SwitchControlProps;
export const PrimitiveToggleControl = panda(SwitchControl);

export type PrimitiveToggleThumbProps = SwitchThumbProps;
export const PrimitiveToggleThumb = panda(SwitchThumb);

export type PrimitiveToggleLabelProps = SwitchLabelProps;
export const PrimitiveToggleLabel = panda(SwitchLabel);

export default PrimitiveToggle;
