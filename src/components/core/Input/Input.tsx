import { ark } from "@ark-ui/react";
import { forwardRef } from "react";

import { Flex, panda, Stack } from "generated/panda/jsx";
import { input } from "generated/panda/recipes";
import { createStyleContext } from "lib/util";

import type { StackProps } from "generated/panda/jsx";
import type { InputVariantProps } from "generated/panda/recipes";
import type { ComponentProps, ReactNode, Ref } from "react";

export interface Props
  extends ComponentProps<typeof InputRoot>,
    InputVariantProps {
  label?: string;
  leftAddon?: ReactNode;
  rightAddon?: ReactNode;
  inputLeftElement?: ReactNode;
  inputRightElement?: ReactNode;
  containerProps?: StackProps;
}

const { withProvider, withContext } = createStyleContext(input);

// TODO extract primitives, add prop interfaces, and export both (this entire component will be refactored)

const InputRoot = withProvider(panda(ark.input, input), "input");

const InputLabel = withContext(panda(ark.label), "label");

const InputAddon = withContext(panda.div, "addon");

const InputLeftElement = withContext(panda.div, "leftElement");

const InputRightElement = withContext(panda.div, "rightElement");

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
  ) => (
    <Stack gap={1.5} {...containerProps}>
      {label && <InputLabel>{label}</InputLabel>}

      <Flex>
        {leftAddon && (
          <InputAddon borderLeftRadius="sm">{leftAddon}</InputAddon>
        )}

        <Flex pos="relative" w="100%" align="center">
          {inputLeftElement && (
            <InputLeftElement>{inputLeftElement}</InputLeftElement>
          )}

          <InputRoot
            ref={ref}
            borderTopLeftRadius={leftAddon ? 0 : "sm"}
            borderBottomLeftRadius={leftAddon ? 0 : "sm"}
            borderTopRightRadius={rightAddon ? 0 : "sm"}
            borderBottomRightRadius={rightAddon ? 0 : "sm"}
            pl={inputLeftElement ? 10 : 3}
            pr={inputRightElement ? 10 : 3}
            {...rest}
          />
          {inputRightElement && (
            <InputRightElement>{inputRightElement}</InputRightElement>
          )}
        </Flex>

        {rightAddon && (
          <InputAddon borderRightRadius="sm">{rightAddon}</InputAddon>
        )}
      </Flex>
    </Stack>
  ),
);

Input.displayName = "Input";

export default Input;
