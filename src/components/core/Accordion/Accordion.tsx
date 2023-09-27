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
                className={classNames.trigger}
                borderBottomRadius={isOpen ? "unset" : "md"}
              >
                {triggerLabel ?? value}
                <Icon
                  transform={
                    isOpen && !plusMinus ? "rotate(-180deg)" : undefined
                  }
                  transformOrigin="center"
                  color="accent.fg"
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
              <PrimitiveAccordionContent
                lazyMount
                unmountOnExit
                className={classNames.content}
              >
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
