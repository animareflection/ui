import { Button, Modal, Text } from "@animareflection/ui";

import { Wrapper } from "components";

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
