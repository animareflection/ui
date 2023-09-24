import {
  RadioGroup as PrimitiveRadioGroup,
  RadioLabel,
  Radio,
  RadioControl,
} from "components/primitives";
import { radioGroup } from "generated/panda/recipes";

import type { RadioGroupProps } from "components/primitives";
import type { RadioGroupVariantProps } from "generated/panda/recipes";

export interface RadioGroupRecord {
  value: string;
  label: string;
  disabled?: boolean;
}

export interface Props extends RadioGroupProps, RadioGroupVariantProps {
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
        <Radio
          key={item.value}
          value={item.value}
          disabled={item.disabled}
          className={classNames.radio}
        >
          <RadioControl className={classNames.radioControl} />
          <RadioLabel className={classNames.radioLabel}>
            {item.label}
          </RadioLabel>
        </Radio>
      ))}
    </PrimitiveRadioGroup>
  );
};

export default RadioGroup;
