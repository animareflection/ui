import {
  Slider as ArkSlider,
  SliderControl as ArkSliderControl,
  SliderLabel as ArkSliderLabel,
  SliderMarker as ArkSliderMarker,
  SliderMarkerGroup as ArkSliderMarkerGroup,
  SliderOutput as ArkSliderOutput,
  SliderRange as ArkSliderRange,
  SliderThumb as ArkSliderThumb,
  SliderTrack as ArkSliderTrack,
} from "@ark-ui/react";

import { panda } from "generated/panda/jsx";

import type {
  SliderProps as ArkSliderProps,
  SliderControlProps as ArkSliderControlProps,
  SliderLabelProps as ArkSliderLabelProps,
  SliderMarkerProps as ArkSliderMarkerProps,
  SliderMarkerGroupProps as ArkSliderMarkerGroupProps,
  SliderOutputProps as ArkSliderOutputProps,
  SliderRangeProps as ArkSliderRangeProps,
  SliderThumbProps as ArkSliderThumbProps,
  SliderTrackProps as ArkSliderTrackProps,
} from "@ark-ui/react";
import type { PandaComponent } from "generated/panda/types/jsx";

/**
 * Core UI slider primitives.
 */
export type SliderProps = ArkSliderProps;
// TODO remove explicit type annotation, required due to `pnpm` bug (and therefore Yarn with `pnpm` linker); https://github.com/microsoft/TypeScript/issues/47663
const Slider: PandaComponent<typeof ArkSlider> = panda(ArkSlider);

export type SliderControlProps = ArkSliderControlProps;
export const SliderControl = panda(ArkSliderControl);

export type SliderLabelProps = ArkSliderLabelProps;
export const SliderLabel = panda(ArkSliderLabel);

export type SliderMarkerProps = ArkSliderMarkerProps;
export const SliderMarker = panda(ArkSliderMarker);

export type SliderMarkerGroupProps = ArkSliderMarkerGroupProps;
export const SliderMarkerGroup = panda(ArkSliderMarkerGroup);

export type SliderOutputProps = ArkSliderOutputProps;
// TODO remove explicit type annotation, required due to `pnpm` bug (and therefore Yarn with `pnpm` linker); https://github.com/microsoft/TypeScript/issues/47663
export const SliderOutput: PandaComponent<typeof ArkSliderOutput> =
  panda(ArkSliderOutput);

export type SliderRangeProps = ArkSliderRangeProps;
export const SliderRange = panda(ArkSliderRange);

export type SliderThumbProps = ArkSliderThumbProps;
export const SliderThumb = panda(ArkSliderThumb);

export type SliderTrackProps = ArkSliderTrackProps;
export const SliderTrack = panda(ArkSliderTrack);

export default Slider;
