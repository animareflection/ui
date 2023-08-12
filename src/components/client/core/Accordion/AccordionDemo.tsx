import {
  Accordion as ArkAccordion,
  AccordionItem as ArkAccordionItem,
  AccordionTrigger as ArkAccordionTrigger,
  AccordionContent as ArkAccordionContent,
} from "@ark-ui/react/accordion";

import { panda } from "generated/panda/jsx";
import { accordion } from "generated/panda/recipes";
import { createStyleContext } from "lib/utils";

import type {
  AccordionProps as ArkAccordionProps,
  AccordionItemProps as ArkAccordionItemProps,
  AccordionTriggerProps as ArkAccordionTriggerProps,
  AccordionContentProps as ArkAccordionContentProps,
} from "@ark-ui/react/accordion";
import type { AccordionVariantProps } from "generated/panda/recipes";

const { withProvider, withContext } = createStyleContext(accordion);

export type AccordionProps = ArkAccordionProps & AccordionVariantProps;

const AccordionRoot = withProvider(panda(ArkAccordion), "root");
const AccordionItem = withContext(panda(ArkAccordionItem), "item");
export const AccordionContent = withContext(
  panda(ArkAccordionContent),
  "content",
);
export const AccordionTrigger = withContext(
  panda(ArkAccordionTrigger),
  "trigger",
);

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const Accordion: any = Object.assign(AccordionRoot, {
  Root: AccordionRoot,
  Item: AccordionItem,
  Content: AccordionContent,
  Trigger: AccordionTrigger,
});

export default Accordion;

export type {
  ArkAccordionProps,
  ArkAccordionItemProps,
  ArkAccordionTriggerProps,
  ArkAccordionContentProps,
};
