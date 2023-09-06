import { ark } from "@ark-ui/react";

import { panda, Stack } from "generated/panda/jsx";
import { input } from "generated/panda/recipes";

import type { InputVariantProps } from "generated/panda/recipes";
import type { ComponentProps } from "react";

export interface Props
  extends ComponentProps<typeof PandaInput>,
    InputVariantProps {
  label?: string;
}

const PandaInput = panda(ark.input, input);
const PandaLabel = panda(ark.label);

/**
 * Core UI input.
 */
const Input = ({ label, size, ...rest }: Props) => {
  const classNames = input({ size });

  return (
    <Stack gap={1.5}>
      <PandaLabel className={classNames.label}>{label}</PandaLabel>
      <PandaInput className={classNames.input} {...rest} />
    </Stack>
  );
};

export default Input;
