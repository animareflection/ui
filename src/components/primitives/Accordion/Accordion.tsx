import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from "@ark-ui/react";

import { panda } from "generated/panda/jsx";

import type {
  AccordionProps,
  AccordionItemProps,
  AccordionTriggerProps,
  AccordionContentProps,
} from "@ark-ui/react";
import type { PandaComponent } from "generated/panda/types/jsx";

/**
 * Core UI accordion primitives.
 */
export type PrimitiveAccordionProps = AccordionProps;
const PrimitiveAccordion: PandaComponent<typeof Accordion> = panda(Accordion);

export type PrimitiveAccordionItemProps = AccordionItemProps;
export const PrimitiveAccordionItem: PandaComponent<typeof AccordionItem> =
  panda(AccordionItem);

export type PrimitiveAccordionTriggerProps = AccordionTriggerProps;
export const PrimitiveAccordionTrigger = panda(AccordionTrigger);

export type PrimitiveAccordionContentProps = AccordionContentProps;
export const PrimitiveAccordionContent = panda(AccordionContent);

export default PrimitiveAccordion;
