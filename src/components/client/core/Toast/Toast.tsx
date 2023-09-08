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
  ToastProvider,
  ToastTitle,
} from "components/primitives";
import { Box, Stack } from "generated/panda/jsx";
import { toast } from "generated/panda/recipes";

import type { ToastProps } from "components/primitives";

export type Props = Omit<ToastProps, "toast">;

export const ToastDemo = ({ children, ...rest }: Props) => {
  const classNames = toast();

  return (
    <ToastProvider max={1}>
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
                      {...rest}
                    >
                      <Stack gap="1">
                        <ToastTitle className={classNames.title} />
                        <ToastDescription className={classNames.description} />
                      </Stack>

                      <Box position="absolute" top="3" right="3">
                        <ToastCloseTrigger asChild>
                          <Button
                            pos="absolute"
                            top={2}
                            right={2}
                            bgColor={{
                              base: "inherit",
                              _hover: "bg.subtle",
                            }}
                          >
                            <Icon as={CloseIcon} color="fg.default" />
                          </Button>
                        </ToastCloseTrigger>
                      </Box>
                    </Toast>
                  ))
                }
              </ToastGroup>
            ))
          }
        </ToastPlacements>
      </Portal>
      {children}
    </ToastProvider>
  );
};
