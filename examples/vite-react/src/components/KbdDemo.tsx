import { HStack, Kbd } from "@animareflection/ui";

import { Wrapper } from "components/core";

const KbdDemo = () => (
  <Wrapper title="Kbd">
    <HStack gap={4}>
      <Kbd>⌘</Kbd>
      <Kbd>Ctrl</Kbd>
      <Kbd>⌘ + K</Kbd>
      <Kbd>Ctrl + K</Kbd>
    </HStack>
  </Wrapper>
);

export default KbdDemo;
