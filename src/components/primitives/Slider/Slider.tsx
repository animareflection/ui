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

import type { ComponentProps } from "react";

/**
 * Core UI slider primitives.
 */
export type PrimitiveSliderProps = ComponentProps<typeof PrimitiveSlider>;
const PrimitiveSlider = panda(Slider);

export type PrimitiveSliderControlProps = ComponentProps<
  typeof PrimitiveSliderControl
>;
export const PrimitiveSliderControl = panda(SliderControl);

export type PrimitiveSliderLabelProps = ComponentProps<
  typeof PrimitiveSliderLabel
>;
export const PrimitiveSliderLabel = panda(SliderLabel);

export type PrimitiveSliderMarkerProps = ComponentProps<
  typeof PrimitiveSliderMarker
>;
export const PrimitiveSliderMarker = panda(SliderMarker);

export type PrimitiveSliderMarkerGroupProps = ComponentProps<
  typeof PrimitiveSliderMarkerGroup
>;
export const PrimitiveSliderMarkerGroup = panda(SliderMarkerGroup);

export type PrimitiveSliderOutputProps = ComponentProps<
  typeof PrimitiveSliderOutput
>;
export const PrimitiveSliderOutput = panda(SliderOutput);

export type PrimitiveSliderRangeProps = ComponentProps<
  typeof PrimitiveSliderRange
>;
export const PrimitiveSliderRange = panda(SliderRange);

export type PrimitiveSliderThumbProps = ComponentProps<
  typeof PrimitiveSliderThumb
>;
export const PrimitiveSliderThumb = panda(SliderThumb);

export type PrimitiveSliderTrackProps = ComponentProps<
  typeof PrimitiveSliderTrack
>;
export const PrimitiveSliderTrack = panda(SliderTrack);

export default PrimitiveSlider;
