import { ark } from "@ark-ui/react";
import { useCallback, useEffect, useRef, useState } from "react";
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
  precision?: number;
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
  precision,
  ...rest
}: Props) => {
  const [value, setValue] = useState((defaultValue as number) ?? 0);

  const inputRef = useRef<HTMLInputElement>(null);

  const classNames = numberInput({ size, variant });

  const handleIncrement = useCallback(() => {
    if ((value ?? 0) + Number(step) > Number(max)) return;
    setValue((prevValue) =>
      precision
        ? Number(((prevValue ?? 0) + Number(step)).toFixed(precision))
        : (prevValue ?? 0) + Number(step),
    );
  }, [step, max, value, precision]);

  const handleDecrement = useCallback(() => {
    if ((value ?? 0) - Number(step) < Number(min)) return;
    setValue((prevValue) =>
      precision
        ? Number(((prevValue ?? 0) - Number(step)).toFixed(precision))
        : (prevValue ?? 0) - Number(step),
    );
  }, [step, min, value, precision]);

  useEffect(() => {
    if (inputRef.current) {
      window.addEventListener(
        "wheel",
        (e) => {
          e.preventDefault();
        },
        { passive: false },
      );
    }

    return () => {
      window.removeEventListener("wheel", (e) => {
        e.preventDefault();
      });
    };
  }, [inputRef.current]);

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
          ref={inputRef}
          defaultValue={defaultValue}
          value={value === 0 ? "" : value}
          step={step}
          min={min}
          max={max}
          onChange={(e) =>
            Number(e.target.value) <= Number(max) &&
            Number(e.target.value) >= Number(min) &&
            setValue(Number(Number(e.target.value).toFixed(precision)))
          }
          className={classNames.input}
          borderTopLeftRadius={leftAddon ? 0 : "sm"}
          borderBottomLeftRadius={leftAddon ? 0 : "sm"}
          borderTopRightRadius={stepper ? 0 : "sm"}
          borderBottomRightRadius={stepper ? 0 : "sm"}
          {...rest}
        />
        {stepper && (
          <Flex className={classNames.stepper}>
            <Icon
              as={FiMinus}
              className={classNames.stepperIcon}
              onClick={handleDecrement}
            />
            <panda.div w="1px" h="75%" mx={0.5} bgColor="fg.default" />
            <Icon
              as={FiPlus}
              className={classNames.stepperIcon}
              borderRightRadius="sm"
              onClick={handleIncrement}
            />
          </Flex>
        )}
      </Flex>
    </Stack>
  );
};

export default Input;
