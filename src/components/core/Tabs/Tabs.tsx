import {
  PrimitiveTabs,
  PrimitiveTabContent,
  PrimitiveTabIndicator,
  PrimitiveTabList,
  PrimitiveTabTrigger,
} from "components/primitives";
import { tabs as tabsRecipe } from "generated/panda/recipes";
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
  const classNames = tabsRecipe();

  const isClient = useIsClient();

  if (!isClient) return null;

  return (
    <PrimitiveTabs
      lazyMount
      unmountOnExit
      className={classNames.root}
      {...rest}
    >
      <PrimitiveTabList className={classNames.list}>
        {tabs.map(({ value, trigger, disabled }) => (
          <PrimitiveTabTrigger
            flex={1}
            key={value}
            value={value}
            disabled={disabled}
            className={classNames.trigger}
          >
            {trigger}
          </PrimitiveTabTrigger>
        ))}
        <PrimitiveTabIndicator className={classNames.indicator} />
      </PrimitiveTabList>
      {tabs.map(({ value, content }) => (
        <PrimitiveTabContent
          key={value}
          value={value}
          className={classNames.content}
        >
          {content}
        </PrimitiveTabContent>
      ))}
    </PrimitiveTabs>
  );
};

export default Tabs;
