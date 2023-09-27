import { carouselState } from "./Carousel.spec";
import { Carousel, Image } from "components/core";
import { Image as NextImage } from "components/next";
import { panda } from "generated/panda/jsx";

import type { Meta, StoryObj } from "@storybook/react";

type Story = StoryObj<typeof Carousel>;

const IMAGE_SOURCES = [
  "https://tinyurl.com/5b6ka8jd",
  "https://tinyurl.com/7rmccdn5",
  "https://tinyurl.com/59jxz9uu",
  "https://tinyurl.com/6jurv23t",
  "https://tinyurl.com/yp4rfum7",
];

export const Default: Story = {
  render: () => (
    <panda.div w="600px">
      <Carousel
        slides={IMAGE_SOURCES.map((src, index) => (
          <Image
            key={index}
            src={src}
            alt={`Image ${index + 1}`}
            style={{ height: "398px", width: "100%", objectFit: "cover" }}
          />
        ))}
      />
    </panda.div>
  ),
};

export const NextJSEnhanced: Story = {
  render: () => (
    <panda.div w="600px">
      <Carousel
        slides={IMAGE_SOURCES.map((src, index) => (
          <NextImage
            key={index}
            src={src}
            alt={`Image ${index + 1}`}
            style={{ height: "398px", width: "100%", objectFit: "cover" }}
          />
        ))}
      />
    </panda.div>
  ),
};

export const CarouselState: Story = {
  ...Default,
  play: carouselState,
  name: "[TEST] Carousel State",
  tags: ["test"],
};

const meta = {
  title: "Components/Core/Carousel",
  component: Carousel,
  tags: ["autodocs"],
  decorators: [(Story) => <Story />],
} satisfies Meta<typeof Carousel>;

export default meta;
