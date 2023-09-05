import { FiX as CloseIcon } from "react-icons/fi";

import Button from "components/client/core/Button/Button";
import Icon from "components/client/core/Icon/Icon";
import { panda } from "generated/panda/jsx";
import { banner } from "generated/panda/recipes";

import type { BannerVariantProps } from "generated/panda/recipes";
import type { ComponentProps } from "react";

export type Props = ComponentProps<typeof panda.div> & BannerVariantProps;

/**
 * Core UI Banner.
 */
const Banner = ({ children, variant, size, ...props }: Props) => {
  return (
    <panda.div className={banner({ variant, size })} {...props}>
      {children}
      <Button
        _focus={{
          outline: "none",
        }}
        bgColor={{
          base: "inherit",
          _hover: "bg.subtle",
        }}
      >
        <Icon as={CloseIcon} color="fg.default" />
      </Button>
    </panda.div>
  );
};

export default Banner;
