import { FiInfo } from "react-icons/fi";

import Icon from "components/core/Icon/Icon";
import Text from "components/core/Text/Text";
import { Flex } from "generated/panda/jsx";
import { alert, type AlertVariantProps } from "generated/panda/recipes";
import { createStyleContext } from "lib/util";

import type { FlexProps } from "generated/panda/jsx";
import type { ReactElement } from "react";

const { withProvider, withContext } = createStyleContext(alert);

// TODO extract primitives, add prop interfaces, and export both

const AlertRoot = withProvider(Flex, "root");

const AlertIcon = withContext(Icon, "icon");

const AlertTitle = withContext(Text, "title");

const AlertDescription = withContext(Text, "description");

export interface Props extends FlexProps, AlertVariantProps {
  icon?: ReactElement;
  title: string;
  description?: string;
}

const Alert = ({ icon, title, description, ...rest }: Props) => (
  <AlertRoot {...rest}>
    <AlertIcon>{icon ?? <FiInfo />}</AlertIcon>

    <Flex direction="column" gap={1}>
      <AlertTitle>{title}</AlertTitle>

      {description && <AlertDescription>{description}</AlertDescription>}
    </Flex>
  </AlertRoot>
);

export default Alert;
