import { AnimatePresence, motion } from "framer-motion";
import { FiChevronDown, FiChevronRight } from "react-icons/fi";

import Button from "components/core/Button/Button";
import Icon from "components/core/Icon/Icon";
import { Flex } from "generated/panda/jsx";
import { useDisclosure } from "lib/hooks";

import type { Props as ButtonProps } from "components/core/Button/Button";
import type { FlexProps } from "generated/panda/jsx";
import type { ReactElement, ReactNode } from "react";

export interface Props extends FlexProps {
  label?: string;
  animateOnMount?: boolean;
  icon?: ReactElement;
  isOpen?: boolean;
  onOpen?: () => void;
  onClose?: () => void;
  children?: ReactNode;
  collapseDirection?: "horizontal" | "vertical";
  triggerProps?: ButtonProps;
}

/**
 * Utility component to conditionally collapse child elements.
 */
const Collapse = ({
  label,
  animateOnMount = false,
  icon,
  isOpen: isOpenProp,
  onOpen,
  onClose,
  children,
  collapseDirection = "vertical",
  triggerProps,
  ...rest
}: Props) => {
  const { isOpen, onToggle } = useDisclosure({
    isOpen: isOpenProp,
    onOpen,
    onClose,
  });

  const isHorizontal = collapseDirection === "horizontal";
  const defaultIcon = isHorizontal ? <FiChevronRight /> : <FiChevronDown />;

  const selectedVariants = isHorizontal
    ? {
        hidden: { opacity: 0, width: 0 },
        visible: { opacity: 1, width: "auto" },
      }
    : {
        hidden: { opacity: 0, height: 0 },
        visible: { opacity: 1, height: "auto" },
      };

  const handleToggle = () => onToggle();

  return (
    <Flex direction={isHorizontal ? "row-reverse" : "column"} gap={2} {...rest}>
      <Button
        w="fit-content"
        gap={1}
        display="flex"
        alignItems="center"
        placeSelf={isHorizontal ? "flex-start" : undefined}
        onClick={handleToggle}
        {...triggerProps}
      >
        {label}
        <Icon
          transform={isOpen && !icon ? "rotate(-180deg)" : undefined}
          transition="transform 400ms"
          transformOrigin="center"
        >
          {icon ?? defaultIcon}
        </Icon>
      </Button>
      <AnimatePresence initial={animateOnMount}>
        {isOpen && (
          <motion.div
            style={{ overflow: "hidden" }}
            initial="hidden"
            animate="visible"
            exit="hidden"
            variants={selectedVariants}
            transition={{ duration: 0.4, ease: "easeInOut" }}
          >
            {children}
          </motion.div>
        )}
      </AnimatePresence>
    </Flex>
  );
};

export default Collapse;
