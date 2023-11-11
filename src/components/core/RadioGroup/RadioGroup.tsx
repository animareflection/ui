import {
  PrimitiveRadioGroup,
  PrimitiveRadioGroupLabel,
  PrimitiveRadioGroupItem,
  PrimitiveRadioGroupItemControl,
} from "components/primitives";
import { radioGroup } from "generated/panda/recipes";
import { useIsClient } from "lib/hooks";

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

  const isClient = useIsClient();

  if (!isClient) return null;

  return (
    <PrimitiveRadioGroup
      className={classNames.root}
      defaultValue={defaultValue}
      orientation={orientation}
      {...rest}
    >
      {items.map((item) => (
        <PrimitiveRadioGroupItem
          key={item.value}
          value={item.value}
          disabled={item.disabled}
          className={classNames.item}
        >
          <PrimitiveRadioGroupItemControl className={classNames.itemControl} />
          <PrimitiveRadioGroupLabel className={classNames.label}>
            {item.label}
          </PrimitiveRadioGroupLabel>
        </PrimitiveRadioGroupItem>
      ))}
    </PrimitiveRadioGroup>
  );
};

export default RadioGroup;
