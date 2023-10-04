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

import type { PandaComponent } from "generated/panda/jsx";
import type { ComponentProps } from "react";

/**
 * Core UI carousel primitives.
 */
export type PrimitiveCarouselProps = ComponentProps<typeof PrimitiveCarousel>;
const PrimitiveCarousel: PandaComponent<typeof Carousel> = panda(Carousel);

export type PrimitiveCarouselControlProps = ComponentProps<
  typeof PrimitiveCarouselControl
>;
export const PrimitiveCarouselControl = panda(CarouselControl);

export type PrimitiveCarouselNextSlideTriggerProps = ComponentProps<
  typeof PrimitiveCarouselNextSlideTrigger
>;
export const PrimitiveCarouselNextSlideTrigger = panda(
  CarouselNextSlideTrigger,
);

export type PrimitiveCarouselPrevSlideTriggerProps = ComponentProps<
  typeof PrimitiveCarouselPrevSlideTrigger
>;
export const PrimitiveCarouselPrevSlideTrigger = panda(
  CarouselPrevSlideTrigger,
);

export type PrimitiveCarouselSlideProps = ComponentProps<
  typeof PrimitiveCarouselSlide
>;
export const PrimitiveCarouselSlide: PandaComponent<typeof CarouselSlide> =
  panda(CarouselSlide);

export type PrimitiveCarouselSlideGroupProps = ComponentProps<
  typeof PrimitiveCarouselSlideGroup
>;
export const PrimitiveCarouselSlideGroup = panda(CarouselSlideGroup);

export type PrimitiveCarouselViewportProps = ComponentProps<
  typeof PrimitiveCarouselViewport
>;
export const PrimitiveCarouselViewport = panda(CarouselViewport);

export type PrimitiveCarouselIndicatorProps = ComponentProps<
  typeof PrimitiveCarouselIndicator
>;
export const PrimitiveCarouselIndicator: PandaComponent<
  typeof CarouselIndicator
> = panda(CarouselIndicator);

export type PrimitiveCarouselIndicatorGroupProps = ComponentProps<
  typeof PrimitiveCarouselIndicatorGroup
>;
export const PrimitiveCarouselIndicatorGroup = panda(CarouselIndicatorGroup);

export default PrimitiveCarousel;
