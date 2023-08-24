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

export interface Props extends AccordionProps {
  trigger: ReactNode;
  children: ReactNode;
  value: string;
}

/**
 * Core UI accordion.
 */
const Accordion = ({ trigger, children, value, ...rest }: Props) => {
  const classNames = accordion();

  return (
    <PrimitiveAccordion collapsible className={classNames.root} {...rest}>
      <AccordionItem value={value}>
        {({ isOpen }) => (
          <>
            <AccordionTrigger className={classNames.trigger} asChild>
              <Button
                display="flex"
                alignItems="center"
                w="full"
                justifyContent="space-between"
              >
                {trigger}
                <Icon
                  as={ChevronDownIcon}
                  transform={isOpen ? "rotate(-180deg)" : undefined}
                  transition="transform 0.4s"
                  transformOrigin="center"
                  color={{ base: "white", _dark: "black" }}
                />
              </Button>
            </AccordionTrigger>
            <AccordionContent className={classNames.content}>
              {children}
            </AccordionContent>
          </>
        )}
      </AccordionItem>
    </PrimitiveAccordion>
  );
};

export default Accordion;
