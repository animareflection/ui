import {
  Tabs as PrimitiveTabs,
  TabContent,
  TabIndicator,
  TabList,
  TabTrigger,
} from "components/primitives";
import { tabs as tabsRecipe } from "generated/panda/recipes";
import { useIsMounted } from "lib/hooks";

import type { TabsProps } from "components/primitives";
import type { TabsVariantProps } from "generated/panda/recipes";
import type { ReactNode } from "react";

export interface TabRecord {
  value: string;
  trigger: ReactNode;
  content: ReactNode;
}

export interface Props extends TabsProps, TabsVariantProps {
  tabs: TabRecord[];
}

/**
 * Core UI tabs.
 */
const Tabs = ({ tabs, size, ...rest }: Props) => {
  const classNames = tabsRecipe({ size });

  const isMounted = useIsMounted();

  if (!isMounted) return null;

  return (
    <PrimitiveTabs className={classNames.root} {...rest}>
      <TabList className={classNames.list}>
        {tabs.map(({ value, trigger }) => (
          <TabTrigger
            flex={1}
            key={value}
            value={value}
            className={classNames.trigger}
          >
            {trigger}
          </TabTrigger>
        ))}
        <TabIndicator className={classNames.indicator} />
      </TabList>
      {tabs.map(({ value, content }) => (
        <TabContent key={value} value={value} className={classNames.content}>
          {content}
        </TabContent>
      ))}
    </PrimitiveTabs>
  );
};

export default Tabs;
