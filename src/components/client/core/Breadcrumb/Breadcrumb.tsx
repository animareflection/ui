import { cloneElement, Fragment } from "react";

import { panda } from "generated/panda/jsx";
import { breadcrumb } from "generated/panda/recipes";

import type { ReactElement, ReactNode } from "react";

export interface Props {
  rootSegment?: string;
  pathname: string;
  separator: ReactNode;
  disabled?: boolean;
}

type BreadcrumbItem = { item: string; link: string };

/**
 * Core UI breadcrumb.
 */
const Breadcrumb = ({
  pathname,
  rootSegment = "Home",
  separator,
  disabled,
}: Props) => {
  if (pathname.startsWith("https://")) {
    throw new Error("The pathname prop should not include 'https://'.");
  }

  const breadcrumbItems: BreadcrumbItem[] = [{ item: rootSegment, link: "/" }];
  let runningPath: string = "";

  pathname.split("/").forEach((segment) => {
    if (segment) {
      runningPath += `/${segment}`;
      breadcrumbItems.push({ item: segment, link: runningPath });
    }
  });

  const classNames = breadcrumb();

  return (
    <panda.div className={classNames.root}>
      {breadcrumbItems.map(({ item, link }, index) => (
        <Fragment key={index}>
          {index !== 0 && cloneElement(separator as ReactElement)}
          <panda.a href={link}>
            <panda.button
              className={classNames.trigger}
              disabled={disabled ? true : index === breadcrumbItems.length - 1}
            >
              {item}
            </panda.button>
          </panda.a>
        </Fragment>
      ))}
    </panda.div>
  );
};

export default Breadcrumb;
