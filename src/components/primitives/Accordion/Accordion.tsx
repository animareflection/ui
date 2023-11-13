import {
  Accordion,
  AccordionItem,
  AccordionItemTrigger,
  AccordionItemContent,
} from "@ark-ui/react";

import { panda } from "generated/panda/jsx";

import type { PandaComponent } from "generated/panda/types/jsx";
import type { ComponentProps } from "react";

/**
 * Core UI accordion primitives.
 */
export type PrimitiveAccordionProps = ComponentProps<typeof PrimitiveAccordion>;
const PrimitiveAccordion: PandaComponent<typeof Accordion> = panda(Accordion);

export type PrimitiveAccordionItemProps = ComponentProps<
  typeof PrimitiveAccordionItem
>;
export const PrimitiveAccordionItem: PandaComponent<typeof AccordionItem> =
  panda(AccordionItem);

export type PrimitiveAccordionItemTriggerProps = ComponentProps<
  typeof PrimitiveAccordionItemTrigger
>;
export const PrimitiveAccordionItemTrigger = panda(AccordionItemTrigger);

export type PrimitiveAccordionItemContentProps = ComponentProps<
  typeof PrimitiveAccordionItemContent
>;
export const PrimitiveAccordionItemContent = panda(AccordionItemContent);

export default PrimitiveAccordion;
