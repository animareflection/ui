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
import type { PandaComponent } from "generated/panda/types/jsx";

/**
 * Core UI slider primitives.
 */
export type PrimitiveSliderProps = SliderProps;
// TODO remove explicit type annotation, required due to `pnpm` bug (and therefore Yarn with `pnpm` linker); https://github.com/microsoft/TypeScript/issues/47663
const PrimitiveSlider: PandaComponent<typeof Slider> = panda(Slider);

export type PrimitiveSliderControlProps = SliderControlProps;
export const PrimitiveSliderControl = panda(SliderControl);

export type PrimitiveSliderLabelProps = SliderLabelProps;
export const PrimitiveSliderLabel = panda(SliderLabel);

export type PrimitiveSliderMarkerProps = SliderMarkerProps;
export const PrimitiveSliderMarker = panda(SliderMarker);

export type PrimitiveSliderMarkerGroupProps = SliderMarkerGroupProps;
export const PrimitiveSliderMarkerGroup = panda(SliderMarkerGroup);

export type PrimitiveSliderOutputProps = SliderOutputProps;
// TODO remove explicit type annotation, required due to `pnpm` bug (and therefore Yarn with `pnpm` linker); https://github.com/microsoft/TypeScript/issues/47663
export const PrimitiveSliderOutput: PandaComponent<typeof SliderOutput> =
  panda(SliderOutput);

export type PrimitiveSliderRangeProps = SliderRangeProps;
export const PrimitiveSliderRange = panda(SliderRange);

export type PrimitiveSliderThumbProps = SliderThumbProps;
export const PrimitiveSliderThumb = panda(SliderThumb);

export type PrimitiveSliderTrackProps = SliderTrackProps;
export const PrimitiveSliderTrack = panda(SliderTrack);

export default PrimitiveSlider;
