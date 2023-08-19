import { panda } from "generated/panda/jsx";
import { card } from "generated/panda/recipes";
import { getChildrenOnDisplayName } from "lib/utils";

import type { HTMLPandaProps } from "generated/panda/jsx";

const cardClasses = card();

type Props = HTMLPandaProps<"div">;

/**
 * Core UI card.
 */
const Card = ({ children, ...rest }: Props) => {
  const cardHeader = getChildrenOnDisplayName({
    children,
    displayName: "CardHeader",
  });
  const cardBody = getChildrenOnDisplayName({
    children,
    displayName: "CardBody",
  });
  const cardFooter = getChildrenOnDisplayName({
    children,
    displayName: "CardFooter",
  });

  return (
    <panda.div className={cardClasses.root} {...rest}>
      {cardHeader}
      {cardBody}
      {cardFooter}
    </panda.div>
  );
};

export const CardHeader = ({ children, ...rest }: Props) => (
  <panda.div className={cardClasses.header} {...rest}>
    {children}
  </panda.div>
);

CardHeader.displayName = "CardHeader";

export const CardBody = ({ children, ...rest }: Props) => (
  <panda.div className={cardClasses.body} {...rest}>
    {children}
  </panda.div>
);

CardBody.displayName = "CardBody";

export const CardFooter = ({ children, ...rest }: Props) => (
  <panda.div className={cardClasses.footer} {...rest}>
    {children}
  </panda.div>
);

CardFooter.displayName = "CardFooter";

export type {
  Props as CardProps,
  Props as CardHeaderProps,
  Props as CardBodyProps,
  Props as CardFooterProps,
};

export default Card;
