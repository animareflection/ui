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
import { carousel } from "generated/panda/recipes";
import { createStyleContext } from "lib/util";

import type { PandaComponent } from "generated/panda/jsx";
import type { ComponentProps } from "react";

const { withProvider, withContext } = createStyleContext(carousel);

/**
 * Core UI carousel primitives.
 */
export type PrimitiveCarouselProps = ComponentProps<typeof PrimitiveCarousel>;
const PrimitiveCarousel: PandaComponent<typeof Carousel> = withProvider(
  panda(Carousel),
  "root",
);

export type PrimitiveCarouselControlProps = ComponentProps<
  typeof PrimitiveCarouselControl
>;
export const PrimitiveCarouselControl = withContext(
  panda(CarouselControl),
  "control",
);

export type PrimitiveCarouselNextTriggerProps = ComponentProps<
  typeof PrimitiveCarouselNextTrigger
>;
export const PrimitiveCarouselNextTrigger = withContext(
  panda(CarouselNextTrigger),
  "nextTrigger",
);

export type PrimitiveCarouselPrevTriggerProps = ComponentProps<
  typeof PrimitiveCarouselPrevTrigger
>;
export const PrimitiveCarouselPrevTrigger = withContext(
  panda(CarouselPrevTrigger),
  "prevTrigger",
);

export type PrimitiveCarouselItemProps = ComponentProps<
  typeof PrimitiveCarouselItem
>;
export const PrimitiveCarouselItem: PandaComponent<typeof CarouselItem> =
  withContext(panda(CarouselItem), "item");

export type PrimitiveCarouselItemGroupProps = ComponentProps<
  typeof PrimitiveCarouselItemGroup
>;
export const PrimitiveCarouselItemGroup = withContext(
  panda(CarouselItemGroup),
  "itemGroup",
);

export type PrimitiveCarouselViewportProps = ComponentProps<
  typeof PrimitiveCarouselViewport
>;
export const PrimitiveCarouselViewport = withContext(
  panda(CarouselViewport),
  "viewport",
);

export type PrimitiveCarouselIndicatorProps = ComponentProps<
  typeof PrimitiveCarouselIndicator
>;
export const PrimitiveCarouselIndicator: PandaComponent<
  typeof CarouselIndicator
> = withContext(panda(CarouselIndicator), "indicator");

export type PrimitiveCarouselIndicatorGroupProps = ComponentProps<
  typeof PrimitiveCarouselIndicatorGroup
>;
export const PrimitiveCarouselIndicatorGroup = withContext(
  panda(CarouselIndicatorGroup),
  "indicatorGroup",
);

export default PrimitiveCarousel;
