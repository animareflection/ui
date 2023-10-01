import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";
import { FiChevronDown, FiChevronRight } from "react-icons/fi";

import Button from "components/core/Button/Button";
import Icon from "components/core/Icon/Icon";
import { Flex } from "generated/panda/jsx";

import type { FlexProps } from "generated/panda/jsx";
import type { ReactElement, ReactNode } from "react";

export interface Props extends FlexProps {
  label?: string;
  icon?: ReactElement;
  open?: boolean;
  children?: ReactNode;
  collapseDirection?: "horizontal" | "vertical";
}

/**
 * Utility component to conditionally collapse child elements.
 */
const Collapse = ({
  label,
  icon,
  open,
  children,
  collapseDirection = "vertical",
  ...rest
}: Props) => {
  const [isOpen, setIsOpen] = useState(open ?? false);

  const isHorizontal = collapseDirection == "horizontal";
  const defaultIcon = isHorizontal ? <FiChevronRight /> : <FiChevronDown />;

  return (
    <Flex direction={isHorizontal ? "row-reverse" : "column"} gap={2} {...rest}>
      <Button
        display="flex"
        alignItems="center"
        gap={2}
        variant="ghost"
        w="fit-content"
        size="sm"
        onClick={() => setIsOpen(!isOpen)}
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
