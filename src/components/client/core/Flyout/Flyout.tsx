import { Portal } from "@ark-ui/react";
import { useState } from "react";
import { FiX as CloseIcon } from "react-icons/fi";

import Button from "components/client/core/Button/Button";
import Icon from "components/client/core/Icon/Icon";
import {
  Flyout as PrimitiveFlyout,
  FlyoutArrow,
  FlyoutArrowTip,
  FlyoutCloseTrigger,
  FlyoutContent,
  FlyoutDescription,
  FlyoutPositioner,
  FlyoutTitle,
  FlyoutTrigger,
} from "components/primitives";
import { flyout } from "generated/panda/recipes";
import { useIsMounted } from "lib/hooks";

import type { FlyoutProps } from "components/primitives";
import type { ReactNode } from "react";

export interface Props extends FlyoutProps {
  trigger: ReactNode;
  title?: string;
  description?: string;
}

const Flyout = ({ trigger, title, description, ...rest }: Props) => {
  const classNames = flyout();

  const isMounted = useIsMounted();

  const [isOpen, setIsOpen] = useState<boolean>(false);

  if (!isMounted) return null;

  return (
    <PrimitiveFlyout onClose={() => setIsOpen(false)} portalled {...rest}>
      <FlyoutTrigger asChild onClick={() => setIsOpen(!isOpen)}>
        {trigger}
      </FlyoutTrigger>

      {isOpen && (
        <Portal>
          <FlyoutPositioner className={classNames.positioner}>
            <FlyoutContent className={classNames.content}>
              <FlyoutArrow className={classNames.arrow}>
                <FlyoutArrowTip className={classNames.arrowTip} />
              </FlyoutArrow>
              {title && (
                <FlyoutTitle className={classNames.title}>{title}</FlyoutTitle>
              )}
              {description && (
                <FlyoutDescription className={classNames.description}>
                  {description}
                </FlyoutDescription>
              )}

              <FlyoutCloseTrigger asChild onClick={() => setIsOpen(false)}>
                <Button
                  pos="absolute"
                  top={2}
                  right={2}
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
              </FlyoutCloseTrigger>
            </FlyoutContent>
          </FlyoutPositioner>
        </Portal>
      )}
    </PrimitiveFlyout>
  );
};

export default Flyout;
