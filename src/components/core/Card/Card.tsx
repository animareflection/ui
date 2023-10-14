import { panda } from "generated/panda/jsx";
import { card } from "generated/panda/recipes";

import type { HTMLPandaProps } from "generated/panda/jsx";

const cardClasses = card();

type Props = HTMLPandaProps<"div">;

/**
 * Core UI card.
 */
const Card = ({ children, ...rest }: Props) => (
  <panda.div className={cardClasses.root} {...rest}>
    {children}
  </panda.div>
);

export const CardHeader = ({ children, ...rest }: Props) => (
  <panda.div className={cardClasses.header} {...rest}>
    {children}
  </panda.div>
);

export const CardBody = ({ children, ...rest }: Props) => (
  <panda.div className={cardClasses.body} {...rest}>
    {children}
  </panda.div>
);

export const CardFooter = ({ children, ...rest }: Props) => (
  <panda.div className={cardClasses.footer} {...rest}>
    {children}
  </panda.div>
);

export type {
  Props as CardProps,
  Props as CardHeaderProps,
  Props as CardBodyProps,
  Props as CardFooterProps,
};

export default Card;
