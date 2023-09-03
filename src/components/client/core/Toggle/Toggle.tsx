import {
  Toggle as PrimitiveToggle,
  ToggleControl,
  ToggleThumb,
  ToggleLabel,
} from "components/primitives";
import { toggle } from "generated/panda/recipes";
import { useIsMounted } from "lib/hooks";

import type { ToggleProps } from "components/primitives";
import type { ToggleVariantProps } from "generated/panda/recipes";

export type Props = Omit<ToggleProps, "children"> & ToggleVariantProps;

/**
 * Core UI toggle component.
 */
const Toggle = ({ label, size, ...rest }: Props) => {
  const classNames = toggle({ size });

  const isMounted = useIsMounted();

  if (!isMounted) return null;

  return (
    <PrimitiveToggle className={classNames.root} {...rest}>
      {({ isChecked, setChecked }) => (
        <>
          <ToggleControl
            className={classNames.control}
            onClick={() => setChecked(!isChecked)}
          >
            <ToggleThumb
              className={classNames.thumb}
              onClick={() => setChecked(!isChecked)}
            />
          </ToggleControl>
          {label && (
            <ToggleLabel className={classNames.label}>{label}</ToggleLabel>
          )}
        </>
      )}
    </PrimitiveToggle>
  );
};

export default Toggle;
