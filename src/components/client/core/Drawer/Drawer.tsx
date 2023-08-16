import { Portal } from "@ark-ui/react";
import { FiX as CloseIcon } from "react-icons/fi";

import { recipe as drawer } from "./Drawer.recipe";
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
  placement?: "left" | "right";
  title?: string;
  description?: string;
}

/**
 * Core UI drawer.
 */
const Drawer = ({
  children,
  placement,
  trigger,
  title,
  description,
  ...rest
}: Props) => {
  const classNames = drawer({ placement });

  return (
    <PrimitiveDrawer {...rest}>
      {(ctx) => (
        <>
          <DrawerTrigger asChild>{trigger}</DrawerTrigger>
          <Portal>
            <DrawerBackdrop className={classNames.backdrop} />
            <DrawerContainer className={classNames.container}>
              <DrawerContent
                lazyMount
                unmountOnExit
                className={classNames.content}
              >
                {title && (
                  <DrawerTitle className={classNames.title}>
                    {title}
                  </DrawerTitle>
                )}
                {description && (
                  <DrawerDescription className={classNames.description}>
                    {description}
                  </DrawerDescription>
                )}

                {/* forward nested context/state if utilized, otherwise directly render children */}
                {typeof children === "function" ? children(ctx) : children}

                <DrawerCloseTrigger asChild>
                  <Button
                    pos="absolute"
                    top={2}
                    right={2}
                    _focus={{
                      outline: "none",
                    }}
                    p={3}
                    bgColor={{
                      base: "inherit",
                      _hover: { base: "#f5f5f5", _dark: "brand.primary.900" },
                    }}
                  >
                    <Icon as={CloseIcon} color="foreground.secondary" />
                  </Button>
                </DrawerCloseTrigger>
              </DrawerContent>
            </DrawerContainer>
          </Portal>
        </>
      )}
    </PrimitiveDrawer>
  );
};

export default Drawer;
