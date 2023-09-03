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

export interface Props
  extends Omit<ToggleProps, "children">,
    ToggleVariantProps {
  label?: string;
  isChecked: boolean;
  setIsChecked: (isChecked: boolean) => void;
}

/**
 * Core UI toggle component.
 */
const Toggle = ({ label, size, isChecked, setIsChecked, ...rest }: Props) => {
  const classNames = toggle({ size });

  const isMounted = useIsMounted();

  if (!isMounted) return null;

  return (
    <PrimitiveToggle checked={isChecked} className={classNames.root} {...rest}>
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
