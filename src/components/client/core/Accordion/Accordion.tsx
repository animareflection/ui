import { FiChevronDown as ChevronDownIcon } from "react-icons/fi";

import { Button, Icon } from "components/client";
import {
  Accordion as PrimitiveAccordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from "components/primitives";
import { accordion } from "generated/panda/recipes";

import type { AccordionProps } from "components/primitives";
import type { ReactNode } from "react";

export interface AccordionItemRecord {
  id: string;
  value: string;
  triggerLabel?: string;
  content: ReactNode;
}

export interface Props extends AccordionProps {
  items: AccordionItemRecord[];
}

/**
 * Core UI accordion.
 */
const Accordion = ({ items, ...rest }: Props) => {
  const classNames = accordion();

  return (
    <PrimitiveAccordion
      collapsible
      multiple
      className={classNames.root}
      {...rest}
    >
      {items.map(({ id, value, triggerLabel, content }) => (
        <AccordionItem key={id} value={value}>
          {({ isOpen }) => (
            <>
              <AccordionTrigger className={classNames.trigger} asChild>
                <Button borderBottomRadius={isOpen ? "unset" : "md"}>
                  {triggerLabel ?? value}
                  <Icon
                    as={ChevronDownIcon}
                    transform={isOpen ? "rotate(-180deg)" : undefined}
                    transition="transform 0.4s"
                    transformOrigin="center"
                    color={{ base: "white", _dark: "black" }}
                  />
                </Button>
              </AccordionTrigger>
              {isOpen && (
                <AccordionContent className={classNames.content}>
                  {content}
                </AccordionContent>
              )}
            </>
          )}
        </AccordionItem>
      ))}
    </PrimitiveAccordion>
  );
};

export default Accordion;
