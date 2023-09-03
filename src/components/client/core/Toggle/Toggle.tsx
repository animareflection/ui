import { useState } from "react";

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

export type Props = Omit<ToggleProps, "children" | "checked"> &
  ToggleVariantProps;

/**
 * Core UI toggle component.
 */
const Toggle = ({ label, defaultChecked, size, ...rest }: Props) => {
  const [isChecked, setIsChecked] = useState(defaultChecked ?? false);

  const classNames = toggle({ size });

  const isMounted = useIsMounted();

  if (!isMounted) return null;

  return (
    <PrimitiveToggle
      checked={isChecked}
      defaultChecked={defaultChecked}
      className={classNames.root}
      {...rest}
    >
      <ToggleControl
        className={classNames.control}
        onClick={() => setIsChecked(!isChecked)}
      >
        <ToggleThumb
          className={classNames.thumb}
          onClick={() => setIsChecked(!isChecked)}
        />
      </ToggleControl>
      {label && <ToggleLabel className={classNames.label}>{label}</ToggleLabel>}
    </PrimitiveToggle>
  );
};

export default Toggle;
