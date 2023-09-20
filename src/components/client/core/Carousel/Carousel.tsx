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
import Image from "components/universal/core/Image/Image";
import { carousel } from "generated/panda/recipes";

import type { CarouselProps } from "components/primitives";
import type { Props as ImageProps } from "components/universal/core/Image/Image";
import type { CarouselVariantProps } from "generated/panda/recipes";

export interface Props extends CarouselProps, CarouselVariantProps {
  images: string[];
  imageProps?: ImageProps;
}

const Carousel = ({ images, imageProps, size, ...rest }: Props) => {
  const classNames = carousel({ size });

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
              <Image src={image} alt={`Slide Image ${index}`} {...imageProps} />
            </CarouselSlide>
          ))}
        </CarouselSlideGroup>
        <CarouselControl className={classNames.control}>
          <CarouselPrevSlideTrigger className={classNames.prevTrigger}>
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
          <CarouselNextSlideTrigger className={classNames.nextTrigger}>
            <Icon as={FiChevronRight} />
          </CarouselNextSlideTrigger>
        </CarouselControl>
      </CarouselViewport>
    </PrimitiveCarousel>
  );
};

export default Carousel;
