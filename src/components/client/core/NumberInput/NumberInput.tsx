import { FiMinus, FiPlus } from "react-icons/fi";

import Icon from "components/client/core/Icon/Icon";
import {
  NumberInput as PrimitiveNumberInput,
  NumberInputControl,
  NumberInputDecrementTrigger,
  NumberInputIncrementTrigger,
  NumberInputInput,
  NumberInputLabel,
  NumberInputScrubber,
} from "components/primitives";
import { Flex, panda } from "generated/panda/jsx";
import { numberInput } from "generated/panda/recipes";

import type { NumberInputProps } from "components/primitives";
import type { NumberInputVariantProps } from "generated/panda/recipes";
import type { ReactNode } from "react";

export interface Props extends NumberInputProps, NumberInputVariantProps {
  label?: string;
  leftAddon?: ReactNode;
  rightAddon?: ReactNode;
  inputLeftElement?: ReactNode;
  inputRightElement?: ReactNode;
  stepper?: boolean;
  placeholder?: string;
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
  ...rest
}: Props) => {
  const classNames = numberInput({ size, variant });

  return (
    <PrimitiveNumberInput {...rest}>
      <NumberInputScrubber />
      {label && (
        <NumberInputLabel className={classNames.label}>
          {label}
        </NumberInputLabel>
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
          <NumberInputInput
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
          <NumberInputControl className={classNames.stepper}>
            <NumberInputDecrementTrigger className={classNames.stepperTrigger}>
              <Icon className={classNames.stepperIcon}>
                <FiMinus />
              </Icon>
            </NumberInputDecrementTrigger>
            <panda.div w="1px" h="75%" mx={0.5} my="auto" bgColor="gray.600" />
            <NumberInputIncrementTrigger className={classNames.stepperTrigger}>
              <Icon className={classNames.stepperIcon}>
                <FiPlus />
              </Icon>
            </NumberInputIncrementTrigger>
          </NumberInputControl>
        )}
      </Flex>
    </PrimitiveNumberInput>
  );
};

export default NumberInput;
