import { Flex, Text } from "@animareflection/ui";

import type { ReactNode } from "react";

interface Props {
  title: string;
  children: ReactNode;
}

const Wrapper = ({ title, children }: Props) => (
  <Flex w="100%" direction="column" gap={2}>
    <Text fontWeight="bold">{title}:</Text>
    {children}
  </Flex>
);

export default Wrapper;
