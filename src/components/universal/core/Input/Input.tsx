import { ark } from "@ark-ui/react";

import { Flex, panda, Stack } from "generated/panda/jsx";
import { input } from "generated/panda/recipes";

import type { InputVariantProps } from "generated/panda/recipes";
import type { ComponentProps, ReactNode } from "react";

export interface Props
  extends ComponentProps<typeof PandaInput>,
    InputVariantProps {
  label?: string;
  leftAddon?: ReactNode;
  rightAddon?: ReactNode;
}

const PandaInput = panda(ark.input, input);
const PandaLabel = panda(ark.label);

/**
 * Core UI input.
 */
const Input = ({
  label,
  leftAddon,
  rightAddon,
  variant,
  size,
  ...rest
}: Props) => {
  const classNames = input({ size, variant });

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
          className={classNames.input}
          borderTopLeftRadius={leftAddon ? 0 : "sm"}
          borderBottomLeftRadius={leftAddon ? 0 : "sm"}
          borderTopRightRadius={rightAddon ? 0 : "sm"}
          borderBottomRightRadius={rightAddon ? 0 : "sm"}
          {...rest}
        />
        {rightAddon && (
          <panda.div className={classNames.addon} borderRightRadius="sm">
            {rightAddon}
          </panda.div>
        )}
      </Flex>
    </Stack>
  );
};

export default Input;
