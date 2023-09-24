import { Text } from "@animareflection/ui";
import { Button, Modal } from "@animareflection/ui/client";

import { Wrapper } from "components/core";

const ModalDemo = () => (
  <Wrapper title="Modal">
    <Modal
      trigger={<Button>Open Modal</Button>}
      title="Modal Title"
      description="Modal Description"
    >
      <Text mt={2}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam.
      </Text>
    </Modal>
  </Wrapper>
);

export default ModalDemo;
