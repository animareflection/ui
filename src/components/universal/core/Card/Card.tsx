import { sva } from "generated/panda/css";
import { panda } from "generated/panda/jsx";
import { getChildrenOnDisplayName } from "lib/utils";

import type { HTMLPandaProps } from "generated/panda/jsx";

const cardRecipe = sva({
  slots: ["card", "cardHeader", "cardBody", "cardFooter"],
  base: {
    card: {
      display: "flex",
      flexDirection: "column",
      gap: 2,
      borderRadius: "md",
      boxShadow: "sm",
    },
    cardHeader: {
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between",
      padding: 4,
      fontWeight: "semibold",
    },
    cardBody: {
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between",
      px: 4,
      py: 2,
    },
    cardFooter: {
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between",
      padding: 4,
    },
  },
});

const cardClasses = cardRecipe();

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
    <panda.div className={cardClasses.card} {...rest}>
      {cardHeader}
      {cardBody}
      {cardFooter}
    </panda.div>
  );
};

export const CardHeader = ({ children, ...rest }: Props) => (
  <panda.div className={cardClasses.cardHeader} {...rest}>
    {children}
  </panda.div>
);

CardHeader.displayName = "CardHeader";

export const CardBody = ({ children, ...rest }: Props) => (
  <panda.div className={cardClasses.cardBody} {...rest}>
    {children}
  </panda.div>
);

CardBody.displayName = "CardBody";

export const CardFooter = ({ children, ...rest }: Props) => (
  <panda.div className={cardClasses.cardFooter} {...rest}>
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
