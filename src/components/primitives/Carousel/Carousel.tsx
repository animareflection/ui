import {
  Carousel as ArkCarousel,
  CarouselControl as ArkCarouselControl,
  CarouselNextSlideTrigger as ArkCarouselNextSlideTrigger,
  CarouselPrevSlideTrigger as ArkCarouselPrevSlideTrigger,
  CarouselSlide as ArkCarouselSlide,
  CarouselSlideGroup as ArkCarouselSlideGroup,
  CarouselViewport as ArkCarouselViewport,
  CarouselIndicator as ArkCarouselIndicator,
  CarouselIndicatorGroup as ArkCarouselIndicatorGroup,
} from "@ark-ui/react";

import { panda } from "generated/panda/jsx";

import type {
  CarouselProps as ArkCarouselProps,
  CarouselControlProps as ArkCarouselControlProps,
  CarouselNextSlideTriggerProps as ArkCarouselNextSlideTriggerProps,
  CarouselPrevSlideTriggerProps as ArkCarouselPrevSlideTriggerProps,
  CarouselSlideProps as ArkCarouselSlideProps,
  CarouselSlideGroupProps as ArkCarouselSlideGroupProps,
  CarouselViewportProps as ArkCarouselViewportProps,
  CarouselIndicatorProps as ArkCarouselIndicatorProps,
  CarouselIndicatorGroupProps as ArkCarouselIndicatorGroupProps,
} from "@ark-ui/react";
import type { PandaComponent } from "generated/panda/jsx";

/**
 * Core UI carousel primitives.
 */
export type CarouselProps = ArkCarouselProps;
const Carousel: PandaComponent<typeof ArkCarousel> = panda(ArkCarousel);

export type CarouselControlProps = ArkCarouselControlProps;
export const CarouselControl = panda(ArkCarouselControl);

export type CarouselNextSlideTriggerProps = ArkCarouselNextSlideTriggerProps;
export const CarouselNextSlideTrigger = panda(ArkCarouselNextSlideTrigger);

export type CarouselPrevSlideTriggerProps = ArkCarouselPrevSlideTriggerProps;
export const CarouselPrevSlideTrigger = panda(ArkCarouselPrevSlideTrigger);

export type CarouselSlideProps = ArkCarouselSlideProps;
export const CarouselSlide: PandaComponent<typeof ArkCarouselSlide> =
  panda(ArkCarouselSlide);

export type CarouselSlideGroupProps = ArkCarouselSlideGroupProps;
export const CarouselSlideGroup = panda(ArkCarouselSlideGroup);

export type CarouselViewportProps = ArkCarouselViewportProps;
export const CarouselViewport = panda(ArkCarouselViewport);

export type CarouselIndicatorProps = ArkCarouselIndicatorProps;
export const CarouselIndicator: PandaComponent<typeof ArkCarouselIndicator> =
  panda(ArkCarouselIndicator);

export type CarouselIndicatorGroupProps = ArkCarouselIndicatorGroupProps;
export const CarouselIndicatorGroup = panda(ArkCarouselIndicatorGroup);

export default Carousel;
