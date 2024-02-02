import {
  PrimitiveTabs,
  PrimitiveTabContent,
  PrimitiveTabIndicator,
  PrimitiveTabList,
  PrimitiveTabTrigger,
} from "components/primitives";
import { useIsClient } from "lib/hooks";

import type { PrimitiveTabsProps } from "components/primitives";
import type { TabsVariantProps } from "generated/panda/recipes";
import type { ReactNode } from "react";

export interface TabRecord {
  value: string;
  trigger: ReactNode;
  disabled?: boolean;
  content: ReactNode;
}

export interface Props extends PrimitiveTabsProps, TabsVariantProps {
  tabs: TabRecord[];
}

/**
 * Tabs.
 *
 * **NOTE:** by default, the component is rendered lazily and unmounted on exit due to `lazyMount` and `unmountOnExit` being specified. To override these behaviors, pass `lazyMount={false}` and/or `unmountOnExit={false}`.
 */
const Tabs = ({ tabs, ...rest }: Props) => {
  const isClient = useIsClient();

  if (!isClient) return null;

  return (
    <PrimitiveTabs lazyMount unmountOnExit {...rest}>
      <PrimitiveTabList>
        {tabs.map(({ value, trigger, disabled }) => (
          <PrimitiveTabTrigger
            flex={1}
            key={value}
            value={value}
            disabled={disabled}
          >
            {trigger}
          </PrimitiveTabTrigger>
        ))}
        <PrimitiveTabIndicator />
      </PrimitiveTabList>
      {tabs.map(({ value, content }) => (
        <PrimitiveTabContent key={value} value={value}>
          {content}
        </PrimitiveTabContent>
      ))}
    </PrimitiveTabs>
  );
};

export default Tabs;
