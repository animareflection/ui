import { panda } from "generated/panda/jsx";
import { card } from "generated/panda/recipes";
import { createStyleContext } from "lib/util";

import type { HTMLPandaProps } from "generated/panda/jsx";

type Props = HTMLPandaProps<"div">;

const { withProvider, withContext } = createStyleContext(card);

/**
 * Card.
 */
const Card = withProvider(
  ({ children, ...rest }: Props) => <panda.div {...rest}>{children}</panda.div>,
  "root",
);

export const CardHeader = withContext(
  ({ children, ...rest }: Props) => <panda.div {...rest}>{children}</panda.div>,
  "header",
);

export const CardBody = withContext(
  ({ children, ...rest }: Props) => <panda.div {...rest}>{children}</panda.div>,
  "body",
);

export const CardFooter = withContext(
  ({ children, ...rest }: Props) => <panda.div {...rest}>{children}</panda.div>,
  "footer",
);

export type {
  Props as CardProps,
  Props as CardHeaderProps,
  Props as CardBodyProps,
  Props as CardFooterProps,
};

export default Card;
