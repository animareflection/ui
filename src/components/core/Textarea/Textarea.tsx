import {
  PrimitiveTextarea,
  PrimitiveTextareaLabel,
  PrimitiveTextareaTextarea,
} from "components/primitives";

import type { PrimitiveTextareaTextareaProps } from "components/primitives";
import type { TextareaVariantProps } from "generated/panda/recipes";

export interface Props
  extends PrimitiveTextareaTextareaProps,
    TextareaVariantProps {
  label?: string;
}
/**
 * Core UI textarea.
 */
const Textarea = ({ label, size, variant, colorPalette, ...rest }: Props) => {
  return (
    <PrimitiveTextarea
      colorPalette={colorPalette}
      size={size}
      variant={variant}
      gap={1.5}
    >
      <PrimitiveTextareaLabel colorPalette={colorPalette}>
        {label}
      </PrimitiveTextareaLabel>

      <PrimitiveTextareaTextarea {...rest} />
    </PrimitiveTextarea>
  );
};

export default Textarea;
