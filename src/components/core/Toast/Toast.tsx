import { FiX } from "react-icons/fi";

import Icon from "components/core/Icon/Icon";
import {
  PrimitiveToast,
  PrimitiveToastClose,
  PrimitiveToastDescription,
  PrimitiveToastTitle,
} from "components/primitives";

import type { PrimitiveToastProps } from "components/primitives";
import type { ToastVariantProps } from "generated/panda/recipes";

export interface Props extends PrimitiveToastProps, ToastVariantProps {
  title: string;
  description?: string;
  onClose?: () => void;
}

/**
 * Core UI toast.
 */
const Toast = ({ title, description, onClose, ...rest }: Props) => (
  <PrimitiveToast {...rest}>
    {onClose && (
      <PrimitiveToastClose
        onClick={onClose}
        aria-label="Close Toast"
        alignSelf="flex-end"
      >
        <Icon size="sm">
          <FiX />
        </Icon>
      </PrimitiveToastClose>
    )}

    <PrimitiveToastTitle>{title}</PrimitiveToastTitle>
    {description && (
      <PrimitiveToastDescription>{description}</PrimitiveToastDescription>
    )}
  </PrimitiveToast>
);

export default Toast;
