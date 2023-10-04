import { useState } from "react";
import { HiOutlineClipboardList as ClipboardIcon } from "react-icons/hi";

import Button from "components/core/Button/Button";
import Icon from "components/core/Icon/Icon";
import Tooltip from "components/core/Tooltip/Tooltip";
import { Flex } from "generated/panda/jsx";
import { useCopyToClipboard } from "lib/hooks";

import type { Props as ButtonProps } from "components/core/Button/Button";

export interface Props extends ButtonProps {
  /** Force children to be string rather than generic `ReactNode`. */
  children: string;
  /** Optional text to copy. If not specified, falls back to children. */
  copyText?: string;
  /** Whether to display icon. Defaults to true. */
  icon?: boolean;
}

// TODO: Update implementation to use `Tooltip` component, if/when ark-ui api is updated to support onClick `Tooltip` components.
const CopyToClipboard = ({
  children,
  copyText,
  icon = true,
  ...rest
}: Props) => {
  const [isCopied, setIsCopied] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [value, copy] = useCopyToClipboard();

  return (
    <Flex direction="column" align="center">
      <Button
        onMouseEnter={() => setIsOpen(true)}
        onMouseLeave={() => {
          setIsOpen(false);
          setIsCopied(false);
        }}
        onClick={() => {
          void copy(copyText || children);
          setIsCopied(true);
        }}
        p={0}
        w="fit-content"
        {...rest}
      >
        {children}
        {icon && (
          <Icon ml="4px" mb={1.5}>
            <ClipboardIcon />
          </Icon>
        )}
      </Button>
      <Tooltip
        trigger={<div></div>}
        open={isOpen}
        tooltipContent={value && isCopied ? "Copied to clipboard!" : "Copy"}
      />
    </Flex>
  );
};

export default CopyToClipboard;
