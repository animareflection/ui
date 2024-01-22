import Text from "components/core/Text/Text";
import {
  PrimitiveRadioGroup,
  PrimitiveRadioGroupItem,
  PrimitiveRadioGroupItemControl,
  PrimitiveRadioGroupItemText,
} from "components/primitives";
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
 * Radio group.
 */
const RadioGroup = ({
  items,
  defaultValue,
  orientation = "vertical",
  ...rest
}: Props) => {
  const isClient = useIsClient();

  if (!isClient) return null;

  return (
    <PrimitiveRadioGroup
      defaultValue={defaultValue}
      orientation={orientation}
      {...rest}
    >
      {items.map((item) => (
        <PrimitiveRadioGroupItem
          key={item.value}
          value={item.value}
          disabled={item.disabled}
        >
          <PrimitiveRadioGroupItemControl />
          <PrimitiveRadioGroupItemText>
            <Text>{item.label}</Text>
          </PrimitiveRadioGroupItemText>
        </PrimitiveRadioGroupItem>
      ))}
    </PrimitiveRadioGroup>
  );
};

export default RadioGroup;
