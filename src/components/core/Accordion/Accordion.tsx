import {
  FiChevronDown as ChevronDownIcon,
  FiMinus as MinusIcon,
  FiPlus as PlusIcon,
} from "react-icons/fi";

import Icon from "components/core/Icon/Icon";
import {
  PrimitiveAccordion,
  PrimitiveAccordionItem,
  PrimitiveAccordionTrigger,
  PrimitiveAccordionContent,
} from "components/primitives";
import { accordion } from "generated/panda/recipes";
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
  const classNames = accordion();

  const isClient = useIsClient();

  if (!isClient) return null;

  return (
    <PrimitiveAccordion
      collapsible
      multiple
      className={classNames.root}
      {...rest}
    >
      {items.map(({ id, value, triggerLabel, content, icon }) => (
        <PrimitiveAccordionItem key={id} value={value}>
          {({ isOpen }) => (
            <>
              <PrimitiveAccordionTrigger
                className={classNames.itemTrigger}
                borderBottomRadius={isOpen ? "unset" : "md"}
              >
                {triggerLabel ?? value}
                <Icon
                  transform={
                    isOpen && !plusMinus ? "rotate(-180deg)" : undefined
                  }
                  transition="transform 300ms"
                  transformOrigin="center"
                  color={isOpen ? "accent.fg" : "fg.default"}
                >
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
              </PrimitiveAccordionTrigger>
              <PrimitiveAccordionContent className={classNames.itemContent}>
                {content}
              </PrimitiveAccordionContent>
            </>
          )}
        </PrimitiveAccordionItem>
      ))}
    </PrimitiveAccordion>
  );
};

export default Accordion;
