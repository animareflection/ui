import {
  Carousel,
  CarouselControl,
  CarouselNextSlideTrigger,
  CarouselPrevSlideTrigger,
  CarouselSlide,
  CarouselSlideGroup,
  CarouselViewport,
  CarouselIndicator,
  CarouselIndicatorGroup,
} from "@ark-ui/react";

import { panda } from "generated/panda/jsx";

import type {
  CarouselProps,
  CarouselControlProps,
  CarouselNextSlideTriggerProps,
  CarouselPrevSlideTriggerProps,
  CarouselSlideProps,
  CarouselSlideGroupProps,
  CarouselViewportProps,
  CarouselIndicatorProps,
  CarouselIndicatorGroupProps,
} from "@ark-ui/react";
import type { PandaComponent } from "generated/panda/jsx";

/**
 * Core UI carousel primitives.
 */
export type PrimitiveCarouselProps = CarouselProps;
const PrimitiveCarousel: PandaComponent<typeof Carousel> = panda(Carousel);

export type PrimitiveCarouselControlProps = CarouselControlProps;
export const PrimitiveCarouselControl = panda(CarouselControl);

export type PrimitiveCarouselNextSlideTriggerProps =
  CarouselNextSlideTriggerProps;
export const PrimitiveCarouselNextSlideTrigger = panda(
  CarouselNextSlideTrigger,
);

export type PrimitiveCarouselPrevSlideTriggerProps =
  CarouselPrevSlideTriggerProps;
export const PrimitiveCarouselPrevSlideTrigger = panda(
  CarouselPrevSlideTrigger,
);

export type PrimitiveCarouselSlideProps = CarouselSlideProps;
export const PrimitiveCarouselSlide: PandaComponent<typeof CarouselSlide> =
  panda(CarouselSlide);

export type PrimitiveCarouselSlideGroupProps = CarouselSlideGroupProps;
export const PrimitiveCarouselSlideGroup = panda(CarouselSlideGroup);

export type PrimitiveCarouselViewportProps = CarouselViewportProps;
export const PrimitiveCarouselViewport = panda(CarouselViewport);

export type PrimitiveCarouselIndicatorProps = CarouselIndicatorProps;
export const PrimitiveCarouselIndicator: PandaComponent<
  typeof CarouselIndicator
> = panda(CarouselIndicator);

export type PrimitiveCarouselIndicatorGroupProps = CarouselIndicatorGroupProps;
export const PrimitiveCarouselIndicatorGroup = panda(CarouselIndicatorGroup);

export default PrimitiveCarousel;
