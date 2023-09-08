import { ark } from "@ark-ui/react";
import { useCallback, useEffect, useRef, useState } from "react";
import { FiMinus, FiPlus } from "react-icons/fi";

import Button from "components/client/core/Button/Button";
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
const NumberInput = ({
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
    if (value + Number(step) > Number(max)) return;
    setValue((prevValue) =>
      precision
        ? Number((prevValue + Number(step)).toFixed(precision))
        : prevValue + Number(step),
    );
  }, [step, max, value, precision]);

  const handleDecrement = useCallback(() => {
    if (value - Number(step) < Number(min)) return;
    setValue((prevValue) =>
      precision
        ? Number((prevValue - Number(step)).toFixed(precision))
        : prevValue - Number(step),
    );
  }, [step, min, value, precision]);

  const STEPPER_BUTTONS = [
    {
      label: "Decrement",
      onClick: handleDecrement,
      icon: FiMinus,
    },
    {
      label: "Increment",
      onClick: handleIncrement,
      icon: FiPlus,
    },
  ];

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
            {STEPPER_BUTTONS.map(({ label, onClick, icon }) => (
              <>
                <Button
                  onClick={onClick}
                  bgColor={{
                    base: "border.default",
                    _hover: "bg.subtle",
                  }}
                  p={0}
                  w="100%"
                  h="100%"
                  color="fg.default"
                  borderRadius="sm"
                  aria-label={label}
                >
                  <Icon as={icon} className={classNames.stepperIcon} px={3} />
                </Button>
                {label === "Decrement" && (
                  <panda.div w="1px" h="75%" mx={0.5} bgColor="gray.600" />
                )}
              </>
            ))}
          </Flex>
        )}
      </Flex>
    </Stack>
  );
};

export default NumberInput;
