import {
  Toast as ArkToast,
  ToastCloseTrigger as ArkToastCloseTrigger,
  ToastDescription as ArkToastDescription,
  ToastGroup as ArkToastGroup,
  ToastPlacements as ArkToastPlacements,
  ToastProvider as Ark,
  ToastTitle as ArkToastTitle,
} from "@ark-ui/react";

import { panda } from "generated/panda/jsx";

import type {
  ToastProps as ArkToastProps,
  ToastCloseTriggerProps as ArkToastCloseTriggerProps,
  ToastDescriptionProps as ArkToastDescriptionProps,
  ToastGroupProps as ArkToastGroupProps,
  ToastPlacementsProps as ArkToastPlacementsProps,
  ToastProviderProps as ArkProps,
  ToastTitleProps as ArkToastTitleProps,
} from "@ark-ui/react";
import type { PandaComponent } from "generated/panda/types/jsx";

/**
 * Core UI toast primitives.
 */
export type ToastProps = ArkToastProps;
// TODO remove explicit type annotation, required due to `pnpm` bug (and therefore Yarn with `pnpm` linker);
const Toast: PandaComponent<typeof ArkToast> = panda(ArkToast);

export type ToastCloseTriggerProps = ArkToastCloseTriggerProps;
export const ToastCloseTrigger = panda(ArkToastCloseTrigger);

export type ToastDescriptionProps = ArkToastDescriptionProps;
export const ToastDescription = panda(ArkToastDescription);

export type ToastGroupProps = ArkToastGroupProps;
// TODO remove explicit type annotation, required due to `pnpm` bug (and therefore Yarn with `pnpm` linker);
export const ToastGroup: PandaComponent<typeof ArkToastGroup> =
  panda(ArkToastGroup);

export type ToastPlacementsProps = ArkToastPlacementsProps;
export const ToastPlacements = panda(ArkToastPlacements);

export type ToastProviderProps = ArkProps;
export const ToastProvider = panda(Ark);

export type ToastTitleProps = ArkToastTitleProps;
export const ToastTitle = panda(ArkToastTitle);

export default Toast;
