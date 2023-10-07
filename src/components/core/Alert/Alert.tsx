import { FiInfo } from "react-icons/fi";

import Icon from "components/core/Icon/Icon";
import Text from "components/core/Text/Text";
import { Flex } from "generated/panda/jsx";
import { alert } from "generated/panda/recipes";

import type { StackProps } from "generated/panda/jsx";
import type { AlertVariantProps } from "generated/panda/recipes";
import type { ReactElement } from "react";

export interface Props extends StackProps, AlertVariantProps {
  icon?: ReactElement;
  title: string;
  description?: string;
}

const Alert = ({ variant, icon, title, description, ...rest }: Props) => {
  const classNames = alert({ variant });

  return (
    <Flex className={classNames.root} {...rest}>
      <Icon className={classNames.icon}>{icon ?? <FiInfo />}</Icon>
      <Flex direction="column" gap={1}>
        <Text className={classNames.title}>{title}</Text>
        {description && (
          <Text className={classNames.description}>{description}</Text>
        )}
      </Flex>
    </Flex>
  );
};

export default Alert;
