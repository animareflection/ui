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

  const isHorizontal = collapseDirection == "horizontal";
  const defaultIcon = isHorizontal ? <FiChevronRight /> : <FiChevronDown />;

  return (
    <Flex direction={isHorizontal ? "row-reverse" : "column"} gap={2} {...rest}>
      <Button
        w="fit-content"
        gap={1}
        display="flex"
        alignItems="center"
        placeSelf={isHorizontal ? "flex-start" : undefined}
        onClick={() => onToggle()}
        {...triggerProps}
      >
        {label}
        <Icon transform={isOpen && !icon ? "rotate(-180deg)" : undefined}>
          {icon ?? defaultIcon}
        </Icon>
      </Button>
      <AnimatePresence initial={isOpen}>
        {isOpen && (
          <motion.div
            style={{ overflow: "hidden" }}
            initial="collapsed"
            animate="open"
            exit="collapsed"
            variants={{
              open: isHorizontal
                ? { opacity: 1, width: "auto" }
                : { opacity: 1, height: "auto" },
              collapsed: isHorizontal
                ? { opacity: 0, width: 0 }
                : { opacity: 0, height: 0 },
            }}
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
