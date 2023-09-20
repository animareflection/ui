import { FiChevronLeft, FiChevronRight } from "react-icons/fi";

import Icon from "components/client/core/Icon/Icon";
import NextImage from "components/next/Image/Image";
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
import type { CarouselVariantProps } from "generated/panda/recipes";
import type { CSSProperties } from "react";

export interface Props extends CarouselProps, CarouselVariantProps {
  images: string[];
  imageStyle?: CSSProperties;
  nextjs?: boolean;
}

const Carousel = ({
  images,
  imageStyle = { height: "398px", width: "100%", objectFit: "cover" },
  size,
  nextjs,
  ...rest
}: Props) => {
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
              {nextjs ? (
                <NextImage
                  src={image}
                  alt={`Slide Image ${index}`}
                  style={imageStyle}
                />
              ) : (
                <Image
                  src={image}
                  alt={`Slide Image ${index}`}
                  style={imageStyle}
                />
              )}
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
