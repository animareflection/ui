import Icon from "components/client/core/Icon/Icon";
import { VStack, panda } from "generated/panda/jsx";
import { stat } from "generated/panda/recipes";

import type { StatVariantProps } from "generated/panda/recipes";
import type { ReactNode, ReactElement } from "react";

export interface Props extends StatVariantProps {
  icon?: ReactElement;
  children: ReactNode;
  title?: string;
}

/**
 * Core Stat component.
 */
const Stat = ({ children, title, icon, variant, size, ...rest }: Props) => {
  const classNames = stat({ variant, size });
  return (
    <panda.div className={classNames.root} {...rest}>
      {icon && (
        <Icon bgColor="gray" className={classNames.icon}>
          {icon}
        </Icon>
      )}
      <VStack alignItems="start" gap={1}>
        {title && <panda.div className={classNames.title}>{title}</panda.div>}
        <panda.div className={classNames.value}>{children}</panda.div>
      </VStack>
    </panda.div>
  );
};

export default Stat;
