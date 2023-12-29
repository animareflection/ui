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
const PrimitiveSlider = withProvider(panda(Slider), "root");

export type PrimitiveSliderControlProps = ComponentProps<
  typeof PrimitiveSliderControl
>;
export const PrimitiveSliderControl = withContext(
  panda(SliderControl),
  "control",
);

export type PrimitiveSliderLabelProps = ComponentProps<
  typeof PrimitiveSliderLabel
>;
export const PrimitiveSliderLabel = withContext(panda(SliderLabel), "label");

export type PrimitiveSliderMarkerProps = ComponentProps<
  typeof PrimitiveSliderMarker
>;
export const PrimitiveSliderMarker = withContext(panda(SliderMarker), "marker");

export type PrimitiveSliderMarkerGroupProps = ComponentProps<
  typeof PrimitiveSliderMarkerGroup
>;
export const PrimitiveSliderMarkerGroup = withContext(
  panda(SliderMarkerGroup),
  "markerGroup",
);

export type PrimitiveSliderRangeProps = ComponentProps<
  typeof PrimitiveSliderRange
>;
export const PrimitiveSliderRange = withContext(panda(SliderRange), "range");

export type PrimitiveSliderThumbProps = ComponentProps<
  typeof PrimitiveSliderThumb
>;
export const PrimitiveSliderThumb = withContext(panda(SliderThumb), "thumb");

export type PrimitiveSliderTrackProps = ComponentProps<
  typeof PrimitiveSliderTrack
>;
export const PrimitiveSliderTrack = withContext(panda(SliderTrack), "track");

export default PrimitiveSlider;
