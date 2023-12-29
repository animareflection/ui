import { FiX } from "react-icons/fi";

import Icon from "components/core/Icon/Icon";
import { Flex, panda } from "generated/panda/jsx";

import type { FlexProps } from "generated/panda/jsx";
import type { ToastVariantProps } from "generated/panda/recipes";

export interface Props extends FlexProps, ToastVariantProps {
  title: string;
  description?: string;
  onClose?: () => void;
}

/**
 * Core UI toast.
 */
const Toast = ({ title, description, onClose, ...rest }: Props) => (
  <Flex direction="column" {...rest}>
    {onClose && (
      <panda.button
        onClick={onClose}
        aria-label="Close Toast"
        alignSelf="flex-end"
      >
        <Icon size="sm">
          <FiX />
        </Icon>
      </panda.button>
    )}

    <panda.p>{title}</panda.p>
    <panda.p>{description}</panda.p>
  </Flex>
);

export default Toast;
