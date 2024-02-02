import { FiChevronLeft, FiChevronRight } from "react-icons/fi";

import Icon from "components/core/Icon/Icon";
import {
  PrimitiveCarousel,
  PrimitiveCarouselControl,
  PrimitiveCarouselIndicator,
  PrimitiveCarouselIndicatorGroup,
  PrimitiveCarouselNextTrigger,
  PrimitiveCarouselPrevTrigger,
  PrimitiveCarouselItem,
  PrimitiveCarouselItemGroup,
  PrimitiveCarouselViewport,
} from "components/primitives";
import { useIsClient } from "lib/hooks";

import type { PrimitiveCarouselProps } from "components/primitives";
import type { CarouselVariantProps } from "generated/panda/recipes";
import type { ReactNode } from "react";

export interface Props extends PrimitiveCarouselProps, CarouselVariantProps {
  items: ReactNode[];
}

const Carousel = ({ items, ...rest }: Props) => {
  const isClient = useIsClient();

  if (!isClient) return null;

  return (
    <PrimitiveCarousel {...rest}>
      <PrimitiveCarouselViewport>
        <PrimitiveCarouselItemGroup>
          {items.map((item, index) => (
            <PrimitiveCarouselItem key={index} index={index}>
              {item}
            </PrimitiveCarouselItem>
          ))}
        </PrimitiveCarouselItemGroup>
        <PrimitiveCarouselControl>
          <PrimitiveCarouselPrevTrigger>
            <Icon>
              <FiChevronLeft />
            </Icon>
          </PrimitiveCarouselPrevTrigger>
          <PrimitiveCarouselIndicatorGroup>
            {items.map((_, index) => (
              <PrimitiveCarouselIndicator
                key={index}
                index={index}
                aria-label={`Goto item ${index + 1}`}
              />
            ))}
          </PrimitiveCarouselIndicatorGroup>
          <PrimitiveCarouselNextTrigger>
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
