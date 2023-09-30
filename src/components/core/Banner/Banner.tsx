import { useState } from "react";
import { FiX as CloseIcon } from "react-icons/fi";

import Button from "components/core/Button/Button";
import Icon from "components/core/Icon/Icon";
import { panda } from "generated/panda/jsx";
import { banner } from "generated/panda/recipes";

import type { BannerVariantProps } from "generated/panda/recipes";
import type { ComponentProps } from "react";

export interface Props
  extends ComponentProps<typeof panda.div>,
    BannerVariantProps {
  closable?: boolean;
}

/**
 * Core UI banner.
 */
const Banner = ({ children, variant, closable, ...rest }: Props) => {
  const [isOpen, setIsOpen] = useState<boolean>(true);

  return (
    isOpen && (
      <panda.div className={banner({ variant })} {...rest}>
        <panda.div flex={1} p={2}>
          {children}
        </panda.div>
        {closable && (
          <Button
            onClick={() => setIsOpen(false)}
            p={1}
            bgColor={{
              base: "inherit",
              _hover: "none",
            }}
          >
            <Icon color="bg.default">
              <CloseIcon />
            </Icon>
          </Button>
        )}
      </panda.div>
    )
  );
};

export default Banner;
