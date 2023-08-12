import { recipe as accordion } from "./Accordion.recipe";
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
  orientation?: "horizontal" | "vertical";
  disabled?: boolean;
  value: string;
}

// /**
//  * Core UI Accordion
//  */

const Accordion = ({
  trigger,
  children,
  orientation = "horizontal",
  value,
  ...rest
}: Props) => {
  const classNames = accordion({});

  return (
    <PrimitiveAccordion
      collapsible
      orientation={orientation}
      className={classNames.root}
      {...rest}
    >
      <AccordionItem value={value}>
        <AccordionTrigger className={classNames.trigger} asChild>
          {trigger}
        </AccordionTrigger>
        <AccordionContent className={classNames.content}>
          {children}
        </AccordionContent>
      </AccordionItem>
    </PrimitiveAccordion>
  );
};

export default Accordion;
