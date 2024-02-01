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

import type {
  PrimitiveDrawerProps,
  PrimitiveDrawerContentProps,
} from "components/primitives";
import type { DrawerVariantProps } from "generated/panda/recipes";
import type { ReactNode, RefObject } from "react";

export interface Props extends PrimitiveDrawerProps, DrawerVariantProps {
  trigger?: ReactNode;
  title?: string;
  description?: string;
  contentProps?: PrimitiveDrawerContentProps;
  /** Portal container ref to mount to. */
  containerRef?: RefObject<HTMLElement>;
}

/**
 * Drawer.
 *
 * **NOTE:** by default, the component is rendered lazily and unmounted on exit due to `lazyMount` and `unmountOnExit` being specified. To override these behaviors, pass `lazyMount={false}` and/or `unmountOnExit={false}`.
 */
const Drawer = ({
  children,
  trigger,
  title,
  description,
  contentProps,
  containerRef,
  ...rest
}: Props) => (
  <PrimitiveDrawer lazyMount unmountOnExit {...rest}>
    {(ctx) => (
      <>
        {trigger && (
          <PrimitiveDrawerTrigger asChild>{trigger}</PrimitiveDrawerTrigger>
        )}

        <Portal container={containerRef}>
          <PrimitiveDrawerBackdrop />

          <PrimitiveDrawerPositioner>
            <PrimitiveDrawerContent {...contentProps}>
              {title && <PrimitiveDrawerTitle>{title}</PrimitiveDrawerTitle>}

              {description && (
                <PrimitiveDrawerDescription>
                  {description}
                </PrimitiveDrawerDescription>
              )}

              {/* forward nested context/state if utilized, otherwise directly render children */}
              {typeof children === "function" ? children(ctx) : children}

              <PrimitiveDrawerCloseTrigger>
                <Icon>
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

export default Drawer;
