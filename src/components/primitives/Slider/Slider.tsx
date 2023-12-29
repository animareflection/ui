import {
  Slider,
  SliderControl,
  SliderLabel,
  SliderMarker,
  SliderMarkerGroup,
  SliderRange,
  SliderThumb,
  SliderTrack,
} from "@ark-ui/react";

import { panda } from "generated/panda/jsx";
import { slider } from "generated/panda/recipes";
import { createStyleContext } from "lib/util";

import type { ComponentProps } from "react";

const { withProvider, withContext } = createStyleContext(slider);

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
