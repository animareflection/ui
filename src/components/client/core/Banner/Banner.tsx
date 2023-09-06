import { useState } from "react";
import { FiX as CloseIcon } from "react-icons/fi";

import Button from "components/client/core/Button/Button";
import Icon from "components/client/core/Icon/Icon";
import { panda } from "generated/panda/jsx";
import { banner } from "generated/panda/recipes";

import type { BannerVariantProps } from "generated/panda/recipes";
import type { ComponentProps } from "react";

export interface Props
  extends Omit<ComponentProps<typeof panda.div>, "color">,
    BannerVariantProps {
  closable?: boolean;
}

/**
 * Core UI banner.
 */
const Banner = ({ children, variant, closable, ...props }: Props) => {
  const [isOpen, setIsOpen] = useState<boolean>(true);

  return (
    isOpen && (
      <panda.div className={banner({ variant })} {...props}>
        {children}
        {closable && (
          <Button
            onClick={() => setIsOpen(false)}
            position="absolute"
            right={6}
            p={1}
            _focus={{
              outline: "none",
            }}
            bgColor={{
              base: "inherit",
              _hover: "none",
            }}
          >
            <Icon as={CloseIcon} color="bg.default" />
          </Button>
        )}
      </panda.div>
    )
  );
};

export default Banner;
