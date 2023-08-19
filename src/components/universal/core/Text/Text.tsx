import { panda } from "generated/panda/jsx";
import { text } from "generated/panda/recipes";

import type { TextVariantProps } from "generated/panda/recipes";
import type { ComponentProps } from "react";

export type Props = ComponentProps<typeof PandaText> & TextVariantProps;

const PandaText = panda("p", text);

/**
 * Core UI text (typography).
 */
const Text = ({ size, children, ...rest }: Props) => (
  <PandaText className={text({ size })} {...rest}>
    {children}
  </PandaText>
);

export default Text;
