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
import { carousel } from "generated/panda/recipes";
import { useIsClient } from "lib/hooks";

import type { PrimitiveCarouselProps } from "components/primitives";
import type { CarouselVariantProps } from "generated/panda/recipes";
import type { ReactNode } from "react";

export interface Props extends PrimitiveCarouselProps, CarouselVariantProps {
  items: ReactNode[];
}

const Carousel = ({ items, size, ...rest }: Props) => {
  const classNames = carousel({ size });

  const isClient = useIsClient();

  if (!isClient) return null;

  return (
    <PrimitiveCarousel className={classNames.root} {...rest}>
      <PrimitiveCarouselViewport className={classNames.viewport}>
        <PrimitiveCarouselItemGroup className={classNames.itemGroup}>
          {items.map((item, index) => (
            <PrimitiveCarouselItem
              className={classNames.item}
              key={index}
              index={index}
            >
              {item}
            </PrimitiveCarouselItem>
          ))}
        </PrimitiveCarouselItemGroup>
        <PrimitiveCarouselControl className={classNames.control}>
          <PrimitiveCarouselPrevTrigger className={classNames.prevTrigger}>
            <Icon>
              <FiChevronLeft />
            </Icon>
          </PrimitiveCarouselPrevTrigger>
          <PrimitiveCarouselIndicatorGroup
            className={classNames.indicatorGroup}
          >
            {items.map((_, index) => (
              <PrimitiveCarouselIndicator
                key={index}
                index={index}
                className={classNames.indicator}
                aria-label={`Goto item ${index + 1}`}
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
