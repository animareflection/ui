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
import { Text } from "components/universal";
import { css } from "generated/panda/css";

import type { Meta, StoryObj } from "@storybook/react";

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: () => (
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
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam.
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
                <CloseIcon
                  className={css({
                    color: "black",
                  })}
                />
              </Button>
            </DrawerCloseTrigger>
          </DrawerContent>
        </DrawerContainer>
      </Portal>
    </Drawer>
  ),
};

// TODO remove explicit type annotation, required due to `pnpm` bug (and therefore Yarn with `pnpm` linker); https://github.com/microsoft/TypeScript/issues/47663
const meta: Meta<typeof Drawer> = {
  title: "Client/Core/Drawer",
  component: Drawer,
  tags: ["autodocs"],
  decorators: [(Story) => <Story />],
} satisfies Meta<typeof Drawer>;

export default meta;
