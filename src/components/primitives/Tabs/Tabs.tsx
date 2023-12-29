import {
  Tabs,
  TabContent,
  TabIndicator,
  TabList,
  TabTrigger,
} from "@ark-ui/react";

import { panda } from "generated/panda/jsx";
import { tabs } from "generated/panda/recipes";
import { createStyleContext } from "lib/util";

import type { PandaComponent } from "generated/panda/types/jsx";
import type { ComponentProps } from "react";

const { withProvider, withContext } = createStyleContext(tabs);

/**
 * Core UI tabs primitives.
 */
export type PrimitiveTabsProps = ComponentProps<typeof PrimitiveTabs>;
const PrimitiveTabs: PandaComponent<typeof Tabs> = panda(Tabs);

export type PrimitiveTabContentProps = ComponentProps<
  typeof PrimitiveTabContent
>;
export const PrimitiveTabContent: PandaComponent<typeof TabContent> =
  withProvider(panda(TabContent), "root");

export type PrimitiveTabIndicatorProps = ComponentProps<
  typeof PrimitiveTabIndicator
>;
export const PrimitiveTabIndicator = withContext(
  panda(TabIndicator),
  "indicator",
);

export type PrimitiveTabListProps = ComponentProps<typeof PrimitiveTabList>;
export const PrimitiveTabList = withContext(panda(TabList), "list");

export type PrimitiveTabTriggerProps = ComponentProps<
  typeof PrimitiveTabTrigger
>;
export const PrimitiveTabTrigger: PandaComponent<typeof TabTrigger> =
  withContext(panda(TabTrigger), "trigger");

export default PrimitiveTabs;
