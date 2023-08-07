import { cva } from "generated/panda/css";
import { panda } from "generated/panda/jsx";
import { getChildrenOnDisplayName } from "lib/utils";

import type { ComponentProps } from "react";

const cardRecipe = cva({
  base: {
    display: "flex",
    flexDirection: "column",
    gap: 2,
    borderRadius: "md",
    boxShadow: "sm",
  },
});

const StyleCard = panda("div", cardRecipe);

export type CardProps = ComponentProps<typeof StyleCard>;

/**
 * Core UI card.
 */
const Card = ({ children, ...rest }: CardProps) => {
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
    <StyleCard {...rest}>
      {cardHeader}
      {cardBody}
      {cardFooter}
    </StyleCard>
  );
};

const cardHeaderRecipe = cva({
  base: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    padding: 2,
    fontWeight: "semibold",
  },
});

export const CardHeader = panda("div", cardHeaderRecipe);

export type CardHeaderProps = ComponentProps<typeof CardHeader>;

CardHeader.displayName = "CardHeader";

const cardBodyRecipe = cva({
  base: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    padding: 2,
  },
});

export const CardBody = panda("div", cardBodyRecipe);

export type CardBodyProps = ComponentProps<typeof CardBody>;

CardBody.displayName = "CardBody";

const cardFooterRecipe = cva({
  base: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    padding: 2,
  },
});

export const CardFooter = panda("div", cardFooterRecipe);

export type CardFooterProps = ComponentProps<typeof CardFooter>;

CardFooter.displayName = "CardFooter";

export default Card;
