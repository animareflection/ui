import {
  Tabs,
  TabContent,
  TabIndicator,
  TabList,
  TabTrigger,
} from "@ark-ui/react";

import { panda } from "generated/panda/jsx";

import type {
  TabsProps,
  TabContentProps,
  TabIndicatorProps,
  TabListProps,
  TabTriggerProps,
} from "@ark-ui/react";
import type { PandaComponent } from "generated/panda/types/jsx";

/**
 * Core UI tabs primitives.
 */
export type PrimitiveTabsProps = TabsProps;
const PrimitiveTabs: PandaComponent<typeof Tabs> = panda(Tabs);

export type PrimitiveTabContentProps = TabContentProps;
export const PrimitiveTabContent: PandaComponent<typeof TabContent> =
  panda(TabContent);

export type PrimitiveTabIndicatorProps = TabIndicatorProps;
export const PrimitiveTabIndicator: PandaComponent<typeof TabIndicator> =
  panda(TabIndicator);

export type PrimitiveTabListProps = TabListProps;
export const PrimitiveTabList: PandaComponent<typeof TabList> = panda(TabList);

export type PrimitiveTabTriggerProps = TabTriggerProps;
export const PrimitiveTabTrigger: PandaComponent<typeof TabTrigger> =
  panda(TabTrigger);

export default PrimitiveTabs;
