import {
  Switch as PrimitiveSwitch,
  SwitchControl,
  SwitchThumb,
  SwitchLabel,
} from "components/primitives";
import { switchRecipe } from "generated/panda/recipes";
import { useIsMounted } from "lib/hooks";

import type { SwitchProps } from "components/primitives";
import type { SwitchRecipeVariantProps } from "generated/panda/recipes";

export interface Props extends SwitchProps, SwitchRecipeVariantProps {
  label?: string;
}

const Switch = ({ label, size, ...rest }: Props) => {
  const classNames = switchRecipe({ size });

  const isMounted = useIsMounted();

  if (!isMounted) return null;

  return (
    <PrimitiveSwitch className={classNames.root} {...rest}>
      <SwitchControl className={classNames.control}>
        <SwitchThumb className={classNames.thumb} />
      </SwitchControl>
      {label && <SwitchLabel className={classNames.label}>{label}</SwitchLabel>}
    </PrimitiveSwitch>
  );
};

export default Switch;
