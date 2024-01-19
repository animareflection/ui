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
import type { ReactNode } from "react";

export interface Props extends PrimitiveDrawerProps, DrawerVariantProps {
  trigger?: ReactNode;
  title?: string;
  description?: string;
  contentProps?: PrimitiveDrawerContentProps;
}

/**
 * Core UI drawer.
 */
const Drawer = ({
  children,
  trigger,
  title,
  description,
  contentProps,
  ...rest
}: Props) => (
  <PrimitiveDrawer lazyMount unmountOnExit {...rest}>
    {(ctx) => (
      <>
        {trigger && (
          <PrimitiveDrawerTrigger asChild>{trigger}</PrimitiveDrawerTrigger>
        )}

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
      </>
    )}
  </PrimitiveDrawer>
);

export default Drawer;
