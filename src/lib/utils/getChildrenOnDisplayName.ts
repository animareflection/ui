import { Children } from "react";

interface Props {
  // TODO: Remove explicit any
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  children: any;
  displayName: string;
}

const getChildrenOnDisplayName = ({ children, displayName }: Props) =>
  Children.map(children, (child) =>
    child.type.displayName === displayName ? child : null,
  );

export default getChildrenOnDisplayName;
