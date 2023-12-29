import {
  PrimitiveTabs,
  PrimitiveTabContent,
  PrimitiveTabIndicator,
  PrimitiveTabList,
  PrimitiveTabTrigger,
} from "components/primitives";
import { useIsClient } from "lib/hooks";

import type { PrimitiveTabsProps } from "components/primitives";
import type { ReactNode } from "react";

export interface TabRecord {
  value: string;
  trigger: ReactNode;
  disabled?: boolean;
  content: ReactNode;
}

export interface Props extends PrimitiveTabsProps {
  tabs: TabRecord[];
}

/**
 * Core UI tabs.
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
