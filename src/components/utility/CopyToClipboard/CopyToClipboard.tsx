import { useRef, useState } from "react";

import Button from "components/core/Button/Button";
// import Icon from "components/core/Icon/Icon";
import Tooltip from "components/core/Tooltip/Tooltip";
import { useCopyToClipboard } from "lib/hooks";

import type { Props as ButtonProps } from "components/core/Button/Button";

export interface Props extends ButtonProps {
  /** Force children to be string rather than generic `ReactNode`. */
  children: string;
  /** Optional text to copy. If not specified, falls back to children. */
  copyText?: string;
}

const CopyToClipboard = ({ children, copyText, ...rest }: Props) => {
  const [isCopied, setIsCopied] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [value, copy] = useCopyToClipboard();

  const ref = useRef<HTMLButtonElement>(null);

  return (
    <>
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
        ref={ref}
        {...rest}
      >
        {children}
      </Button>
      <Tooltip
        targetRef={ref}
        open={isOpen}
        tooltipContent={value && isCopied ? "Copied to clipboard!" : "Copy"}
      />
    </>
  );
};

export default CopyToClipboard;
