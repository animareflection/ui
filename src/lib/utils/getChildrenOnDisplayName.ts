import { Children } from "react";

interface Props {
  // TODO: Remove explicit any
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  children: any;
  displayName: string;
}

/**
 * Verify if the children of a component have specific display names.
 * This is useful for components that have subcomponents, like a `Card` component that has a `CardHeader` component as a child.
 */
const getChildrenOnDisplayName = ({ children, displayName }: Props) =>
  Children.map(children, (child) =>
    child.type.displayName === displayName ? child : null,
  );

export default getChildrenOnDisplayName;
