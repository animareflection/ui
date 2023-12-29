import { FiInfo } from "react-icons/fi";

import Icon from "components/core/Icon/Icon";
import Text from "components/core/Text/Text";
import { Flex } from "generated/panda/jsx";

import type { FlexProps } from "generated/panda/jsx";
import type { AlertVariantProps } from "generated/panda/recipes";
import type { ReactElement } from "react";

export interface Props extends FlexProps, AlertVariantProps {
  icon?: ReactElement;
  title: string;
  description?: string;
}

const Alert = ({ icon, title, description, ...rest }: Props) => (
  <Flex {...rest}>
    <Icon>{icon ?? <FiInfo />}</Icon>
    <Flex direction="column" gap={1}>
      <Text>{title}</Text>
      {description && <Text>{description}</Text>}
    </Flex>
  </Flex>
);

export default Alert;
