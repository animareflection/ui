import {
  Slider,
  SliderControl,
  SliderLabel,
  SliderMarker,
  SliderMarkerGroup,
  SliderOutput,
  SliderRange,
  SliderThumb,
  SliderTrack,
} from "@ark-ui/react";

import { panda } from "generated/panda/jsx";

import type {
  SliderProps,
  SliderControlProps,
  SliderLabelProps,
  SliderMarkerProps,
  SliderMarkerGroupProps,
  SliderOutputProps,
  SliderRangeProps,
  SliderThumbProps,
  SliderTrackProps,
} from "@ark-ui/react";

/**
 * Core UI slider primitives.
 */
export type PrimitiveSliderProps = SliderProps;

const PrimitiveSlider = panda(Slider);

export type PrimitiveSliderControlProps = SliderControlProps;
export const PrimitiveSliderControl = panda(SliderControl);

export type PrimitiveSliderLabelProps = SliderLabelProps;
export const PrimitiveSliderLabel = panda(SliderLabel);

export type PrimitiveSliderMarkerProps = SliderMarkerProps;
export const PrimitiveSliderMarker = panda(SliderMarker);

export type PrimitiveSliderMarkerGroupProps = SliderMarkerGroupProps;
export const PrimitiveSliderMarkerGroup = panda(SliderMarkerGroup);

export type PrimitiveSliderOutputProps = SliderOutputProps;

export const PrimitiveSliderOutput = panda(SliderOutput);

export type PrimitiveSliderRangeProps = SliderRangeProps;
export const PrimitiveSliderRange = panda(SliderRange);

export type PrimitiveSliderThumbProps = SliderThumbProps;
export const PrimitiveSliderThumb = panda(SliderThumb);

export type PrimitiveSliderTrackProps = SliderTrackProps;
export const PrimitiveSliderTrack = panda(SliderTrack);

export default PrimitiveSlider;
