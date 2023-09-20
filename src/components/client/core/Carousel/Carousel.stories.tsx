import { carouselState } from "./Carousel.spec";
import { Carousel } from "components/client";
import { panda } from "generated/panda/jsx";

import type { Meta, StoryObj } from "@storybook/react";

type Story = StoryObj<typeof Carousel>;

const IMAGES = [
  "https://tinyurl.com/5b6ka8jd",
  "https://tinyurl.com/7rmccdn5",
  "https://tinyurl.com/59jxz9uu",
  "https://tinyurl.com/6jurv23t",
  "https://tinyurl.com/yp4rfum7",
];

export const Default: Story = {
  render: () => (
    <panda.div w="600px">
      <Carousel images={IMAGES} />
    </panda.div>
  ),
};

export const CarouselState: Story = {
  ...Default,
  play: carouselState,
  name: "[TEST] Carousel State",
  tags: ["test"],
};

// TODO remove explicit type annotation, required due to `pnpm` bug (and therefore Yarn with `pnpm` linker); https://github.com/microsoft/TypeScript/issues/47663
const meta: Meta<typeof Carousel> = {
  title: "Components/Client/Core/Carousel",
  component: Carousel,
  tags: ["autodocs"],
  decorators: [(Story) => <Story />],
} satisfies Meta<typeof Carousel>;

export default meta;
