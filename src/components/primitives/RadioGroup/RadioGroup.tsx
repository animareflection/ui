/**
 * @file Radio group primitives.
 */
import {
  RadioGroupItem,
  RadioGroupItemControl,
  RadioGroupRoot,
  RadioGroupLabel,
  RadioGroupItemText,
} from "@ark-ui/react";

import { panda } from "generated/panda/jsx";
import { radioGroup } from "generated/panda/recipes";
import { createStyleContext } from "lib/util";

import type { PandaComponent } from "generated/panda/types/jsx";
import type { ComponentProps } from "react";

const { withProvider, withContext } = createStyleContext(radioGroup);

export type PrimitiveRadioGroupProps = ComponentProps<
  typeof PrimitiveRadioGroup
>;
const PrimitiveRadioGroup = withProvider(panda(RadioGroupRoot), "root");

export type PrimitiveRadioGroupItemControlProps = ComponentProps<
  typeof PrimitiveRadioGroupItemControl
>;
export const PrimitiveRadioGroupItemControl = withContext(
  panda(RadioGroupItemControl),
  "itemControl",
);

export type PrimitiveRadioGroupLabelProps = ComponentProps<
  typeof PrimitiveRadioGroupLabel
>;
export const PrimitiveRadioGroupLabel = withContext(
  panda(RadioGroupLabel),
  "label",
);

export type PrimitiveRadioGroupItemProps = ComponentProps<
  typeof PrimitiveRadioGroupItem
>;
export const PrimitiveRadioGroupItem: PandaComponent<typeof RadioGroupItem> =
  withContext(panda(RadioGroupItem), "item");

export type PrimitiveRadioGroupItemTextProps = ComponentProps<
  typeof RadioGroupItemText
>;
export const PrimitiveRadioGroupItemText = withContext(
  panda(RadioGroupItemText),
  "itemText",
);

export default PrimitiveRadioGroup;
