import { Portal } from "@ark-ui/react";
import { FiX as CloseIcon } from "react-icons/fi";

import Button from "components/core/Button/Button";
import Icon from "components/core/Icon/Icon";
import {
  PrimitiveDrawer,
  PrimitiveDrawerBackdrop,
  PrimitiveDrawerCloseTrigger,
  PrimitiveDrawerContainer,
  PrimitiveDrawerContent,
  PrimitiveDrawerDescription,
  PrimitiveDrawerTitle,
  PrimitiveDrawerTrigger,
} from "components/primitives";
import { drawer } from "generated/panda/recipes";

import type { PrimitiveDrawerProps } from "components/primitives";
import type { DrawerVariantProps } from "generated/panda/recipes";
import type { ReactNode } from "react";

export interface Props extends PrimitiveDrawerProps, DrawerVariantProps {
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
          <PrimitiveDrawerTrigger asChild>{trigger}</PrimitiveDrawerTrigger>
          <Portal>
            <PrimitiveDrawerBackdrop className={classNames.backdrop} />
            <PrimitiveDrawerContainer className={classNames.container}>
              <PrimitiveDrawerContent
                lazyMount
                unmountOnExit
                className={classNames.content}
              >
                {title && (
                  <PrimitiveDrawerTitle className={classNames.title}>
                    {title}
                  </PrimitiveDrawerTitle>
                )}
                {description && (
                  <PrimitiveDrawerDescription
                    className={classNames.description}
                  >
                    {description}
                  </PrimitiveDrawerDescription>
                )}

                {/* forward nested context/state if utilized, otherwise directly render children */}
                {typeof children === "function" ? children(ctx) : children}

                <PrimitiveDrawerCloseTrigger asChild>
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
                    <Icon color="fg.default">
                      <CloseIcon />
                    </Icon>
                  </Button>
                </PrimitiveDrawerCloseTrigger>
              </PrimitiveDrawerContent>
            </PrimitiveDrawerContainer>
          </Portal>
        </>
      )}
    </PrimitiveDrawer>
  );
};

export default Drawer;
