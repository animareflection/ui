import {
  PrimitiveToggle,
  PrimitiveToggleControl,
  PrimitiveToggleThumb,
  PrimitiveToggleLabel,
} from "components/primitives";
import { useIsClient } from "lib/hooks";

import type { PrimitiveToggleProps } from "components/primitives";
import type { ToggleVariantProps } from "generated/panda/recipes";

export type Props = PrimitiveToggleProps & ToggleVariantProps;

/**
 * Core UI toggle.
 */
const Toggle = ({ label, ...rest }: Props) => {
  const isClient = useIsClient();

  if (!isClient) return null;

  return (
    <PrimitiveToggle {...rest}>
      <PrimitiveToggleControl>
        <PrimitiveToggleThumb />
      </PrimitiveToggleControl>
      {label && <PrimitiveToggleLabel>{label}</PrimitiveToggleLabel>}
    </PrimitiveToggle>
  );
};

export default Toggle;
