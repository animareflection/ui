import { sliderState } from "./Slider.spec";
import { Slider } from "components/client";

import type { Meta, StoryObj } from "@storybook/react";
import type { SliderMarkerRecord } from "components/client";

type Story = StoryObj<typeof Slider>;

const MARKERS: SliderMarkerRecord[] = [
  { id: "marker-1", value: 25, label: "25%" },
  { id: "marker-2", value: 50, label: "50%" },
  { id: "marker-3", value: 75, label: "75%" },
];

export const Default: Story = {
  render: () => (
    <Slider
      min={0}
      max={100}
      maxW="md"
      label="Slider Label"
      markers={MARKERS}
    />
  ),
};

export const SliderState: Story = {
  ...Default,
  play: sliderState,
  name: "[TEST] Slider State",
  tags: ["test"],
};

// TODO remove explicit type annotation, required due to `pnpm` bug (and therefore Yarn with `pnpm` linker); https://github.com/microsoft/TypeScript/issues/47663
const meta: Meta<typeof Slider> = {
  title: "Components/Client/Core/Slider",
  component: Slider,
  tags: ["autodocs"],
  decorators: [(Story) => <Story />],
} satisfies Meta<typeof Slider>;

export default meta;
