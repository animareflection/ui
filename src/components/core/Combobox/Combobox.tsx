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

import type { CollectionItem } from "@ark-ui/react";
import type { ComboboxProps as ArkComboboxProps } from "@ark-ui/react/combobox";
import type { Props as InputProps } from "components/core/Input/Input";
import type { ComboboxVariantProps } from "generated/panda/recipes";

export interface Props<T extends CollectionItem>
  extends ArkComboboxProps<T>,
    ComboboxVariantProps {
  label: {
    // TODO calculate ID from singular (add dashes, lowercase, etc.)
    id: string;
    singular: string;
    plural: string;
  };
  inputProps?: InputProps;
}

const Combobox = ({
  label,
  items = [],
  inputProps,
  ...rest
}: Props<CollectionItem>) => {
  return (
    <PrimitiveCombobox width="2xs" items={items} {...rest}>
      <PrimitiveComboboxLabel>{label.plural}</PrimitiveComboboxLabel>

      <PrimitiveComboboxControl>
        <PrimitiveComboboxInput
          asChild
          placeholder={`Select a ${label.singular.toLowerCase()}...`}
        >
          <Input {...inputProps} />
        </PrimitiveComboboxInput>

        <PrimitiveComboboxTrigger asChild>
          <Button variant="ghost" aria-label="open" size="xs">
            <BiExpandVertical />
          </Button>
        </PrimitiveComboboxTrigger>
      </PrimitiveComboboxControl>

      <PrimitiveComboboxPositioner>
        <PrimitiveComboboxContent>
          <PrimitiveComboboxItemGroup id={label.id}>
            <PrimitiveComboboxItemGroupLabel htmlFor={label.id}>
              {label.plural}
            </PrimitiveComboboxItemGroupLabel>

            {items.map((item) => (
              // @ts-ignore upstream (Ark `CollectionItem`) type bug
              <PrimitiveComboboxItem key={item.value} item={item}>
                <PrimitiveComboboxItemText>
                  {/* @ts-ignore upstream (Ark `CollectionItem`) type bug */}
                  {item.label}
                </PrimitiveComboboxItemText>

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
