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
import type {
  PrimitiveComboboxContentProps,
  PrimitiveComboboxControlProps,
  PrimitiveComboboxItemGroupLabelProps,
  PrimitiveComboboxItemProps,
  PrimitiveComboboxLabelProps,
  PrimitiveComboboxPositionerProps,
  PrimitiveComboboxProps,
} from "components/primitives";
import type { ComboboxVariantProps } from "generated/panda/recipes";
import type { ReactNode } from "react";

interface Item {
  label: string;
  value: string;
  itemProps?: PrimitiveComboboxItemProps;
  icon?: ReactNode;
  disabled?: boolean;
}

interface Group {
  label: {
    id: string;
    singular: string;
    plural: string;
    props?: PrimitiveComboboxItemGroupLabelProps;
    display?: boolean;
  };
  items: Item[];
}

export interface Props
  extends Omit<PrimitiveComboboxProps, "items" | "content">,
    ComboboxVariantProps {
  label: {
    singular: string;
    plural: string;
    props?: PrimitiveComboboxLabelProps;
    display?: boolean;
  };
  /** Custom content render override. */
  content?: ReactNode;
  groups: Group[];
  itemIndicator?: boolean;
  triggerEnabled?: boolean;
  inputProps?: Omit<InputProps, "size">;
  contentProps?: PrimitiveComboboxContentProps;
  controlProps?: PrimitiveComboboxControlProps;
  positionerProps?: PrimitiveComboboxPositionerProps;
  itemGroupProps?: Omit<PrimitiveComboboxItemGroupLabelProps, "htmlFor">;
}

const Combobox = ({
  label,
  content,
  groups = [],
  itemIndicator = false,
  triggerEnabled = true,
  inputProps,
  contentProps,
  controlProps,
  positionerProps,
  itemGroupProps,
  size,
  ...rest
}: Props) => {
  const allItems = groups.flatMap((group) => group.items);
  const [filteredItems, setFilteredItems] = useState(allItems);

  // We could throw an error here like so (for descriptiive runtime error purposes):
  // if (controlledItems && !setControlledItems) {
  //   throw new Error(
  //     "You must provide a `setControlledItems` callback when using `controlledItems`.",
  //   );
  // }

  const handleChange = (
    evt: Parameters<
      NonNullable<PrimitiveComboboxProps["onInputValueChange"]>
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
        <PrimitiveComboboxLabel {...label.props}>
          {label.plural}
        </PrimitiveComboboxLabel>
      )}

      <PrimitiveComboboxControl {...controlProps}>
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
                    color={{ base: "fg.default", _hover: "colorPalette.500" }}
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

      <PrimitiveComboboxPositioner {...positionerProps}>
        <PrimitiveComboboxContent {...contentProps}>
          {content ||
            groups.map(
              (group) =>
                group.items.some((item) => filteredItems.includes(item)) && (
                  <PrimitiveComboboxItemGroup
                    key={group.label.id}
                    id={group.label.id}
                    {...itemGroupProps}
                  >
                    {group.label.display && (
                      <PrimitiveComboboxItemGroupLabel
                        htmlFor={group.label.id}
                        {...group.label.props}
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
