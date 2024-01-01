import {
  Combobox,
  ComboboxClearTrigger,
  ComboboxContent,
  ComboboxControl,
  ComboboxInput,
  ComboboxItem,
  ComboboxItemGroup,
  ComboboxItemGroupLabel,
  ComboboxItemIndicator,
  ComboboxItemText,
  ComboboxLabel,
  ComboboxPositioner,
  ComboboxTrigger,
} from "@ark-ui/react";

import { panda } from "generated/panda/jsx";
import { combobox } from "generated/panda/recipes";
import { createStyleContext } from "lib/util";

import type { ComponentProps } from "react";

const { withProvider, withContext } = createStyleContext(combobox);

/**
 * Core UI combobox primitives.
 */
export type PrimitiveComboboxProps = ComponentProps<typeof PrimitiveCombobox>;
const PrimitiveCombobox = withProvider(panda(Combobox), "root");

export type PrimitiveComboboxClearTriggerProps = ComponentProps<
  typeof PrimitiveComboboxClearTrigger
>;
export const PrimitiveComboboxClearTrigger = withContext(
  panda(ComboboxClearTrigger),
  "clearTrigger",
);

export type PrimitiveComboboxContentProps = ComponentProps<
  typeof PrimitiveComboboxContent
>;
export const PrimitiveComboboxContent = withContext(
  panda(ComboboxContent),
  "content",
);

export type PrimitiveComboboxControlProps = ComponentProps<
  typeof PrimitiveComboboxControl
>;
export const PrimitiveComboboxControl = withContext(
  panda(ComboboxControl),
  "control",
);

export type PrimitiveComboboxInputProps = ComponentProps<
  typeof PrimitiveComboboxInput
>;
export const PrimitiveComboboxInput = withContext(
  panda(ComboboxInput),
  "input",
);

export type PrimitiveComboboxItemProps = ComponentProps<
  typeof PrimitiveComboboxItem
>;
export const PrimitiveComboboxItem = withContext(panda(ComboboxItem), "item");

export type PrimitiveComboboxItemGroupProps = ComponentProps<
  typeof PrimitiveComboboxItemGroup
>;
export const PrimitiveComboboxItemGroup = withContext(
  panda(ComboboxItemGroup),
  "itemGroup",
);

export type PrimitiveComboboxItemGroupLabelProps = ComponentProps<
  typeof PrimitiveComboboxItemGroupLabel
>;
export const PrimitiveComboboxItemGroupLabel = withContext(
  panda(ComboboxItemGroupLabel),
  "itemGroupLabel",
);

export type PrimitiveComboboxItemIndicatorProps = ComponentProps<
  typeof PrimitiveComboboxItemIndicator
>;
export const PrimitiveComboboxItemIndicator = withContext(
  panda(ComboboxItemIndicator),
  "itemIndicator",
);

export type PrimitiveComboboxItemTextProps = ComponentProps<
  typeof PrimitiveComboboxItemText
>;
export const PrimitiveComboboxItemText = withContext(
  panda(ComboboxItemText),
  "itemText",
);

export type PrimitiveComboboxLabelProps = ComponentProps<
  typeof PrimitiveComboboxLabel
>;
export const PrimitiveComboboxLabel = withContext(
  panda(ComboboxLabel),
  "label",
);

export type PrimitiveComboboxPositionerProps = ComponentProps<
  typeof PrimitiveComboboxPositioner
>;
export const PrimitiveComboboxPositioner = withContext(
  panda(ComboboxPositioner),
  "positioner",
);

export type PrimitiveComboboxTriggerProps = ComponentProps<
  typeof PrimitiveComboboxTrigger
>;
export const PrimitiveComboboxTrigger = withContext(
  panda(ComboboxTrigger),
  "trigger",
);

export default PrimitiveCombobox;
