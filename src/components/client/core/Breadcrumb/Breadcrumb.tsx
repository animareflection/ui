import { cloneElement, Fragment } from "react";

// import { Text } from "components/universal";
import { panda } from "generated/panda/jsx";
import { breadcrumb } from "generated/panda/recipes";

import type { ReactElement, ReactNode } from "react";

export interface Props {
  pathname: string;
  baseUrl?: string;
  separator: ReactNode;
}

type BreadcrumbItem = { item: ReactNode; link: string };

/**
 * Core UI breadcrumb.
 */
const Breadcrumb = ({ pathname, baseUrl = "Home", separator }: Props) => {
  if (pathname.startsWith("https://")) {
    throw new Error("The pathname prop should not include 'https://'.");
  }

  const breadcrumbItems: BreadcrumbItem[] = [{ item: baseUrl, link: "/" }];
  let runningPath = "";

  pathname.split("/").forEach((segment) => {
    if (segment) {
      runningPath += `/${segment}`;
      breadcrumbItems.push({ item: segment, link: runningPath });
    }
  });

  console.log(breadcrumbItems);
  return (
    <panda.div className={breadcrumb()}>
      {breadcrumbItems.map(({ item, link }, index) => (
        <Fragment key={index}>
          {index !== 0 && cloneElement(separator as ReactElement)}
          <panda.a href={link}>{item}</panda.a>
        </Fragment>
      ))}
    </panda.div>
  );
};

export default Breadcrumb;
