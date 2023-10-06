import { FiChevronLeft, FiChevronRight } from "react-icons/fi";

import Icon from "components/core/Icon/Icon";
import {
  PrimitiveCarousel,
  PrimitiveCarouselControl,
  PrimitiveCarouselIndicator,
  PrimitiveCarouselIndicatorGroup,
  PrimitiveCarouselNextSlideTrigger,
  PrimitiveCarouselPrevSlideTrigger,
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
        <PrimitiveCarouselSlideGroup className={classNames.slideGroup}>
          {slides.map((slides, index) => (
            <PrimitiveCarouselSlide
              className={classNames.slide}
              key={index}
              index={index}
            >
              {slides}
            </PrimitiveCarouselSlide>
          ))}
        </PrimitiveCarouselSlideGroup>
        <PrimitiveCarouselControl className={classNames.control}>
          <PrimitiveCarouselPrevSlideTrigger
            className={classNames.prevSlideTrigger}
          >
            <Icon>
              <FiChevronLeft />
            </Icon>
          </PrimitiveCarouselPrevSlideTrigger>
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
          <PrimitiveCarouselNextSlideTrigger
            className={classNames.nextSlideTrigger}
          >
            <Icon>
              <FiChevronRight />
            </Icon>
          </PrimitiveCarouselNextSlideTrigger>
        </PrimitiveCarouselControl>
      </PrimitiveCarouselViewport>
    </PrimitiveCarousel>
  );
};

export default Carousel;
