import Icon from "components/client/core/Icon/Icon";
import Text from "components/universal/core/Text/Text";
import { Stack } from "generated/panda/jsx";

import type { StackProps } from "generated/panda/jsx";
import type { ReactElement } from "react";

export interface Props extends StackProps {
  icon?: ReactElement;
  title: string;
  description?: string;
}

const Alert = ({ icon, title, description, ...rest }: Props) => {
  return (
    <Stack gap={4} direction={{ base: "column", sm: "row" }} {...rest}>
      {icon && <Icon>{icon}</Icon>}
      <Stack gap={1}>
        <Text>{title}</Text>
        {description && <Text>{description}</Text>}
      </Stack>
    </Stack>
  );
};

export default Alert;
