import { Portal } from "@ark-ui/react";
import { FiX as CloseIcon } from "react-icons/fi";

import Icon from "components/core/Icon/Icon";
import {
  PrimitiveModal,
  PrimitiveModalBackdrop,
  PrimitiveModalCloseTrigger,
  PrimitiveModalContent,
  PrimitiveModalDescription,
  PrimitiveModalPositioner,
  PrimitiveModalTitle,
  PrimitiveModalTrigger,
} from "components/primitives";

import type { PrimitiveModalProps } from "components/primitives";
import type { ReactNode, RefObject } from "react";

export interface Props extends PrimitiveModalProps {
  trigger?: ReactNode;
  title?: string;
  description?: string;
  /** Portal container ref to mount to. */
  containerRef?: RefObject<HTMLElement>;
}

/**
 * Modal.
 *
 * **NOTE:** by default, the component is rendered lazily and unmounted on exit due to `lazyMount` and `unmountOnExit` being specified. To override these behaviors, pass `lazyMount={false}` and/or `unmountOnExit={false}`.
 */
const Modal = ({
  children,
  trigger,
  title,
  description,
  containerRef,
  ...rest
}: Props) => (
  <PrimitiveModal lazyMount unmountOnExit {...rest}>
    {(ctx) => (
      <>
        {trigger && (
          <PrimitiveModalTrigger asChild>{trigger}</PrimitiveModalTrigger>
        )}

        <Portal container={containerRef}>
          <PrimitiveModalBackdrop />

          <PrimitiveModalPositioner>
            <PrimitiveModalContent>
              {title && <PrimitiveModalTitle>{title}</PrimitiveModalTitle>}

              {description && (
                <PrimitiveModalDescription>
                  {description}
                </PrimitiveModalDescription>
              )}

              {/* forward nested context/state if utilized, otherwise directly render children */}
              {typeof children === "function" ? children(ctx) : children}

              <PrimitiveModalCloseTrigger>
                <Icon>
                  <CloseIcon />
                </Icon>
              </PrimitiveModalCloseTrigger>
            </PrimitiveModalContent>
          </PrimitiveModalPositioner>
        </Portal>
      </>
    )}
  </PrimitiveModal>
);

export default Modal;
