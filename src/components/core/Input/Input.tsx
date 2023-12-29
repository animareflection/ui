import { forwardRef } from "react";

import {
  PrimitiveInput,
  PrimitiveInputAddon,
  PrimitiveInputInput,
  PrimitiveInputLabel,
  PrimitiveInputLeftElement,
  PrimitiveInputRightElement,
} from "components/primitives";
import { Flex } from "generated/panda/jsx";

import type {
  PrimitiveInputProps,
  PrimitiveInputInputProps,
} from "components/primitives";
import type { InputVariantProps } from "generated/panda/recipes";
import type { ReactNode, Ref } from "react";

export interface Props extends PrimitiveInputProps, InputVariantProps {
  label?: string;
  leftAddon?: ReactNode;
  rightAddon?: ReactNode;
  inputLeftElement?: ReactNode;
  inputRightElement?: ReactNode;
  inputProps?: PrimitiveInputInputProps;
}

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
      inputProps,
      ...rest
    }: Props,
    ref: Ref<HTMLInputElement> | undefined,
  ) => (
    <PrimitiveInput {...rest}>
      {label && <PrimitiveInputLabel>{label}</PrimitiveInputLabel>}

      <Flex>
        {leftAddon && (
          <PrimitiveInputAddon borderLeftRadius="sm">
            {leftAddon}
          </PrimitiveInputAddon>
        )}

        <Flex pos="relative" w="100%" align="center">
          {inputLeftElement && (
            <PrimitiveInputLeftElement>
              {inputLeftElement}
            </PrimitiveInputLeftElement>
          )}

          <PrimitiveInputInput
            ref={ref}
            borderTopLeftRadius={leftAddon ? 0 : "sm"}
            borderBottomLeftRadius={leftAddon ? 0 : "sm"}
            borderTopRightRadius={rightAddon ? 0 : "sm"}
            borderBottomRightRadius={rightAddon ? 0 : "sm"}
            pl={inputLeftElement ? 10 : 3}
            pr={inputRightElement ? 10 : 3}
            {...inputProps}
          />

          {inputRightElement && (
            <PrimitiveInputRightElement>
              {inputRightElement}
            </PrimitiveInputRightElement>
          )}
        </Flex>

        {rightAddon && (
          <PrimitiveInputAddon borderRightRadius="sm">
            {rightAddon}
          </PrimitiveInputAddon>
        )}
      </Flex>
    </PrimitiveInput>
  ),
);

Input.displayName = "Input";

export default Input;
