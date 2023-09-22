import { ark } from "@ark-ui/react";

import Icon from "components/client/core/Icon/Icon";
import { VStack, panda } from "generated/panda/jsx";
import { stat } from "generated/panda/recipes";

// import type { HTMLPandaProps } from "generated/panda/jsx";
import type { StatVariantProps } from "generated/panda/recipes";
import type { ComponentProps, ReactElement } from "react";

export interface Props
  extends ComponentProps<typeof PandaStat>,
    StatVariantProps {
  icon?: ReactElement;
}

const PandaStat = panda(ark.div, stat);
/**
 * Core Stat component.
 */
const Stat = ({ children, title, icon, size, ...rest }: Props) => {
  const classNames = stat({ size });
  return (
    <PandaStat className={classNames.root} {...rest}>
      {icon && (
        <Icon bgColor="red" className={classNames.icon}>
          {icon}
        </Icon>
      )}
      <VStack alignItems="start" gap={1}>
        <panda.div className={classNames.title}>{title}</panda.div>
        <panda.div className={classNames.value}>{children}</panda.div>
      </VStack>
    </PandaStat>
  );
};

export default Stat;
