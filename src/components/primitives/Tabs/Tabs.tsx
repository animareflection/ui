import {
  Tabs,
  TabContent,
  TabIndicator,
  TabList,
  TabTrigger,
} from "@ark-ui/react";

import { panda } from "generated/panda/jsx";

import type { PandaComponent } from "generated/panda/types/jsx";
import type { ComponentProps } from "react";

/**
 * Core UI tabs primitives.
 */
export type PrimitiveTabsProps = ComponentProps<typeof PrimitiveTabs>;
const PrimitiveTabs: PandaComponent<typeof Tabs> = panda(Tabs);

export type PrimitiveTabContentProps = ComponentProps<
  typeof PrimitiveTabContent
>;
export const PrimitiveTabContent: PandaComponent<typeof TabContent> =
  panda(TabContent);

export type PrimitiveTabIndicatorProps = ComponentProps<
  typeof PrimitiveTabIndicator
>;
export const PrimitiveTabIndicator = panda(TabIndicator);

export type PrimitiveTabListProps = ComponentProps<typeof PrimitiveTabList>;
export const PrimitiveTabList = panda(TabList);

export type PrimitiveTabTriggerProps = ComponentProps<
  typeof PrimitiveTabTrigger
>;
export const PrimitiveTabTrigger: PandaComponent<typeof TabTrigger> =
  panda(TabTrigger);

export default PrimitiveTabs;
