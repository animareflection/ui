import { ark } from "@ark-ui/react";
import { forwardRef } from "react";

import { Flex, panda, Stack } from "generated/panda/jsx";
import { input } from "generated/panda/recipes";

import type { StackProps } from "generated/panda/jsx";
import type { InputVariantProps } from "generated/panda/recipes";
import type { ComponentProps, ReactNode, Ref } from "react";

export interface Props
  extends ComponentProps<typeof PandaInput>,
    InputVariantProps {
  label?: string;
  leftAddon?: ReactNode;
  rightAddon?: ReactNode;
  inputLeftElement?: ReactNode;
  inputRightElement?: ReactNode;
  containerProps?: StackProps;
}

const PandaInput = panda(ark.input, input);
const PandaLabel = panda(ark.label);

/**
 * Core UI input.
 */
const Input = forwardRef(
  (
    {
      label,
      leftAddon,
      rightAddon,
      inputLeftElement,
      inputRightElement,
      containerProps,
      ...rest
    }: Props,
    ref: Ref<HTMLInputElement> | undefined,
  ) => {
    return (
      <Stack gap={1.5} {...containerProps}>
        {label && <PandaLabel>{label}</PandaLabel>}
        <Flex>
          {leftAddon && (
            <panda.div borderLeftRadius="sm">{leftAddon}</panda.div>
          )}
          <Flex pos="relative" w="100%">
            {inputLeftElement && <panda.div>{inputLeftElement}</panda.div>}
            <PandaInput
              ref={ref}
              borderTopLeftRadius={leftAddon ? 0 : "sm"}
              borderBottomLeftRadius={leftAddon ? 0 : "sm"}
              borderTopRightRadius={rightAddon ? 0 : "sm"}
              borderBottomRightRadius={rightAddon ? 0 : "sm"}
              pl={inputLeftElement ? 10 : 3}
              pr={inputRightElement ? 10 : 3}
              {...rest}
            />
            {inputRightElement && <panda.div>{inputRightElement}</panda.div>}
          </Flex>

          {rightAddon && (
            <panda.div borderRightRadius="sm">{rightAddon}</panda.div>
          )}
        </Flex>
      </Stack>
    );
  },
);

Input.displayName = "Input";

export default Input;
