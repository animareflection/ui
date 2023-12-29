import { CopyToClipboard, Flex, Input } from "@animareflection/ui";

import { Wrapper } from "components";

const CopyToClipboardDemo = () => (
  <Wrapper title="Copy to Clipboard">
    <Flex align="center" gap={2}>
      <CopyToClipboard>Text to Copy</CopyToClipboard>
      <Input placeholder="Paste text here..." />
    </Flex>
  </Wrapper>
);

export default CopyToClipboardDemo;
