import { FiChevronLeft, FiChevronRight } from "react-icons/fi";

import Icon from "components/core/Icon/Icon";
import {
  PrimitiveCarousel,
  PrimitiveCarouselControl,
  PrimitiveCarouselIndicator,
  PrimitiveCarouselIndicatorGroup,
  PrimitiveCarouselNextTrigger,
  PrimitiveCarouselPrevTrigger,
  PrimitiveCarouselSlide,
  PrimitiveCarouselSlideGroup,
  PrimitiveCarouselViewport,
} from "components/primitives";
import { carousel } from "generated/panda/recipes";
import { useIsClient } from "lib/hooks";

import type { PrimitiveCarouselProps } from "components/primitives";
import type { CarouselVariantProps } from "generated/panda/recipes";
import type { ReactNode } from "react";

export interface Props extends PrimitiveCarouselProps, CarouselVariantProps {
  slides: ReactNode[];
}

const Carousel = ({ slides, size, ...rest }: Props) => {
  const classNames = carousel({ size });

  const isClient = useIsClient();

  if (!isClient) return null;

  return (
    <PrimitiveCarousel className={classNames.root} {...rest}>
      <PrimitiveCarouselViewport className={classNames.viewport}>
        <PrimitiveCarouselSlideGroup className={classNames.itemGroup}>
          {/* TODO `slides` -> `items` */}
          {slides.map((slides, index) => (
            <PrimitiveCarouselSlide
              className={classNames.item}
              key={index}
              index={index}
            >
              {slides}
            </PrimitiveCarouselSlide>
          ))}
        </PrimitiveCarouselSlideGroup>
        <PrimitiveCarouselControl className={classNames.control}>
          <PrimitiveCarouselPrevTrigger className={classNames.prevTrigger}>
            <Icon>
              <FiChevronLeft />
            </Icon>
          </PrimitiveCarouselPrevTrigger>
          <PrimitiveCarouselIndicatorGroup
            className={classNames.indicatorGroup}
          >
            {slides.map((_, index) => (
              <PrimitiveCarouselIndicator
                key={index}
                index={index}
                className={classNames.indicator}
                aria-label={`Goto slide ${index + 1}`}
              />
            ))}
          </PrimitiveCarouselIndicatorGroup>
          <PrimitiveCarouselNextTrigger className={classNames.nextTrigger}>
            <Icon>
              <FiChevronRight />
            </Icon>
          </PrimitiveCarouselNextTrigger>
        </PrimitiveCarouselControl>
      </PrimitiveCarouselViewport>
    </PrimitiveCarousel>
  );
};

export default Carousel;
