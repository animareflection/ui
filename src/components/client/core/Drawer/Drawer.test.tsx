import { describe, it } from "@jest/globals";
import { render, screen } from "@testing-library/react";
// import userEvent from "@testing-library/user-event";
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
  Portal,
} from "components/client";
import { Icon, Text } from "components/universal";

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

  // TODO: fix test
  //   it("renders content correctly", async () => {
  //     const user = userEvent.setup();

  //     render(<DrawerTest />);

  //     const openDrawerButton = screen.getByRole("button", {
  //       name: "Open Drawer",
  //     });

  //     await user.click(openDrawerButton);

  //     expect(screen.getByText("Drawer Title")).toBeInTheDocument();
  //   });
});
