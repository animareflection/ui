import Icon from "components/client/core/Icon/Icon";
import Text from "components/universal/core/Text/Text";
import { Stack } from "generated/panda/jsx";
import { alert } from "generated/panda/recipes";

import type { StackProps } from "generated/panda/jsx";
import type { ReactElement } from "react";

export interface Props extends StackProps {
  icon?: ReactElement;
  title: string;
  description?: string;
}

const Alert = ({ icon, title, description, ...rest }: Props) => {
  const classNames = alert();

  return (
    <Stack
      className={classNames.root}
      gap={4}
      direction={{ base: "column", sm: "row" }}
      {...rest}
    >
      {icon && <Icon className={classNames.icon}>{icon}</Icon>}
      <Stack gap={1}>
        <Text className={classNames.title}>{title}</Text>
        {description && (
          <Text className={classNames.description}>{description}</Text>
        )}
      </Stack>
    </Stack>
  );
};

export default Alert;
