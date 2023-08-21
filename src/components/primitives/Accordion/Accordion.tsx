import {
  Accordion as ArkAccordion,
  AccordionItem as ArkAccordionItem,
  AccordionTrigger as ArkAccordionTrigger,
  AccordionContent as ArkAccordionContent,
} from "@ark-ui/react";

import { panda } from "generated/panda/jsx";

import type {
  AccordionProps as ArkAccordionProps,
  AccordionItemProps as ArkAccordionItemProps,
  AccordionTriggerProps as ArkAccordionTriggerProps,
  AccordionContentProps as ArkAccordionContentProps,
} from "@ark-ui/react";
import type { PandaComponent } from "generated/panda/types/jsx";

/**
 * Core UI accordion primitives.
 */

export type AccordionProps = ArkAccordionProps;
const Accordion: PandaComponent<typeof ArkAccordion> = panda(ArkAccordion);

export type AccordionItemProps = ArkAccordionItemProps;
export const AccordionItem: PandaComponent<typeof ArkAccordionItem> =
  panda(ArkAccordionItem);

export type AccordionTriggerProps = ArkAccordionTriggerProps;
export const AccordionTrigger = panda(ArkAccordionTrigger);

export type AccordionContentProps = ArkAccordionContentProps;
export const AccordionContent = panda(ArkAccordionContent);

export default Accordion;
