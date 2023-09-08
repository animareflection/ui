import { FiMinus, FiPlus } from "react-icons/fi";

import Button from "components/client/core/Button/Button";
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
        <NumberInputInput
          className={classNames.input}
          placeholder={placeholder}
          borderTopLeftRadius={leftAddon ? 0 : "sm"}
          borderBottomLeftRadius={leftAddon ? 0 : "sm"}
          borderTopRightRadius={stepper ? 0 : "sm"}
          borderBottomRightRadius={stepper ? 0 : "sm"}
        />
        {stepper && (
          <NumberInputControl className={classNames.stepper}>
            <NumberInputDecrementTrigger asChild>
              <Button
                bgColor={{
                  base: "border.default",
                  _hover: "bg.subtle",
                  _disabled: {
                    _hover: "border.default",
                  },
                }}
                p={0}
                w="100%"
                h="100%"
                color="fg.default"
                borderRadius="sm"
              >
                <Icon as={FiMinus} className={classNames.stepperIcon} />
              </Button>
            </NumberInputDecrementTrigger>
            <panda.div w="1px" h="75%" mx={0.5} my="auto" bgColor="gray.600" />
            <NumberInputIncrementTrigger asChild>
              <Button
                bgColor={{
                  base: "border.default",
                  _hover: "bg.subtle",
                  _disabled: {
                    _hover: "border.default",
                  },
                }}
                p={0}
                w="100%"
                h="100%"
                color="fg.default"
                borderRadius="sm"
              >
                <Icon as={FiPlus} className={classNames.stepperIcon} />
              </Button>
            </NumberInputIncrementTrigger>
          </NumberInputControl>
        )}
      </Flex>
    </PrimitiveNumberInput>
  );
};

export default NumberInput;
