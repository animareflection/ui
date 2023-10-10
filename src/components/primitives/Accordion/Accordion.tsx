import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
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

export type PrimitiveAccordionTriggerProps = ComponentProps<
  typeof PrimitiveAccordionTrigger
>;
export const PrimitiveAccordionTrigger = panda(AccordionTrigger);

export type PrimitiveAccordionContentProps = ComponentProps<
  typeof PrimitiveAccordionContent
>;
export const PrimitiveAccordionContent = panda(AccordionContent);

export default PrimitiveAccordion;
