import {
  FiChevronDown as ChevronDownIcon,
  FiMinus as MinusIcon,
  FiPlus as PlusIcon,
} from "react-icons/fi";

import { Button, Icon } from "components/client";
import {
  Accordion as PrimitiveAccordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from "components/primitives";
import { accordion } from "generated/panda/recipes";

import type { AccordionProps } from "components/primitives";
import type { ElementType, ReactNode } from "react";

export interface AccordionItemRecord {
  id: string;
  value: string;
  triggerLabel?: string;
  content: ReactNode;
  icon?: ElementType;
}

export interface Props extends AccordionProps {
  items: AccordionItemRecord[];
  plusMinus?: boolean;
}

/**
 * Core UI accordion.
 */
const Accordion = ({ items, plusMinus, ...rest }: Props) => {
  const classNames = accordion();

  return (
    <PrimitiveAccordion
      collapsible
      multiple
      className={classNames.root}
      {...rest}
    >
      {items.map(({ id, value, triggerLabel, content, icon }) => (
        <AccordionItem key={id} value={value}>
          {({ isOpen }) => (
            <>
              <AccordionTrigger className={classNames.trigger} asChild>
                <Button w="full" borderBottomRadius={isOpen ? "unset" : "md"}>
                  {triggerLabel ?? value}
                  <Icon
                    as={
                      plusMinus
                        ? isOpen
                          ? MinusIcon
                          : PlusIcon
                        : icon ?? ChevronDownIcon
                    }
                    transform={
                      isOpen && !plusMinus ? "rotate(-180deg)" : undefined
                    }
                    transformOrigin="center"
                    color="accent.fg"
                  />
                </Button>
              </AccordionTrigger>
              <AccordionContent
                lazyMount
                unmountOnExit
                className={classNames.content}
              >
                {content}
              </AccordionContent>
            </>
          )}
        </AccordionItem>
      ))}
    </PrimitiveAccordion>
  );
};

export default Accordion;
