import { useState } from "react";
import { FiX as CloseIcon } from "react-icons/fi";

import Button from "components/core/Button/Button";
import Icon from "components/core/Icon/Icon";
import { panda } from "generated/panda/jsx";
import { banner } from "generated/panda/recipes";

import type { ComponentProps } from "react";

export interface Props extends ComponentProps<typeof PandaBanner> {
  closable?: boolean;
}

const PandaBanner = panda("div", banner);

/**
 * Core UI banner.
 */
const Banner = ({ children, closable, ...rest }: Props) => {
  const [isOpen, setIsOpen] = useState<boolean>(true);

  if (!isOpen) return null;

  return (
    <PandaBanner {...rest}>
      <panda.div flex={1} p={2}>
        {children}
      </panda.div>
      {closable && (
        <Button
          onClick={() => setIsOpen(false)}
          p={1}
          opacity={{ _hover: 0.8 }}
          aria-label="Close Banner"
        >
          <Icon color="inherit">
            <CloseIcon />
          </Icon>
        </Button>
      )}
    </PandaBanner>
  );
};

export default Banner;
