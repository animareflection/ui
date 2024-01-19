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
import type { ReactNode } from "react";

export interface Props extends PrimitiveModalProps {
  trigger?: ReactNode;
  title?: string;
  description?: string;
}

/**
 * Modal.
 */
const Modal = ({ children, trigger, title, description, ...rest }: Props) => (
  <PrimitiveModal lazyMount unmountOnExit {...rest}>
    {(ctx) => (
      <>
        {trigger && (
          <PrimitiveModalTrigger asChild>{trigger}</PrimitiveModalTrigger>
        )}

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
      </>
    )}
  </PrimitiveModal>
);

export default Modal;
