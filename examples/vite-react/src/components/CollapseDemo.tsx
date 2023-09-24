import { Flex, Image, Text } from "@animareflection/ui";
import { Collapse } from "@animareflection/ui/client";

import { Wrapper } from "components/core";

const CollapseDemo = () => (
  <Wrapper title="Collapse">
    <Flex direction="column" gap={2}>
      <Collapse label="Show More">
        <Image src="/img/logo.png" alt="AR logo" h={40} w={40} />
      </Collapse>
      <Text p={2}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua.
      </Text>
    </Flex>
  </Wrapper>
);

export default CollapseDemo;
