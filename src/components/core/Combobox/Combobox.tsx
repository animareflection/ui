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
import { combobox, input } from "generated/panda/recipes";

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
    singular: string;
    plural: string;
  };
  inputProps?: InputProps;
  items: Item[];
}

const Combobox = ({ label, items = [], inputProps, size, ...rest }: Props) => {
  const classNames = combobox({ size });

  const [filteredItems, setFilteredItems] = useState(items);

  const handleChange = (
    evt: Parameters<
      NonNullable<
        ComponentProps<typeof PrimitiveCombobox>["onInputValueChange"]
      >
    >[0],
  ) => {
    const filtered = items.filter((item) =>
      item.label.toLowerCase().includes(evt.value.toLowerCase()),
    );

    setFilteredItems(filtered.length ? filtered : items);
  };

  return (
    <PrimitiveCombobox
      onInputValueChange={handleChange}
      items={filteredItems}
      className={classNames.root}
      {...rest}
    >
      <PrimitiveComboboxLabel className={classNames.label}>
        {label.plural}
      </PrimitiveComboboxLabel>

      <PrimitiveComboboxControl className={classNames.control}>
        <PrimitiveComboboxInput asChild>
          <Input
            className={input({ size, variant: inputProps?.variant }).input}
            placeholder={`Select a ${label.singular.toLowerCase()}...`}
            inputRightElement={
              <PrimitiveComboboxTrigger asChild>
                <Button variant="ghost" aria-label="open" size="xs">
                  <BiExpandVertical />
                </Button>
              </PrimitiveComboboxTrigger>
            }
            {...inputProps}
          />
        </PrimitiveComboboxInput>
      </PrimitiveComboboxControl>

      <PrimitiveComboboxPositioner>
        <PrimitiveComboboxContent className={classNames.content}>
          <PrimitiveComboboxItemGroup
            className={classNames.itemGroup}
            id={label.id}
          >
            <PrimitiveComboboxItemGroupLabel
              className={classNames.itemGroupLabel}
              htmlFor={label.id}
            >
              {label.plural}
            </PrimitiveComboboxItemGroupLabel>

            {filteredItems.map((item) => (
              <PrimitiveComboboxItem
                key={item.value}
                className={classNames.item}
                item={item}
              >
                <Flex align="center" gap={2}>
                  {item.icon}
                  <PrimitiveComboboxItemText className={classNames.itemText}>
                    {item.label}
                  </PrimitiveComboboxItemText>
                </Flex>

                <PrimitiveComboboxItemIndicator
                  className={classNames.itemIndicator}
                >
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
