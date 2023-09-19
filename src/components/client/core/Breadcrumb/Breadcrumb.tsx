import { cloneElement, Fragment, useMemo } from "react";

import { panda } from "generated/panda/jsx";
import { breadcrumb } from "generated/panda/recipes";

import type { ReactElement, ReactNode } from "react";

type BreadcrumbItem = { item: ReactNode; link: string };

export interface Props {
  rootBreadcrumb?: ReactNode;
  pathname: string;
  separator: ReactNode;
  startingSegment?: string;
}

/**
 * Core UI breadcrumb.
 */
const Breadcrumb = ({
  rootBreadcrumb = "Home",
  pathname,
  separator,
  startingSegment,
}: Props) => {
  if (pathname.startsWith("https://")) {
    throw new Error("The pathname prop should not include 'https://'.");
  }

  const breadcrumbItems: BreadcrumbItem[] = useMemo(() => {
    const items: BreadcrumbItem[] = [{ item: rootBreadcrumb, link: "/" }];
    let runningPath = "";
    let shouldAddItems = !startingSegment;

    pathname.split("/").forEach((segment) => {
      runningPath += `/${segment}`;

      if (segment === startingSegment) {
        shouldAddItems = true;
      }

      if (shouldAddItems) {
        items.push({ item: segment, link: runningPath });
      }
    });

    return items;
  }, [pathname, rootBreadcrumb, startingSegment]);

  const classNames = breadcrumb();

  return (
    <panda.div className={classNames.root}>
      {breadcrumbItems.map(({ item, link }, index) => (
        <Fragment key={index}>
          {index !== 0 && cloneElement(separator as ReactElement)}
          <panda.a href={link}>
            <panda.button
              className={classNames.trigger}
              disabled={index === breadcrumbItems.length - 1}
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
