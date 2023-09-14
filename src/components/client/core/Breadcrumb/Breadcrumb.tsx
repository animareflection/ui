import { cloneElement, Fragment } from "react";

import { panda } from "generated/panda/jsx";
import { breadcrumb } from "generated/panda/recipes";

import type { ReactElement, ReactNode } from "react";

export interface Props {
  baseUrl?: string;
  pathname: string;
  separator: ReactNode;
  disabled?: boolean;
}

type BreadcrumbItem = { item: ReactNode; link: string };

/**
 * Core UI breadcrumb.
 */
const Breadcrumb = ({
  pathname,
  baseUrl = "Home",
  separator,
  disabled,
}: Props) => {
  if (pathname.startsWith("https://")) {
    throw new Error("The pathname prop should not include 'https://'.");
  }

  const breadcrumbItems: BreadcrumbItem[] = [{ item: baseUrl, link: "/" }];
  let runningPath: string = "";

  pathname.split("/").forEach((segment) => {
    if (segment) {
      runningPath += `/${segment}`;
      breadcrumbItems.push({ item: segment, link: runningPath });
    }
  });

  const classNames = breadcrumb();

  return (
    <panda.div className={classNames.breadcrumb}>
      {breadcrumbItems.map(({ item, link }, index) => (
        <Fragment key={index}>
          {index !== 0 && cloneElement(separator as ReactElement)}
          {disabled ? (
            <panda.div className={classNames.link}> {item} </panda.div>
          ) : (
            <panda.a className={classNames.link} href={link}>
              {item}
            </panda.a>
          )}
        </Fragment>
      ))}
    </panda.div>
  );
};

export default Breadcrumb;
