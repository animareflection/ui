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
const Slider: PandaComponent<typeof ArkSlider> = panda(ArkSlider);

export type SliderControlProps = ArkSliderControlProps;
export const SliderControl: PandaComponent<typeof ArkSliderControl> =
  panda(ArkSliderControl);

export type SliderLabelProps = ArkSliderLabelProps;
export const SliderLabel: PandaComponent<typeof ArkSliderLabel> =
  panda(ArkSliderLabel);

export type SliderMarkerProps = ArkSliderMarkerProps;
export const SliderMarker: PandaComponent<typeof ArkSliderMarker> =
  panda(ArkSliderMarker);

export type SliderMarkerGroupProps = ArkSliderMarkerGroupProps;
export const SliderMarkerGroup: PandaComponent<typeof ArkSliderMarkerGroup> =
  panda(ArkSliderMarkerGroup);

export type SliderOutputProps = ArkSliderOutputProps;
export const SliderOutput: PandaComponent<typeof ArkSliderOutput> =
  panda(ArkSliderOutput);

export type SliderRangeProps = ArkSliderRangeProps;
export const SliderRange: PandaComponent<typeof ArkSliderRange> =
  panda(ArkSliderRange);

export type SliderThumbProps = ArkSliderThumbProps;
export const SliderThumb: PandaComponent<typeof ArkSliderThumb> =
  panda(ArkSliderThumb);

export type SliderTrackProps = ArkSliderTrackProps;
export const SliderTrack: PandaComponent<typeof ArkSliderTrack> =
  panda(ArkSliderTrack);

export default Slider;
