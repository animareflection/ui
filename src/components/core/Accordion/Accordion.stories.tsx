import { accordionState } from "./Accordion.spec";
import { Accordion } from "components/core";

import type { Meta, StoryObj } from "@storybook/react";
import type { AccordionItemRecord } from "components/core";

type Story = StoryObj<typeof Accordion>;

const ITEMS: AccordionItemRecord[] = [
  {
    id: "panel-1",
    value: "panel-1",
    triggerLabel: "Panel 1",
    content: "Panel 1 content",
  },
  {
    id: "panel-2",
    value: "panel-2",
    triggerLabel: "Panel 2",
    content: "Panel 2 content",
  },
  {
    id: "panel-3",
    value: "panel-3",
    triggerLabel: "Panel 3",
    content: "Panel 3 content",
  },
];

export const Default: Story = {
  render: () => <Accordion items={ITEMS} />,
};

export const PlusMinus: Story = {
  render: () => <Accordion items={ITEMS} plusMinus />,
};

export const AccordionState: Story = {
  ...Default,
  play: accordionState,
  name: "[TEST] Accordion State",
  tags: ["test"],
};

const meta = {
  title: "Components/Core/Accordion",
  component: Accordion,
  tags: ["autodocs"],
  decorators: [(Story) => <Story />],
} satisfies Meta<typeof Accordion>;

export default meta;
