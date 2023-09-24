import {
  PrimitiveToggle,
  PrimitiveToggleControl,
  PrimitiveToggleThumb,
  PrimitiveToggleLabel,
} from "components/primitives";
import { toggle } from "generated/panda/recipes";
import { useIsMounted } from "lib/hooks";

import type { PrimitiveToggleProps } from "components/primitives";
import type { ToggleVariantProps } from "generated/panda/recipes";

export type Props = PrimitiveToggleProps & ToggleVariantProps;

/**
 * Core UI toggle.
 */
const Toggle = ({ label, size, ...rest }: Props) => {
  const classNames = toggle({ size });

  const isMounted = useIsMounted();

  if (!isMounted) return null;

  return (
    <PrimitiveToggle className={classNames.root} {...rest}>
      <PrimitiveToggleControl className={classNames.control}>
        <PrimitiveToggleThumb className={classNames.thumb} />
      </PrimitiveToggleControl>
      {label && (
        <PrimitiveToggleLabel className={classNames.label}>
          {label}
        </PrimitiveToggleLabel>
      )}
    </PrimitiveToggle>
  );
};

export default Toggle;
