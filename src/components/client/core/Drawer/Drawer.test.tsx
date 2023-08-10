import { describe, it } from "@jest/globals";
import { render, screen } from "@testing-library/react";
import { FiX as CloseIcon } from "react-icons/fi";

import {
  Button,
  Drawer,
  DrawerBackdrop,
  DrawerContainer,
  DrawerContent,
  DrawerTitle,
  DrawerDescription,
  DrawerCloseTrigger,
  DrawerTrigger,
  Icon,
  Portal,
} from "components/client";
import { Text } from "components/universal";

const DrawerTest = () => (
  <Drawer>
    <DrawerTrigger asChild>
      <Button>Open Drawer</Button>
    </DrawerTrigger>
    <Portal>
      <DrawerBackdrop />
      <DrawerContainer>
        <DrawerContent lazyMount unmountOnExit>
          <DrawerTitle>Drawer Title</DrawerTitle>
          <DrawerDescription>Drawer Description</DrawerDescription>
          <Text mt={2}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam.
          </Text>
          <DrawerCloseTrigger
            pos="absolute"
            top={2}
            right={2}
            _focus={{
              outline: "none",
            }}
            asChild
          >
            <Button bgColor={{ base: "inherit", _hover: "#f5f5f5" }}>
              <Icon as={CloseIcon} color="black" />
            </Button>
          </DrawerCloseTrigger>
        </DrawerContent>
      </DrawerContainer>
    </Portal>
  </Drawer>
);

describe("Drawer", () => {
  it("renders trigger correctly", () => {
    render(<DrawerTest />);

    expect(
      screen.getByRole("button", { name: "Open Drawer" }),
    ).toBeInTheDocument();
  });
});
