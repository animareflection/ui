import {
  Checkbox as PrimitiveCheckbox,
  CheckboxControl,
  CheckboxLabel,
} from "components/primitives";
import { checkbox } from "generated/panda/recipes";

import type { CheckboxProps } from "components/primitives";
import type { CheckboxVariantProps } from "generated/panda/recipes";

export interface Props extends CheckboxProps, CheckboxVariantProps {
  label?: string;
}

/**
 * Core UI checkbox.
 */
const Checkbox = ({ children, size, label, ...rest }: Props) => {
  const classNames = checkbox({ size });

  return (
    <PrimitiveCheckbox className={classNames.root} {...rest}>
      {(ctx) => (
        <>
          {label && (
            <CheckboxLabel className={classNames.label}>{label}</CheckboxLabel>
          )}
          <CheckboxControl className={classNames.control}>
            {typeof children === "function" ? children(ctx) : children}
          </CheckboxControl>
        </>
      )}
    </PrimitiveCheckbox>
  );
};

export default Checkbox;
