import { useState } from "react";
import { FiX as CloseIcon } from "react-icons/fi";

import Button from "components/client/core/Button/Button";
import Icon from "components/client/core/Icon/Icon";
import { panda } from "generated/panda/jsx";
import { banner } from "generated/panda/recipes";

import type { BannerVariantProps } from "generated/panda/recipes";
import type { ComponentProps } from "react";

export interface Props
  extends ComponentProps<typeof panda.div>,
    BannerVariantProps {
  visible?: boolean;
}

/**
 * Core UI Banner.
 */
const Banner = ({ children, variant, size, visible, ...props }: Props) => {
  const [isOpen, setIsOpen] = useState<boolean>(true);
  return (
    isOpen && (
      <panda.div className={banner({ variant, size })} {...props}>
        {children}
        {visible && (
          <Button
            variant="ghost"
            p={0}
            onClick={() => setIsOpen(false)}
            _focus={{
              outline: "none",
            }}
            bgColor={{
              base: "inherit",
              _hover: "none",
            }}
          >
            <Icon as={CloseIcon} color="accent.fg" />
          </Button>
        )}
      </panda.div>
    )
  );
};

export default Banner;
