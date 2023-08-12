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

// [ERROR]:The inferred type of 'Accordion' cannot be named without a reference to '.store/@zag-js-accordion-npm-0.15.0-e962da3be1/node_modules/@zag-js/accordion'. This is likely not portable. A type annotation is necessary.ts(2742)
// [FIX]: PandaComponent<typeof "Props">

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
