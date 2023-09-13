import { cloneElement } from "react";

import { Text } from "components/universal";
import { panda } from "generated/panda/jsx";
import { breadcrumb } from "generated/panda/recipes";

import type { ReactElement, ReactNode } from "react";

export interface Props {
  pathname: string;
  baseUrl?: string;
  SeparatorIcon: ReactNode;
}

/**
 * Core UI breadcrumb.
 */
const Breadcrumb = ({ pathname, baseUrl = "Home", SeparatorIcon }: Props) => {
  if (pathname.startsWith("https://")) {
    throw new Error("The pathname prop should not include 'https://'.");
  }

  const breadcrumbItems: (string | ReactNode)[] = [baseUrl];

  pathname.split("/").forEach((segment) => {
    if (segment) {
      breadcrumbItems.push(SeparatorIcon, segment);
    }
  });
  return (
    <panda.div className={breadcrumb()}>
      {breadcrumbItems.map((item, index) =>
        typeof item === "string" ? (
          <Text key={index}>{item}</Text>
        ) : (
          cloneElement(item as ReactElement, { key: index })
        ),
      )}
    </panda.div>
  );
};

export default Breadcrumb;
