import {
  PrimitiveRadioGroup,
  PrimitiveRadioLabel,
  PrimitiveRadio,
  PrimitiveRadioControl,
} from "components/primitives";
import { radioGroup } from "generated/panda/recipes";

import type { PrimitiveRadioGroupProps } from "components/primitives";
import type { RadioGroupVariantProps } from "generated/panda/recipes";

export interface RadioGroupRecord {
  value: string;
  label: string;
  disabled?: boolean;
}

export interface Props
  extends PrimitiveRadioGroupProps,
    RadioGroupVariantProps {
  items: RadioGroupRecord[];
}

/**
 * Core UI radio group.
 */
const RadioGroup = ({
  items,
  defaultValue,
  orientation = "vertical",
  size,
  ...rest
}: Props) => {
  const classNames = radioGroup({ size });

  return (
    <PrimitiveRadioGroup
      className={classNames.root}
      defaultValue={defaultValue}
      orientation={orientation}
      {...rest}
    >
      {items.map((item) => (
        <PrimitiveRadio
          key={item.value}
          value={item.value}
          disabled={item.disabled}
          className={classNames.radio}
        >
          <PrimitiveRadioControl className={classNames.radioControl} />
          <PrimitiveRadioLabel className={classNames.radioLabel}>
            {item.label}
          </PrimitiveRadioLabel>
        </PrimitiveRadio>
      ))}
    </PrimitiveRadioGroup>
  );
};

export default RadioGroup;
