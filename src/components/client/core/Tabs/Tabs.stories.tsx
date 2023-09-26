import { tabState } from "./Tabs.spec";
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

const meta = {
  title: "Components/Client/Core/Tabs",
  component: Tabs,
  tags: ["autodocs"],
  decorators: [(Story) => <Story />],
} satisfies Meta<typeof Tabs>;

export default meta;
