import {
  Switch as ArkSwitch,
  SwitchControl as ArkSwitchControl,
  SwitchThumb as ArkSwitchThumb,
  SwitchLabel as ArkSwitchLabel,
} from "@ark-ui/react";

import { panda } from "generated/panda/jsx";

import type {
  SwitchProps as ArkSwitchProps,
  SwitchControlProps as ArkSwitchControlProps,
  SwitchThumbProps as ArkSwitchThumbProps,
  SwitchLabelProps as ArkSwitchLabelProps,
} from "@ark-ui/react";
import type { PandaComponent } from "generated/panda/types/jsx";

/**
 * Core UI switch primitives.
 */
export type SwitchProps = ArkSwitchProps;
// TODO remove explicit type annotation, required due to `pnpm` bug (and therefore Yarn with `pnpm` linker);
const Switch: PandaComponent<typeof ArkSwitch> = panda(ArkSwitch);

export type SwitchControlProps = ArkSwitchControlProps;
export const SwitchControl = panda(ArkSwitchControl);

export type SwitchThumbProps = ArkSwitchThumbProps;
export const SwitchThumb = panda(ArkSwitchThumb);

export type SwitchLabelProps = ArkSwitchLabelProps;
export const SwitchLabel = panda(ArkSwitchLabel);

export default Switch;
