import { useState, useCallback } from "react";

export interface Options {
  isOpen?: boolean;
  defaultIsOpen?: boolean;
  onOpen?: () => void;
  onClose?: () => void;
}

/**
 * Manage boolean disclosure state. Useful for modals, dropdowns, tooltips, and other components that can be toggled open/closed.
 */
const useDisclosure = ({
  isOpen: isOpenOption,
  defaultIsOpen,
  onOpen: onOpenOption,
  onClose: onCloseOption,
}: Options = {}) => {
  const [isOpen, setIsOpen] = useState(defaultIsOpen || false);
  const isControlled = isOpenOption !== undefined;

  const onClose = useCallback(() => {
    !isControlled && setIsOpen(false);
    onCloseOption && onCloseOption();
  }, [isControlled, onCloseOption]);

  const onOpen = useCallback(() => {
    !isControlled && setIsOpen(true);
    onOpenOption && onOpenOption();
  }, [isControlled, onOpenOption]);

  const onToggle = useCallback(() => {
    !isControlled ? setIsOpen(!isOpen) : isOpenOption ? onClose() : onOpen();
  }, [isControlled, isOpen, isOpenOption, onClose, onOpen]);

  return {
    isOpen: isControlled ? isOpenOption : isOpen,
    onOpen,
    onClose,
    onToggle,
  };
};

export default useDisclosure;
