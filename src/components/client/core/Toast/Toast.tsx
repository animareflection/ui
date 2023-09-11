import { Portal } from "@ark-ui/react";
import { FiX as CloseIcon } from "react-icons/fi";

import Icon from "components/client/core/Icon/Icon";
import {
  Toast as PrimitiveToast,
  ToastCloseTrigger,
  ToastDescription,
  ToastGroup,
  ToastPlacements,
  ToastTitle,
} from "components/primitives";
import { Stack } from "generated/panda/jsx";
import { toast } from "generated/panda/recipes";

import type { ToastProps } from "components/primitives";
import type { ToastVariantProps } from "generated/panda/recipes";

export interface Props extends Omit<ToastProps, "toast">, ToastVariantProps {}

const Toast = ({ children, state, ...rest }: Props) => {
  const classNames = toast({ state });
  return (
    <>
      <Portal>
        <ToastPlacements>
          {(placements) =>
            placements.map((placement) => (
              <ToastGroup
                key={placement}
                placement={placement}
                className={classNames.group}
              >
                {(toasts) =>
                  toasts.map((toast) => (
                    <PrimitiveToast
                      key={toast.id}
                      toast={toast}
                      className={classNames.root}
                      {...rest}
                    >
                      <Stack gap="1">
                        <ToastTitle className={classNames.title} />
                        <ToastDescription className={classNames.description} />
                      </Stack>

                      <ToastCloseTrigger className={classNames.closeTrigger}>
                        <Icon
                          as={CloseIcon}
                          className={classNames.closeTriggerIcon}
                        />
                      </ToastCloseTrigger>
                    </PrimitiveToast>
                  ))
                }
              </ToastGroup>
            ))
          }
        </ToastPlacements>
        {children}
      </Portal>
    </>
  );
};

export default Toast;
