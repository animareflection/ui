import { useState } from "react";
import { BiCheck, BiExpandVertical } from "react-icons/bi";

import Button from "components/core/Button/Button";
import Input from "components/core/Input/Input";
import {
  PrimitiveCombobox,
  PrimitiveComboboxContent,
  PrimitiveComboboxControl,
  PrimitiveComboboxInput,
  PrimitiveComboboxItem,
  PrimitiveComboboxItemGroup,
  PrimitiveComboboxItemGroupLabel,
  PrimitiveComboboxItemIndicator,
  PrimitiveComboboxItemText,
  PrimitiveComboboxLabel,
  PrimitiveComboboxPositioner,
  PrimitiveComboboxTrigger,
} from "components/primitives";
import { Flex } from "generated/panda/jsx";

import type { Props as InputProps } from "components/core/Input/Input";
import type { PrimitiveComboboxProps } from "components/primitives";
import type { ComboboxVariantProps } from "generated/panda/recipes";
import type { ComponentProps, ReactNode } from "react";

interface Item {
  label: string;
  value: string;
  icon?: ReactNode;
  disabled?: boolean;
}

export interface Props extends PrimitiveComboboxProps, ComboboxVariantProps {
  label: {
    // TODO calculate ID from singular (add dashes, lowercase, etc.)
    id: string;
    display?: boolean;
    singular: string;
    plural: string;
  };
  items: Item[];
  triggerEnabled?: boolean;
  inputProps?: InputProps;
}

const Combobox = ({
  label,
  items = [],
  triggerEnabled = true,
  inputProps,
  ...rest
}: Props) => {
  const [filteredItems, setFilteredItems] = useState(items);

  const handleChange = (
    evt: Parameters<
      NonNullable<
        ComponentProps<typeof PrimitiveCombobox>["onInputValueChange"]
      >
    >[0],
  ) => {
    const filtered = items.filter(
      (item) =>
        item.label.toLowerCase().includes(evt.value.toLowerCase()) ||
        item.value.toLowerCase().includes(evt.value.toLowerCase()),
    );

    setFilteredItems(filtered.length ? filtered : items);
  };

  return (
    <PrimitiveCombobox
      onInputValueChange={handleChange}
      items={filteredItems}
      {...rest}
    >
      {label.display && (
        <PrimitiveComboboxLabel>{label.plural}</PrimitiveComboboxLabel>
      )}

      <PrimitiveComboboxControl>
        <PrimitiveComboboxInput asChild>
          <Input
            placeholder={
              inputProps?.placeholder
                ? inputProps.placeholder
                : `Select a ${label.singular.toLowerCase()}...`
            }
            inputRightElement={
              triggerEnabled ? (
                <PrimitiveComboboxTrigger asChild>
                  <Button variant="ghost" aria-label="open options" size="xs">
                    <BiExpandVertical />
                  </Button>
                </PrimitiveComboboxTrigger>
              ) : (
                inputProps?.inputRightElement
              )
            }
            {...inputProps}
          />
        </PrimitiveComboboxInput>
      </PrimitiveComboboxControl>

      <PrimitiveComboboxPositioner>
        <PrimitiveComboboxContent>
          <PrimitiveComboboxItemGroup id={label.id}>
            <PrimitiveComboboxItemGroupLabel htmlFor={label.id}>
              {label.plural}
            </PrimitiveComboboxItemGroupLabel>

            {filteredItems.map((item) => (
              <PrimitiveComboboxItem key={item.value} item={item}>
                <Flex align="center" gap={2}>
                  {item.icon}
                  <PrimitiveComboboxItemText>
                    {item.label}
                  </PrimitiveComboboxItemText>
                </Flex>

                <PrimitiveComboboxItemIndicator>
                  <BiCheck />
                </PrimitiveComboboxItemIndicator>
              </PrimitiveComboboxItem>
            ))}
          </PrimitiveComboboxItemGroup>
        </PrimitiveComboboxContent>
      </PrimitiveComboboxPositioner>
    </PrimitiveCombobox>
  );
};

export default Combobox;
