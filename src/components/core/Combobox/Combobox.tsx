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
  itemProps?: ComponentProps<typeof PrimitiveComboboxItem>;
  icon?: ReactNode;
  disabled?: boolean;
}

interface Group {
  label: {
    id: string;
    singular: string;
    plural: string;
    labelProps?: ComponentProps<typeof PrimitiveComboboxItemGroupLabel>;
    display?: boolean;
  };
  items: Item[];
}

export interface Props
  extends Omit<PrimitiveComboboxProps, "items">,
    ComboboxVariantProps {
  groups: Group[];
  label: {
    singular: string;
    plural: string;
    labelProps?: ComponentProps<typeof PrimitiveComboboxLabel>;
    display?: boolean;
  };
  itemIndicator?: boolean;
  triggerEnabled?: boolean;
  inputProps?: Omit<InputProps, "size">;
}

const Combobox = ({
  label,
  groups = [],
  itemIndicator = false,
  triggerEnabled = true,
  inputProps,
  size,
  ...rest
}: Props) => {
  const allItems = groups.flatMap((group) => group.items);
  const [filteredItems, setFilteredItems] = useState(allItems);

  const handleChange = (
    evt: Parameters<
      NonNullable<
        ComponentProps<typeof PrimitiveCombobox>["onInputValueChange"]
      >
    >[0],
  ) => {
    const filtered = allItems.filter(
      (item) =>
        item.label.toLowerCase().includes(evt.value.toLowerCase()) ||
        item.value.toLowerCase().includes(evt.value.toLowerCase()),
    );

    setFilteredItems(filtered.length ? filtered : allItems);
  };

  return (
    <PrimitiveCombobox
      onInputValueChange={handleChange}
      items={filteredItems}
      size={size}
      {...rest}
    >
      {label.display && (
        <PrimitiveComboboxLabel {...label.labelProps}>
          {label.plural}
        </PrimitiveComboboxLabel>
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
                  <Button
                    bgColor="transparent"
                    color={{ base: "fg.default", _hover: "accent.default" }}
                    size={size}
                    aria-label="open options"
                  >
                    <BiExpandVertical />
                  </Button>
                </PrimitiveComboboxTrigger>
              ) : (
                inputProps?.inputRightElement
              )
            }
            size={size}
            {...inputProps}
          />
        </PrimitiveComboboxInput>
      </PrimitiveComboboxControl>

      <PrimitiveComboboxPositioner>
        <PrimitiveComboboxContent>
          {groups.map(
            (group) =>
              group.items.some((item) => filteredItems.includes(item)) && (
                <PrimitiveComboboxItemGroup
                  key={group.label.id}
                  id={group.label.id}
                >
                  {group.label.display && (
                    <PrimitiveComboboxItemGroupLabel
                      htmlFor={group.label.id}
                      {...group.label.labelProps}
                    >
                      {group.label.plural}
                    </PrimitiveComboboxItemGroupLabel>
                  )}

                  {group.items.map(
                    (item) =>
                      filteredItems.includes(item) && (
                        <PrimitiveComboboxItem
                          key={item.value}
                          item={item}
                          {...item.itemProps}
                        >
                          <Flex align="center" gap={2}>
                            {item.icon}
                            <PrimitiveComboboxItemText>
                              {item.label}
                            </PrimitiveComboboxItemText>
                          </Flex>

                          {itemIndicator && (
                            <PrimitiveComboboxItemIndicator>
                              <BiCheck />
                            </PrimitiveComboboxItemIndicator>
                          )}
                        </PrimitiveComboboxItem>
                      ),
                  )}
                </PrimitiveComboboxItemGroup>
              ),
          )}
        </PrimitiveComboboxContent>
      </PrimitiveComboboxPositioner>
    </PrimitiveCombobox>
  );
};

export default Combobox;
