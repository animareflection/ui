import { Portal } from "@ark-ui/react";
import { FiX as CloseIcon } from "react-icons/fi";

import Button from "components/client/core/Button/Button";
import Icon from "components/client/core/Icon/Icon";
import {
  Toast,
  ToastCloseTrigger,
  ToastDescription,
  ToastGroup,
  ToastPlacements,
  ToastProvider as PrimitiveToastProvider,
  ToastTitle,
} from "components/primitives";
import { Stack } from "generated/panda/jsx";
import { toast } from "generated/panda/recipes";

import type { ToastProps, ToastProviderProps } from "components/primitives";

export interface Props extends ToastProviderProps {
  toastProps?: Omit<ToastProps, "toast">;
}

export const ToastProvider = ({ children, toastProps, ...rest }: Props) => {
  const classNames = toast();

  return (
    <PrimitiveToastProvider {...rest}>
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
                    <Toast
                      key={toast.id}
                      toast={toast}
                      className={classNames.root}
                      {...toastProps}
                    >
                      <Stack gap="1">
                        <ToastTitle className={classNames.title} />
                        <ToastDescription className={classNames.description} />
                      </Stack>

                      <ToastCloseTrigger asChild>
                        <Button
                          pos="absolute"
                          top={2}
                          right={2}
                          bgColor={{
                            base: "inherit",
                            _hover: "bg.subtle",
                          }}
                          p={1}
                        >
                          <Icon as={CloseIcon} color="fg.default" />
                        </Button>
                      </ToastCloseTrigger>
                    </Toast>
                  ))
                }
              </ToastGroup>
            ))
          }
        </ToastPlacements>
      </Portal>
      {children}
    </PrimitiveToastProvider>
  );
};

export default ToastProvider;
