import { Portal } from "@ark-ui/react";
import { FiX as CloseIcon } from "react-icons/fi";

import Icon from "components/core/Icon/Icon";
import {
  PrimitiveDrawer,
  PrimitiveDrawerBackdrop,
  PrimitiveDrawerCloseTrigger,
  PrimitiveDrawerPositioner,
  PrimitiveDrawerContent,
  PrimitiveDrawerDescription,
  PrimitiveDrawerTitle,
  PrimitiveDrawerTrigger,
} from "components/primitives";
import { drawer } from "generated/panda/recipes";
import { useIsClient } from "lib/hooks";

import type {
  PrimitiveDrawerProps,
  PrimitiveDrawerContentProps,
} from "components/primitives";
import type { DrawerVariantProps } from "generated/panda/recipes";
import type { RefObject, ReactNode } from "react";

export interface Props extends PrimitiveDrawerProps, DrawerVariantProps {
  trigger?: ReactNode;
  title?: string;
  description?: string;
  contentProps?: PrimitiveDrawerContentProps;
  containerRef?: RefObject<HTMLElement>;
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
  contentProps,
  containerRef,
  ...rest
}: Props) => {
  const classNames = drawer({ placement });

  const isClient = useIsClient();

  if (!isClient) return null;

  return (
    <PrimitiveDrawer lazyMount unmountOnExit {...rest}>
      {(ctx) => (
        <>
          {trigger && (
            <PrimitiveDrawerTrigger asChild className={classNames.trigger}>
              {trigger}
            </PrimitiveDrawerTrigger>
          )}

          <Portal container={containerRef}>
            <PrimitiveDrawerBackdrop className={classNames.backdrop} />
            <PrimitiveDrawerPositioner className={classNames.positioner}>
              <PrimitiveDrawerContent
                className={classNames.content}
                {...contentProps}
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

                <PrimitiveDrawerCloseTrigger
                  className={classNames.closeTrigger}
                >
                  <Icon color="fg.default">
                    <CloseIcon />
                  </Icon>
                </PrimitiveDrawerCloseTrigger>
              </PrimitiveDrawerContent>
            </PrimitiveDrawerPositioner>
          </Portal>
        </>
      )}
    </PrimitiveDrawer>
  );
};

export default Drawer;
