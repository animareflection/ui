import { Portal } from "@ark-ui/react";
import { FiX as CloseIcon } from "react-icons/fi";

import Button from "components/client/core/Button/Button";
import Icon from "components/client/core/Icon/Icon";
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
import { drawer } from "generated/panda/recipes";

import type { DrawerProps } from "components/primitives";
import type { DrawerVariantProps } from "generated/panda/recipes";
import type { ReactNode } from "react";

export interface Props extends DrawerProps, DrawerVariantProps {
  trigger: ReactNode;
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
                    p={3}
                    bgColor={{
                      base: "inherit",
                      _hover: "bg.subtle",
                    }}
                  >
                    <Icon as={CloseIcon} color="fg.default" />
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
