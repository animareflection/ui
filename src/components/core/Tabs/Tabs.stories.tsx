import { tabState } from "./Tabs.spec";
import { Tabs } from "components/core";

import type { Meta, StoryObj } from "@storybook/react";
import type { TabRecord } from "components/core";

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
    disabled: true,
  },
];

export const Default: Story = {
  render: () => <Tabs defaultValue="tab-1" tabs={TABS} />,
};

export const TabState: Story = {
  ...Default,
  play: tabState,
  name: "[TEST] Tab State",
  tags: ["test"],
};

// TODO remove explicit type annotation, required due to `pnpm` bug (and therefore Yarn with `pnpm` linker); https://github.com/microsoft/TypeScript/issues/47663
const meta: Meta<typeof Tabs> = {
  title: "components/Core/Tabs",
  component: Tabs,
  tags: ["autodocs"],
  decorators: [(Story) => <Story />],
} satisfies Meta<typeof Tabs>;

export default meta;
