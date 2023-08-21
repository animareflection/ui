import { Button } from "components/client";
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
  disabled?: boolean;
  value: string;
  icon: (props: { isOpen: boolean }) => JSX.Element;
}

/**
 * Core UI Accordion
 */

const Accordion = ({ trigger, children, value, icon, ...rest }: Props) => {
  const classNames = accordion();
  const Icon = icon;

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
                <Icon isOpen={isOpen} />
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
