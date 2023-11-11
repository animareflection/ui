import {
  Carousel,
  CarouselControl,
  CarouselNextTrigger,
  CarouselPrevTrigger,
  CarouselItem,
  CarouselItemGroup,
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

export type PrimitiveCarouselNextTriggerProps = ComponentProps<
  typeof PrimitiveCarouselNextTrigger
>;
export const PrimitiveCarouselNextTrigger = panda(CarouselNextTrigger);

export type PrimitiveCarouselPrevTriggerProps = ComponentProps<
  typeof PrimitiveCarouselPrevTrigger
>;
export const PrimitiveCarouselPrevTrigger = panda(CarouselPrevTrigger);

export type PrimitiveCarouselItemProps = ComponentProps<
  typeof PrimitiveCarouselItem
>;
export const PrimitiveCarouselItem: PandaComponent<typeof CarouselItem> =
  panda(CarouselItem);

export type PrimitiveCarouselItemGroupProps = ComponentProps<
  typeof PrimitiveCarouselItemGroup
>;
export const PrimitiveCarouselItemGroup = panda(CarouselItemGroup);

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
