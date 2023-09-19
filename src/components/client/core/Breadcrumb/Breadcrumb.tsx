import { cloneElement, Fragment, useMemo } from "react";

import { panda } from "generated/panda/jsx";
import { breadcrumb } from "generated/panda/recipes";

import type { ReactElement, ReactNode } from "react";

type BreadcrumbItem = { item: string; link: string };

export interface Props {
  rootBreadcrumb?: BreadcrumbItem;
  pathname: string;
  separator: ReactNode;
  disabled?: boolean;
}

/**
 * Core UI breadcrumb.
 */
const Breadcrumb = ({
  rootBreadcrumb = { item: "Home", link: "/" },
  pathname,
  separator,
  disabled,
}: Props) => {
  if (pathname.startsWith("https://")) {
    throw new Error("The pathname prop should not include 'https://'.");
  }

  const breadcrumbItems: BreadcrumbItem[] = useMemo(() => {
    const items: BreadcrumbItem[] = [rootBreadcrumb];
    let runningPath: string = rootBreadcrumb.link;

    pathname
      .replace(rootBreadcrumb.link, "/")
      .split("/")
      .forEach((segment) => {
        if (segment) {
          runningPath += `/${segment}`;
          items.push({ item: segment, link: runningPath });
        }
      });

    return items;
  }, [pathname, rootBreadcrumb]);

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
