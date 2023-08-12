import {
  Accordion as ArkAccordion,
  AccordionItem as ArkAccordionItem,
  AccordionTrigger as ArkAccordionTrigger,
  AccordionContent as ArkAccordionContent,
} from "@ark-ui/react/accordion";
import { forwardRef } from "react";

import type {
  AccordionProps,
  AccordionItemProps,
  AccordionTriggerProps,
  AccordionContentProps,
} from "@ark-ui/react/accordion";

// /**
//  * Core UI Accordion
//  */

/* -------------------------------------------------------------------------------------------------
 * Accordion
 * -----------------------------------------------------------------------------------------------*/

const ACCORDION_NAME = "Accordion";
const AccordionRoot = forwardRef<HTMLDivElement, AccordionProps>(
  ({ children, ...props }, forwardedRef) => (
    <ArkAccordion {...props} ref={forwardedRef}>
      {children}
    </ArkAccordion>
  ),
);
AccordionRoot.displayName = ACCORDION_NAME;

/* -------------------------------------------------------------------------------------------------
 * AccordionItem
 * -----------------------------------------------------------------------------------------------*/

const ITEM_NAME = "AccordionItem";
const AccordionItem = forwardRef<HTMLDivElement, AccordionItemProps>(
  ({ children, value, ...props }, forwardedRef) => (
    <ArkAccordionItem value={value} {...props} ref={forwardedRef}>
      {children}
    </ArkAccordionItem>
  ),
);
AccordionItem.displayName = ITEM_NAME;

/* -------------------------------------------------------------------------------------------------
 * AccordionTrigger
 * -----------------------------------------------------------------------------------------------*/

const TRIGGER_NAME = "AccordionTrigger";
const AccordionTrigger = forwardRef<HTMLButtonElement, AccordionTriggerProps>(
  ({ children, ...props }, forwardedRef) => (
    <ArkAccordionTrigger {...props} ref={forwardedRef}>
      {children}
    </ArkAccordionTrigger>
  ),
);
AccordionTrigger.displayName = TRIGGER_NAME;

/* -------------------------------------------------------------------------------------------------
 * AccordionContent
 * -----------------------------------------------------------------------------------------------*/

const CONTENT_NAME = "AccordionContent";
const AccordionContent = forwardRef<HTMLDivElement, AccordionContentProps>(
  ({ children, ...props }, forwardedRef) => (
    <ArkAccordionContent {...props} ref={forwardedRef}>
      {children}
    </ArkAccordionContent>
  ),
);
AccordionContent.displayName = CONTENT_NAME;

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const Root: any = AccordionRoot;
// eslint-disable-next-line @typescript-eslint/no-explicit-any
const Item: any = AccordionItem;
const Trigger = AccordionTrigger;
const Content = AccordionContent;

export { Root, Item, Trigger, Content };

export type {
  AccordionProps,
  AccordionItemProps,
  AccordionTriggerProps,
  AccordionContentProps,
};
