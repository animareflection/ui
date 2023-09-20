import { FiChevronLeft, FiChevronRight } from "react-icons/fi";

import Icon from "components/client/core/Icon/Icon";
import {
  Carousel as PrimitiveCarousel,
  CarouselControl,
  CarouselIndicator,
  CarouselIndicatorGroup,
  CarouselNextSlideTrigger,
  CarouselPrevSlideTrigger,
  CarouselSlide,
  CarouselSlideGroup,
  CarouselViewport,
} from "components/primitives";
import { carousel } from "generated/panda/recipes";
import { useIsMounted } from "lib/hooks";

import type { CarouselProps } from "components/primitives";
import type { CarouselVariantProps } from "generated/panda/recipes";
import type { ReactNode } from "react";

export interface Props extends CarouselProps, CarouselVariantProps {
  images: ReactNode[];
}

const Carousel = ({ images, size, ...rest }: Props) => {
  const classNames = carousel({ size });

  const isMounted = useIsMounted();

  if (!isMounted) return null;

  return (
    <PrimitiveCarousel className={classNames.root} {...rest}>
      <CarouselViewport className={classNames.viewport}>
        <CarouselSlideGroup className={classNames.slideGroup}>
          {images.map((image, index) => (
            <CarouselSlide
              className={classNames.slide}
              key={index}
              index={index}
            >
              {image}
            </CarouselSlide>
          ))}
        </CarouselSlideGroup>
        <CarouselControl className={classNames.control}>
          <CarouselPrevSlideTrigger className={classNames.trigger}>
            <Icon as={FiChevronLeft} />
          </CarouselPrevSlideTrigger>
          <CarouselIndicatorGroup className={classNames.indicatorGroup}>
            {images.map((_, index) => (
              <CarouselIndicator
                key={index}
                index={index}
                className={classNames.indicator}
                aria-label={`Goto slide ${index + 1}`}
              />
            ))}
          </CarouselIndicatorGroup>
          <CarouselNextSlideTrigger className={classNames.trigger}>
            <Icon as={FiChevronRight} />
          </CarouselNextSlideTrigger>
        </CarouselControl>
      </CarouselViewport>
    </PrimitiveCarousel>
  );
};

export default Carousel;
