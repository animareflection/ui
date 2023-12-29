import { ark } from "@ark-ui/react";
import { forwardRef } from "react";

import { Flex, panda, Stack } from "generated/panda/jsx";
import { input } from "generated/panda/recipes";
import { createStyleContext } from "lib/util";

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

const { withProvider, withContext } = createStyleContext(input);

// TODO extract primitives (this entire component will be refactored)

const PandaInput = withProvider(panda(ark.input, input), "input");

const PandaLabel = withContext(panda(ark.label), "label");

const PandaInputAddon = withContext(panda.div, "addon");

const PandaLeftElement = withContext(panda.div, "leftElement");

const PandaRightElement = withContext(panda.div, "rightElement");

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
      {label && <PandaLabel>{label}</PandaLabel>}

      <Flex>
        {leftAddon && (
          <PandaInputAddon borderLeftRadius="sm">{leftAddon}</PandaInputAddon>
        )}

        <Flex pos="relative" w="100%" align="center">
          {inputLeftElement && (
            <PandaLeftElement>{inputLeftElement}</PandaLeftElement>
          )}

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
          {inputRightElement && (
            <PandaRightElement>{inputRightElement}</PandaRightElement>
          )}
        </Flex>

        {rightAddon && (
          <PandaInputAddon borderRightRadius="sm">{rightAddon}</PandaInputAddon>
        )}
      </Flex>
    </Stack>
  ),
);

Input.displayName = "Input";

export default Input;
