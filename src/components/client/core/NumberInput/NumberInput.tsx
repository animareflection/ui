import { ark } from "@ark-ui/react";
import { useCallback, useState } from "react";
import { FiMinus, FiPlus } from "react-icons/fi";

import Icon from "components/client/core/Icon/Icon";
import { Flex, panda, Stack } from "generated/panda/jsx";
import { numberInput } from "generated/panda/recipes";

import type { InputVariantProps } from "generated/panda/recipes";
import type { ComponentProps, ReactNode } from "react";

export interface Props
  extends ComponentProps<typeof PandaInput>,
    InputVariantProps {
  label?: string;
  leftAddon?: ReactNode;
  stepper?: boolean;
}

const PandaInput = panda(ark.input, numberInput);
const PandaLabel = panda(ark.label);

/**
 * Core UI number input.
 */
const Input = ({
  label,
  leftAddon,
  stepper,
  variant,
  size,
  defaultValue,
  step = 1,
  min = Number.MIN_SAFE_INTEGER,
  max = Number.MAX_SAFE_INTEGER,
  ...rest
}: Props) => {
  const [value, setValue] = useState<number | undefined>(
    (defaultValue as number) ?? undefined,
  );

  const classNames = numberInput({ size, variant });

  const handleIncrement = useCallback(() => {
    if ((value ?? 0) + Number(step) > Number(max)) return;
    setValue((prevValue) => (prevValue ?? 0) + Number(step));
  }, [step, max, value]);

  const handleDecrement = useCallback(() => {
    if ((value ?? 0) - Number(step) < Number(min)) return;
    setValue((prevValue) => (prevValue ?? 0) - Number(step));
  }, [step, min, value]);

  return (
    <Stack gap={1.5}>
      <PandaLabel className={classNames.label}>{label}</PandaLabel>
      <Flex>
        {leftAddon && (
          <panda.div className={classNames.addon} borderLeftRadius="sm">
            {leftAddon}
          </panda.div>
        )}
        <PandaInput
          type="number"
          defaultValue={defaultValue}
          value={value}
          step={step}
          min={min}
          max={max}
          className={classNames.input}
          borderTopLeftRadius={leftAddon ? 0 : "sm"}
          borderBottomLeftRadius={leftAddon ? 0 : "sm"}
          borderTopRightRadius={stepper ? 0 : "sm"}
          borderBottomRightRadius={stepper ? 0 : "sm"}
          {...rest}
        />
        {stepper && (
          <Flex
            align="center"
            borderRightRadius="sm"
            className={classNames.stepper}
          >
            <Icon
              as={FiMinus}
              w="100%"
              h="100%"
              cursor="pointer"
              _hover={{
                backgroundColor: "bg.subtle",
              }}
              px={3}
              onClick={handleDecrement}
            />
            <panda.div w="1px" h="75%" mx={0.5} bgColor="fg.default" />
            <Icon
              as={FiPlus}
              w="100%"
              h="100%"
              cursor="pointer"
              _hover={{
                backgroundColor: "bg.subtle",
              }}
              borderRightRadius="sm"
              px={3}
              onClick={handleIncrement}
            />
          </Flex>
        )}
      </Flex>
    </Stack>
  );
};

export default Input;
