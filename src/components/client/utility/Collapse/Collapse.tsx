import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";
import { FiChevronDown, FiChevronRight } from "react-icons/fi";

import Button from "components/client/core/Button/Button";
import Icon from "components/client/core/Icon/Icon";
import { Flex } from "generated/panda/jsx";

import type { FlexProps } from "generated/panda/jsx";
import type { ElementType, ReactNode } from "react";

export interface Props extends FlexProps {
  label?: string;
  icon?: ElementType;
  open?: boolean;
  children?: ReactNode;
  orientation?: "horizontal" | "vertical";
}

const Collapse = ({
  label,
  icon,
  open,
  children,
  orientation = "vertical",
  ...rest
}: Props) => {
  const [isOpen, setIsOpen] = useState(open ?? false);

  const isHorizontal = orientation == "horizontal";
  const defaultIcon = isHorizontal ? FiChevronRight : FiChevronDown;

  return (
    <Flex direction={isHorizontal ? "row" : "column"} gap={2} {...rest}>
      <Button
        h="fit-content"
        display="flex"
        alignItems="center"
        gap={2}
        variant="ghost"
        onClick={() => setIsOpen(!isOpen)}
      >
        {label}
        <Icon
          transform={isOpen && !icon ? "rotate(-180deg)" : undefined}
          as={icon ?? defaultIcon}
        />
      </Button>
      {isHorizontal ? (
        <AnimatePresence initial={isOpen}>
          {isOpen && (
            <motion.div
              style={{ overflow: "hidden" }}
              initial="collapsed"
              animate="open"
              exit="collapsed"
              variants={{
                open: { opacity: 1, width: "auto" },
                collapsed: { opacity: 0, width: 0 },
              }}
              transition={{ duration: 0.4, ease: "easeInOut" }}
            >
              {children}
            </motion.div>
          )}
        </AnimatePresence>
      ) : (
        <AnimatePresence initial={isOpen}>
          {isOpen && (
            <motion.div
              style={{ overflow: "hidden" }}
              initial="collapsed"
              animate="open"
              exit="collapsed"
              variants={{
                open: { opacity: 1, height: "auto" },
                collapsed: { opacity: 0, height: 0 },
              }}
              transition={{ duration: 0.4, ease: "easeInOut" }}
            >
              {children}
            </motion.div>
          )}
        </AnimatePresence>
      )}
    </Flex>
  );
};

export default Collapse;
