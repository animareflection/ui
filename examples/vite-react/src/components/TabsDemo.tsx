import { Tabs } from "@animareflection/ui/client";

import { Wrapper } from "components";

import type { TabRecord } from "@animareflection/ui/client";

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

const TabsDemo = () => (
  <Wrapper title="Tabs">
    <Tabs tabs={TABS} />
  </Wrapper>
);

export default TabsDemo;
