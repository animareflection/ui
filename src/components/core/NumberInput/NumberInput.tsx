import { FiMinus, FiPlus } from "react-icons/fi";

import Icon from "components/core/Icon/Icon";
import {
  PrimitiveNumberInput,
  PrimitiveNumberInputControl,
  PrimitiveNumberInputDecrementTrigger,
  PrimitiveNumberInputIncrementTrigger,
  PrimitiveNumberInputInput,
  PrimitiveNumberInputLabel,
  PrimitiveNumberInputScrubber,
} from "components/primitives";
import { Flex, panda } from "generated/panda/jsx";
import { numberInput } from "generated/panda/recipes";
import { useIsMounted } from "lib/hooks";

import type {
  PrimitiveNumberInputInputProps,
  PrimitiveNumberInputProps,
} from "components/primitives";
import type { NumberInputVariantProps } from "generated/panda/recipes";
import type { ReactNode } from "react";

export interface Props
  extends PrimitiveNumberInputProps,
    NumberInputVariantProps {
  label?: string;
  leftAddon?: ReactNode;
  rightAddon?: ReactNode;
  inputLeftElement?: ReactNode;
  inputRightElement?: ReactNode;
  stepper?: boolean;
  placeholder?: string;
  inputProps?: PrimitiveNumberInputInputProps;
}

/**
 * Core UI number input.
 */
const NumberInput = ({
  size,
  variant,
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
  const classNames = numberInput({ size, variant });

  const isMounted = useIsMounted();

  if (!isMounted) return null;

  return (
    <PrimitiveNumberInput {...rest}>
      <PrimitiveNumberInputScrubber />
      {label && (
        <PrimitiveNumberInputLabel className={classNames.label}>
          {label}
        </PrimitiveNumberInputLabel>
      )}
      <Flex>
        {leftAddon && (
          <panda.div className={classNames.addon} borderLeftRadius="sm">
            {leftAddon}
          </panda.div>
        )}
        <Flex pos="relative" w="100%">
          {inputLeftElement && (
            <panda.div className={classNames.leftElement}>
              {inputLeftElement}
            </panda.div>
          )}
          <PrimitiveNumberInputInput
            {...inputProps}
            className={classNames.input}
            placeholder={placeholder}
            borderTopLeftRadius={leftAddon ? 0 : "sm"}
            borderBottomLeftRadius={leftAddon ? 0 : "sm"}
            borderTopRightRadius={stepper ? 0 : "sm"}
            borderBottomRightRadius={stepper ? 0 : "sm"}
            pl={inputLeftElement ? 10 : 3}
            pr={inputRightElement ? 10 : 3}
          />
          {inputRightElement && (
            <panda.div className={classNames.rightElement}>
              {inputRightElement}
            </panda.div>
          )}
        </Flex>
        {rightAddon && (
          <panda.div className={classNames.addon} borderRightRadius="sm">
            {rightAddon}
          </panda.div>
        )}
        {stepper && (
          <PrimitiveNumberInputControl className={classNames.stepper}>
            <PrimitiveNumberInputDecrementTrigger
              className={classNames.decrementTrigger}
            >
              <Icon>
                <FiMinus />
              </Icon>
            </PrimitiveNumberInputDecrementTrigger>
            <panda.div w="1px" h="75%" mx={0.5} my="auto" bgColor="gray.600" />
            <PrimitiveNumberInputIncrementTrigger
              className={classNames.incrementTrigger}
            >
              <Icon>
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
