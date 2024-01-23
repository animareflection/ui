import { FiMinus, FiPlus } from "react-icons/fi";

import Icon from "components/core/Icon/Icon";
import {
  PrimitiveNumberInput,
  PrimitiveNumberInputAddon,
  PrimitiveNumberInputControl,
  PrimitiveNumberInputDecrementTrigger,
  PrimitiveNumberInputIncrementTrigger,
  PrimitiveNumberInputInput,
  PrimitiveNumberInputLabel,
  PrimitiveNumberInputLeftElement,
  PrimitiveNumberInputRightElement,
  PrimitiveNumberInputScrubber,
} from "components/primitives";
import { Flex, panda } from "generated/panda/jsx";
import { useIsClient } from "lib/hooks";

import type {
  PrimitiveNumberInputInputProps,
  PrimitiveNumberInputProps,
} from "components/primitives";
import type { NumberInputVariantProps } from "generated/panda/recipes";
import type { ReactNode } from "react";

export interface Props
  extends PrimitiveNumberInputProps,
    NumberInputVariantProps {
  label?: ReactNode;
  leftAddon?: ReactNode;
  rightAddon?: ReactNode;
  inputLeftElement?: ReactNode;
  inputRightElement?: ReactNode;
  stepper?: boolean;
  placeholder?: string;
  inputProps?: PrimitiveNumberInputInputProps;
}

/**
 * Number input.
 */
const NumberInput = ({
  label,
  leftAddon,
  rightAddon,
  inputLeftElement,
  inputRightElement,
  stepper,
  placeholder,
  inputProps,
  ...rest
}: Props) => {
  const isClient = useIsClient();

  if (!isClient) return null;

  return (
    <PrimitiveNumberInput {...rest}>
      <PrimitiveNumberInputScrubber />
      {label && <PrimitiveNumberInputLabel>{label}</PrimitiveNumberInputLabel>}
      <Flex>
        {leftAddon && (
          <PrimitiveNumberInputAddon borderLeftRadius="sm">
            {leftAddon}
          </PrimitiveNumberInputAddon>
        )}
        <Flex pos="relative" w="100%">
          {inputLeftElement && (
            <PrimitiveNumberInputLeftElement>
              {inputLeftElement}
            </PrimitiveNumberInputLeftElement>
          )}
          <PrimitiveNumberInputInput
            {...inputProps}
            placeholder={placeholder}
            borderTopLeftRadius={leftAddon ? 0 : "sm"}
            borderBottomLeftRadius={leftAddon ? 0 : "sm"}
            borderTopRightRadius={stepper ? 0 : "sm"}
            borderBottomRightRadius={stepper ? 0 : "sm"}
            pl={inputLeftElement ? 10 : 3}
            pr={inputRightElement ? 10 : 3}
          />
          {inputRightElement && (
            <PrimitiveNumberInputRightElement>
              {inputRightElement}
            </PrimitiveNumberInputRightElement>
          )}
        </Flex>
        {rightAddon && (
          <PrimitiveNumberInputAddon borderRightRadius="sm">
            {rightAddon}
          </PrimitiveNumberInputAddon>
        )}
        {stepper && (
          <PrimitiveNumberInputControl>
            <PrimitiveNumberInputDecrementTrigger>
              <Icon color="inherit">
                <FiMinus />
              </Icon>
            </PrimitiveNumberInputDecrementTrigger>
            <panda.div w="1px" h="75%" mx={0.5} my="auto" bgColor="gray.600" />
            <PrimitiveNumberInputIncrementTrigger>
              <Icon color="inherit">
                <FiPlus />
              </Icon>
            </PrimitiveNumberInputIncrementTrigger>
          </PrimitiveNumberInputControl>
        )}
      </Flex>
    </PrimitiveNumberInput>
  );
};

export default NumberInput;
