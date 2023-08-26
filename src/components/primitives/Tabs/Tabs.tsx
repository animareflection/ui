import {
  Tabs as ArkTabs,
  TabContent as ArkTabContent,
  TabIndicator as ArkTabIndicator,
  TabList as ArkTabList,
  TabTrigger as ArkTabTrigger,
} from "@ark-ui/react";

import { panda } from "generated/panda/jsx";

import type {
  TabsProps as ArkTabsProps,
  TabContentProps as ArkTabContentProps,
  TabIndicatorProps as ArkTabIndicatorProps,
  TabListProps as ArkTabListProps,
  TabTriggerProps as ArkTabTriggerProps,
} from "@ark-ui/react";
import type { PandaComponent } from "generated/panda/types/jsx";

/**
 * Core UI tabs primitives.
 */
export type TabsProps = ArkTabsProps;
const Tabs: PandaComponent<typeof ArkTabs> = panda(ArkTabs);

export type TabContentProps = ArkTabContentProps;
export const TabContent: PandaComponent<typeof ArkTabContent> =
  panda(ArkTabContent);

export type TabIndicatorProps = ArkTabIndicatorProps;
export const TabIndicator: PandaComponent<typeof ArkTabIndicator> =
  panda(ArkTabIndicator);

export type TabListProps = ArkTabListProps;
export const TabList: PandaComponent<typeof ArkTabList> = panda(ArkTabList);

export type TabTriggerProps = ArkTabTriggerProps;
export const TabTrigger: PandaComponent<typeof ArkTabTrigger> =
  panda(ArkTabTrigger);

export default Tabs;
