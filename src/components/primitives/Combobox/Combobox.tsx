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

import type { ComponentProps } from "react";

/**
 * Core UI combobox primitives.
 */
export type PrimitiveComboboxProps = ComponentProps<typeof PrimitiveCombobox>;
const PrimitiveCombobox = panda(Combobox);

export type PrimitiveComboboxClearTriggerProps = ComponentProps<
  typeof PrimitiveComboboxClearTrigger
>;
export const PrimitiveComboboxClearTrigger = panda(ComboboxClearTrigger);

export type PrimitiveComboboxContentProps = ComponentProps<
  typeof PrimitiveComboboxContent
>;
export const PrimitiveComboboxContent = panda(ComboboxContent);

export type PrimitiveComboboxControlProps = ComponentProps<
  typeof PrimitiveComboboxControl
>;
export const PrimitiveComboboxControl = panda(ComboboxControl);

export type PrimitiveComboboxInputProps = ComponentProps<
  typeof PrimitiveComboboxInput
>;
export const PrimitiveComboboxInput = panda(ComboboxInput);

export type PrimitiveComboboxItemProps = ComponentProps<
  typeof PrimitiveComboboxItem
>;
export const PrimitiveComboboxItem = panda(ComboboxItem);

export type PrimitiveComboboxItemGroupProps = ComponentProps<
  typeof PrimitiveComboboxItemGroup
>;
export const PrimitiveComboboxItemGroup = panda(ComboboxItemGroup);

export type PrimitiveComboboxItemGroupLabelProps = ComponentProps<
  typeof PrimitiveComboboxItemGroupLabel
>;
export const PrimitiveComboboxItemGroupLabel = panda(ComboboxItemGroupLabel);

export type PrimitiveComboboxItemIndicatorProps = ComponentProps<
  typeof PrimitiveComboboxItemIndicator
>;
export const PrimitiveComboboxItemIndicator = panda(ComboboxItemIndicator);

export type PrimitiveComboboxItemTextProps = ComponentProps<
  typeof PrimitiveComboboxItemText
>;
export const PrimitiveComboboxItemText = panda(ComboboxItemText);

export type PrimitiveComboboxLabelProps = ComponentProps<
  typeof PrimitiveComboboxLabel
>;
export const PrimitiveComboboxLabel = panda(ComboboxLabel);

export type PrimitiveComboboxPositionerProps = ComponentProps<
  typeof PrimitiveComboboxPositioner
>;
export const PrimitiveComboboxPositioner = panda(ComboboxPositioner);

export type PrimitiveComboboxTriggerProps = ComponentProps<
  typeof PrimitiveComboboxTrigger
>;
export const PrimitiveComboboxTrigger = panda(ComboboxTrigger);

export default PrimitiveCombobox;
