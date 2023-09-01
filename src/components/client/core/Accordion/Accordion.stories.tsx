import { openState } from "./Accordion.spec";
import { Accordion } from "components/client";

import type { Meta, StoryObj } from "@storybook/react";
import type { AccordionItemRecord } from "components/client";

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

export const OpenState: Story = {
  ...Default,
  play: openState,
  name: "[TEST] Open State",
  tags: ["test"],
};

// TODO remove explicit type annotation, required due to `pnpm` bug (and therefore Yarn with `pnpm` linker); https://github.com/microsoft/TypeScript/issues/47663
const meta: Meta<typeof Accordion> = {
  title: "Components/Client/Core/Accordion",
  component: Accordion,
  tags: ["autodocs"],
  decorators: [(Story) => <Story />],
} satisfies Meta<typeof Accordion>;

export default meta;
