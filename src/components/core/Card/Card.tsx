import { panda } from "generated/panda/jsx";

import type { HTMLPandaProps } from "generated/panda/jsx";

type Props = HTMLPandaProps<"div">;

/**
 * Core UI card.
 */
const Card = ({ children, ...rest }: Props) => (
  <panda.div {...rest}>{children}</panda.div>
);

export const CardHeader = ({ children, ...rest }: Props) => (
  <panda.div {...rest}>{children}</panda.div>
);

export const CardBody = ({ children, ...rest }: Props) => (
  <panda.div {...rest}>{children}</panda.div>
);

export const CardFooter = ({ children, ...rest }: Props) => (
  <panda.div {...rest}>{children}</panda.div>
);

export type {
  Props as CardProps,
  Props as CardHeaderProps,
  Props as CardBodyProps,
  Props as CardFooterProps,
};

export default Card;
