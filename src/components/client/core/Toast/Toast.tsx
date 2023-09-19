import { FiX } from "react-icons/fi";

import Icon from "components/client/core/Icon/Icon";
import { Flex, panda } from "generated/panda/jsx";
import { toast } from "generated/panda/recipes";

import type { FlexProps } from "generated/panda/jsx";
import type { ToastVariantProps } from "generated/panda/recipes";

export interface Props extends FlexProps, ToastVariantProps {
  title: string;
  description?: string;
  onClose?: () => void;
}

const Toast = ({ title, description, onClose, variant, ...rest }: Props) => {
  const classNames = toast({ variant });

  return (
    <Flex direction="column" {...rest}>
      {onClose && (
        <panda.button
          className={classNames.closeTrigger}
          onClick={(e) => {
            e.stopPropagation();
            onClose();
          }}
        >
          <Icon as={FiX} h={4} w={4} />
        </panda.button>
      )}

      <panda.p className={classNames.title}>{title}</panda.p>
      <panda.p className={classNames.description}>{description}</panda.p>
    </Flex>
  );
};

export default Toast;
