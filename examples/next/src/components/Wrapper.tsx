import { Flex, Text } from "@animareflection/ui";

import type { FlexProps } from "@animareflection/ui";

interface Props extends FlexProps {
  title: string;
}

const Wrapper = ({ title, children, ...rest }: Props) => (
  <Flex w="100%" direction="column" gap={2} {...rest}>
    <Text fontWeight="bold">{title}:</Text>
    {children}
  </Flex>
);

export default Wrapper;
