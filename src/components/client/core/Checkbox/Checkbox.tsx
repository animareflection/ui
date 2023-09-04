import {
  Checkbox as PrimitiveCheckbox,
  CheckboxControl,
  CheckboxLabel,
} from "components/primitives";
import { checkbox } from "generated/panda/recipes";

import type { CheckboxProps } from "components/primitives";
import type { CheckboxVariantProps } from "generated/panda/recipes";

export interface Props extends CheckboxProps, CheckboxVariantProps {
  label: string;
}

/**
 * Core UI checkbox.
 */
const Checkbox = ({ size, label, ...rest }: Props) => {
  const classNames = checkbox({ size });

  return (
    <PrimitiveCheckbox className={classNames.root} {...rest}>
      {({ isChecked }) => (
        <>
          <CheckboxControl className={classNames.control}>
            {isChecked && (
              <svg
                viewBox="0 0 14 14"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M11.6666 3.5L5.24992 9.91667L2.33325 7"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            )}
          </CheckboxControl>
          <CheckboxLabel className={classNames.label}>{label}</CheckboxLabel>
        </>
      )}
    </PrimitiveCheckbox>
  );
};

export default Checkbox;
