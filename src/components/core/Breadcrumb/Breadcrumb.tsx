import { cloneElement, Fragment } from "react";

import { panda } from "generated/panda/jsx";
import { breadcrumb } from "generated/panda/recipes";
import usePathnameBreadcrumb from "lib/hooks/usePathnameBreadcrumb/usePathnameBreadcrumb";
import { createStyleContext } from "lib/util";

import type { ReactElement, ReactNode } from "react";

const { withProvider, withContext } = createStyleContext(breadcrumb);

export interface BreadcrumbRecord {
  label: string;
  href: string;
}

// TODO extract primitives, add prop interfaces, and export both

const BreadcrumbRoot = withProvider(panda.div, "root");

const BreadcrumbTrigger = withContext(panda.button, "trigger");

export interface Props {
  breadcrumbs?: BreadcrumbRecord[];
  pathname?: string;
  rootLabel?: string;
  separator: ReactNode;
}

/**
 * Breadcrumb.
 */
const Breadcrumb = ({ breadcrumbs, pathname, rootLabel, separator }: Props) => {
  const pathnameBreadcrumbs = usePathnameBreadcrumb({ pathname, rootLabel });

  const breadcrumbItems = breadcrumbs ?? pathnameBreadcrumbs;

  return (
    <BreadcrumbRoot>
      {breadcrumbItems.map(({ label, href }, index) => (
        <Fragment key={index}>
          {index !== 0 && cloneElement(separator as ReactElement)}
          <panda.a href={href}>
            <BreadcrumbTrigger disabled={index === breadcrumbItems.length - 1}>
              {label}
            </BreadcrumbTrigger>
          </panda.a>
        </Fragment>
      ))}
    </BreadcrumbRoot>
  );
};

export default Breadcrumb;
