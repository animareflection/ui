import { cloneElement, Fragment } from "react";

import { panda } from "generated/panda/jsx";
import { breadcrumb } from "generated/panda/recipes";
import usePathnameBreadcrumb from "lib/hooks/usePathnameBreadcrumb/usePathnameBreadcrumb";

import type { ReactElement, ReactNode } from "react";

export interface BreadcrumbRecord {
  label: string;
  href: string;
}

export interface Props {
  breadcrumbs?: BreadcrumbRecord[];
  pathname?: string;
  rootLabel?: string;
  separator: ReactNode;
}

/**
 * Core UI breadcrumb.
 */
const Breadcrumb = ({ breadcrumbs, pathname, rootLabel, separator }: Props) => {
  const pathnameBreadcrumbs = usePathnameBreadcrumb({ pathname, rootLabel });

  const breadcrumbItems = breadcrumbs ?? pathnameBreadcrumbs;

  const classNames = breadcrumb();

  return (
    <panda.div className={classNames.root}>
      {breadcrumbItems.map(({ label, href }, index) => (
        <Fragment key={index}>
          {index !== 0 && cloneElement(separator as ReactElement)}
          <panda.a href={href}>
            <panda.button
              className={classNames.trigger}
              disabled={index === breadcrumbItems.length - 1}
            >
              {label}
            </panda.button>
          </panda.a>
        </Fragment>
      ))}
    </panda.div>
  );
};

export default Breadcrumb;
