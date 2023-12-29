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
import { useIsClient } from "lib/hooks";

import type { PrimitiveModalProps } from "components/primitives";
import type { ReactNode, RefObject } from "react";

export interface Props extends PrimitiveModalProps {
  trigger?: ReactNode;
  title?: string;
  description?: string;
  containerRef?: RefObject<HTMLElement>;
}

/**
 * Core UI modal.
 */
const Modal = ({
  children,
  trigger,
  title,
  description,
  containerRef,
  ...rest
}: Props) => {
  const isClient = useIsClient();

  if (!isClient) return null;

  return (
    <PrimitiveModal lazyMount unmountOnExit {...rest}>
      {(ctx) => (
        <>
          {trigger && <PrimitiveModalTrigger>{trigger}</PrimitiveModalTrigger>}

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
                  <Icon color="fg.default">
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
};

export default Modal;
