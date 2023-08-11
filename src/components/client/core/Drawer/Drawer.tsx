import { Portal } from "@ark-ui/react";
import { FiX as CloseIcon } from "react-icons/fi";

import { Button, Icon } from "components/client";
import {
  Drawer as PrimitiveDrawer,
  DrawerBackdrop,
  DrawerCloseTrigger,
  DrawerContainer,
  DrawerContent,
  DrawerDescription,
  DrawerTitle,
  DrawerTrigger,
} from "components/primitives";

import type { DrawerProps } from "components/primitives";
import type { ReactNode } from "react";

export interface Props extends DrawerProps {
  trigger: ReactNode;
  title?: string;
  description?: string;
  children?: ReactNode;
}

/**
 * Core UI drawer.
 */
const Drawer = ({ children, trigger, title, description, ...rest }: Props) => (
  <PrimitiveDrawer {...rest}>
    <DrawerTrigger asChild>{trigger}</DrawerTrigger>
    <Portal>
      <DrawerBackdrop />
      <DrawerContainer>
        <DrawerContent lazyMount unmountOnExit>
          {title && <DrawerTitle>{title}</DrawerTitle>}
          {description && <DrawerDescription>{description}</DrawerDescription>}
          {children}
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
  </PrimitiveDrawer>
);

export default Drawer;
