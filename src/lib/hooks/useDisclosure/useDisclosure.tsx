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
  isOpen: isOpenProp,
  defaultIsOpen,
  onOpen: onOpenProp,
  onClose: onCloseProp,
}: Options = {}) => {
  const [isOpen, setIsOpen] = useState(defaultIsOpen || false);
  const isControlled = isOpenProp !== undefined;

  const onClose = useCallback(() => {
    !isControlled && setIsOpen(false);
    onCloseProp && onCloseProp();
  }, [isControlled, onCloseProp]);

  const onOpen = useCallback(() => {
    !isControlled && setIsOpen(true);
    onOpenProp && onOpenProp();
  }, [isControlled, onOpenProp]);

  const onToggle = useCallback(() => {
    !isControlled ? setIsOpen(!isOpen) : isOpenProp ? onClose() : onOpen();
  }, [isControlled, isOpen, isOpenProp, onClose, onOpen]);

  return {
    isOpen: isControlled ? isOpenProp : isOpen,
    onOpen,
    onClose,
    onToggle,
  };
};

export default useDisclosure;
