import {
  Accordion,
  AccordionItem,
  AccordionItemTrigger,
  AccordionItemIndicator,
  AccordionItemContent,
} from "@ark-ui/react";

import { panda } from "generated/panda/jsx";
import { accordion } from "generated/panda/recipes";
import { createStyleContext } from "lib/util";

import type { PandaComponent } from "generated/panda/types/jsx";
import type { ComponentProps } from "react";

const { withProvider, withContext } = createStyleContext(accordion);

/**
 * Core UI accordion primitives.
 */
export type PrimitiveAccordionProps = ComponentProps<typeof PrimitiveAccordion>;
const PrimitiveAccordion: PandaComponent<typeof Accordion> = withProvider(
  panda(Accordion),
  "root",
);

export type PrimitiveAccordionItemProps = ComponentProps<
  typeof PrimitiveAccordionItem
>;
export const PrimitiveAccordionItem: PandaComponent<typeof AccordionItem> =
  withContext(panda(AccordionItem), "item");

export type PrimitiveAccordionItemTriggerProps = ComponentProps<
  typeof PrimitiveAccordionItemTrigger
>;
export const PrimitiveAccordionItemTrigger = withContext(
  panda(AccordionItemTrigger),
  "itemTrigger",
);

export type PrimitiveAccordionItemIndicator = ComponentProps<
  typeof PrimitiveAccordionItemIndicator
>;

export const PrimitiveAccordionItemIndicator = withContext(
  panda(AccordionItemIndicator),
  "itemIndicator",
);

export type PrimitiveAccordionItemContentProps = ComponentProps<
  typeof PrimitiveAccordionItemContent
>;

export const PrimitiveAccordionItemContent = withContext(
  panda(AccordionItemContent),
  "itemContent",
);

export default PrimitiveAccordion;
