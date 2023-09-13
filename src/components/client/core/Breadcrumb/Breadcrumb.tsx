import { Fragment } from "react";

import { Text } from "components/universal";
import { panda } from "generated/panda/jsx";
import { breadcrumb } from "generated/panda/recipes";

import type { ReactNode } from "react";

export interface Props {
  address: string;
  baseUrl?: string;
  SeparatorIcon: ReactNode;
}

/**
 * Core UI breadcrumb.
 */
const Breadcrumb = ({ address, baseUrl = "Home", SeparatorIcon }: Props) => {
  return (
    <panda.div className={breadcrumb()}>
      <Text>{baseUrl}</Text>
      {address ? (
        <>
          {SeparatorIcon}
          {address
            .split("/")
            .slice(3)
            .map((segment, index, array) => {
              return (
                <Fragment key={segment}>
                  <Text key={segment}>{segment}</Text>

                  {index !== array.length - 1 ? SeparatorIcon : null}
                </Fragment>
              );
            })}
        </>
      ) : null}
    </panda.div>
  );
};

export default Breadcrumb;
