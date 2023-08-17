import { recipe as accordion } from "./Accordion.recipe";
import { Button } from "components/client";
import {
  Accordion as PrimitiveAccordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from "components/primitives";

import type { AccordionProps } from "components/primitives";
import type { ReactNode } from "react";

export interface Props extends AccordionProps {
  trigger: ReactNode;
  children: ReactNode;
  disabled?: boolean;
  value: string;
  icon: (props: { isOpen: boolean }) => JSX.Element;
}

// /**
//  * Core UI Accordion
//  */

const Accordion = ({ trigger, children, value, icon, ...rest }: Props) => {
  const classNames = accordion({});
  const Icon = icon;

  return (
    <PrimitiveAccordion collapsible className={classNames.root} {...rest}>
      {/* pass in array decision needs to be made */}
      <AccordionItem value={value}>
        {({ isOpen }) => (
          <>
            <AccordionTrigger className={classNames.trigger} asChild>
              <Button>
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
