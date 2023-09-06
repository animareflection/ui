import { ark } from "@ark-ui/react";

import { panda } from "generated/panda/jsx";
import { input } from "generated/panda/recipes";

import type { InputVariantProps } from "generated/panda/recipes";
import type { ComponentProps } from "react";

export type Props = ComponentProps<typeof ark.input> & InputVariantProps;

const PandaInput = panda(ark.input, input);

/**
 * Core UI input.
 */
const Input = ({ size, ...rest }: Props) => (
  <PandaInput className={input({ size })} {...rest} />
);

export default Input;
