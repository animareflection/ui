import { Tabs } from "components/client";

import type { Meta, StoryObj } from "@storybook/react";
import type { TabRecord } from "components/client";

type Story = StoryObj<typeof Tabs>;

const TABS: TabRecord[] = [
  {
    value: "tab-1",
    trigger: "Tab 1",
    content: "Tab 1 content",
  },
  {
    value: "tab-2",
    trigger: "Tab 2",
    content: "Tab 2 content",
  },
  {
    value: "tab-3",
    trigger: "Tab 3",
    content: "Tab 3 content",
  },
];

export const Default: Story = {
  render: () => <Tabs tabs={TABS} />,
};

// TODO remove explicit type annotation, required due to `pnpm` bug (and therefore Yarn with `pnpm` linker); https://github.com/microsoft/TypeScript/issues/47663
const meta: Meta<typeof Tabs> = {
  title: "Components/Client/Core/Tabs",
  component: Tabs,
  tags: ["autodocs"],
  decorators: [(Story) => <Story />],
} satisfies Meta<typeof Tabs>;

export default meta;
