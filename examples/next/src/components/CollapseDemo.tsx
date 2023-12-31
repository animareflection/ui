import { Collapse, Flex, Text } from "@animareflection/ui";
import { Image } from "@animareflection/ui/next";

import { Wrapper } from "components";

const CollapseDemo = () => (
  <Wrapper title="Collapse">
    <Flex direction="column" gap={2}>
      <Collapse label="Show More">
        <Image
          src="/img/logo.png"
          alt="AR logo"
          containerProps={{
            h: 40,
            w: 40,
          }}
        />
      </Collapse>
      <Text p={2}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua.
      </Text>
    </Flex>
  </Wrapper>
);

export default CollapseDemo;
