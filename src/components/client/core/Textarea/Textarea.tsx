import { ark } from "@ark-ui/react";

import { panda, Stack } from "generated/panda/jsx";
import { textarea } from "generated/panda/recipes";

import type { TextareaVariantProps } from "generated/panda/recipes";
import type { ComponentProps } from "react";

export interface Props
  extends ComponentProps<typeof PandaTextarea>,
    TextareaVariantProps {
  label?: string;
}

const PandaTextarea = panda(ark.textarea, textarea);
const PandaLabel = panda(ark.label);

/**
 * Core UI textarea.
 */
const Textarea = ({ label, size, ...rest }: Props) => {
  const classNames = textarea({ size });

  return (
    <Stack gap={1.5}>
      <PandaLabel className={classNames.label}>{label}</PandaLabel>

      <PandaTextarea className={classNames.textarea} {...rest} />
    </Stack>
  );
};

export default Textarea;
