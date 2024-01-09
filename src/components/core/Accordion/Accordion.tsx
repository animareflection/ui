import {
  FiChevronDown as ChevronDownIcon,
  FiMinus as MinusIcon,
  FiPlus as PlusIcon,
} from "react-icons/fi";

import Icon from "components/core/Icon/Icon";
import {
  PrimitiveAccordion,
  PrimitiveAccordionItem,
  PrimitiveAccordionItemTrigger,
  PrimitiveAccordionItemContent,
  PrimitiveAccordionItemIndicator,
} from "components/primitives";
import { useIsClient } from "lib/hooks";

import type { PrimitiveAccordionProps } from "components/primitives";
import type { ReactElement, ReactNode } from "react";

export interface AccordionItemRecord {
  id: string;
  value: string;
  triggerLabel?: string;
  content: ReactNode;
  icon?: ReactElement;
}

export interface Props extends PrimitiveAccordionProps {
  items: AccordionItemRecord[];
  plusMinus?: boolean;
}

/**
 * Core UI accordion.
 */
const Accordion = ({ items, plusMinus, ...rest }: Props) => {
  const isClient = useIsClient();

  if (!isClient) return null;

  return (
    <PrimitiveAccordion present collapsible multiple {...rest}>
      {items.map(({ id, value, triggerLabel, content, icon }) => (
        <PrimitiveAccordionItem key={id} value={value}>
          {({ isOpen }) => (
            <>
              <PrimitiveAccordionItemTrigger>
                {triggerLabel ?? value}
                <PrimitiveAccordionItemIndicator>
                  <Icon>
                    {plusMinus ? (
                      isOpen ? (
                        <MinusIcon />
                      ) : (
                        <PlusIcon />
                      )
                    ) : (
                      icon ?? <ChevronDownIcon />
                    )}
                  </Icon>
                </PrimitiveAccordionItemIndicator>
              </PrimitiveAccordionItemTrigger>
              <PrimitiveAccordionItemContent>
                {/* NB: div wrapper enforces body content to collapse properly if, for example, a string is passed */}
                <div>{content}</div>
              </PrimitiveAccordionItemContent>
            </>
          )}
        </PrimitiveAccordionItem>
      ))}
    </PrimitiveAccordion>
  );
};

export default Accordion;
