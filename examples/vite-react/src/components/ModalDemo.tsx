import { useState } from "react";

import { Button, Modal, Text } from "@animareflection/ui";

import { Wrapper } from "components";

const ModalDemo = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <Wrapper title="Modal">
      <Button w="fit-content" onClick={() => setIsOpen(true)}>
        Open Modal
      </Button>

      <Modal
        open={isOpen}
        onOpenChange={({ open }) => (open ? setIsOpen(true) : setIsOpen(false))}
        title="Modal Title"
        description="Modal Description"
      >
        <Text mt={2}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam.
        </Text>
      </Modal>
    </Wrapper>
  );
};

export default ModalDemo;
