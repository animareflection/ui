import { useMemo } from "react";

import type { BreadcrumbRecord } from "components/core/Breadcrumb/Breadcrumb";

interface Options {
  pathname?: string;
  rootLabel?: string;
}

const usePathnameBreadcrumb = ({ pathname, rootLabel = "Home" }: Options) => {
  const breadcrumbs = useMemo(() => {
    if (!pathname) return [];

    const breadcrumbRecords: BreadcrumbRecord[] = [
      { label: rootLabel, href: "/" },
    ];
    let runningPath = "";

    if (pathname.startsWith("https://")) {
      throw new Error("The pathname prop should not include 'https://'.");
    }

    pathname.split("/").forEach((segment) => {
      runningPath += `/${segment}`;
      const capitalizedSegment =
        segment.charAt(0).toUpperCase() + segment.slice(1);

      breadcrumbRecords.push({ label: capitalizedSegment, href: runningPath });
    });

    return breadcrumbRecords;
  }, [pathname, rootLabel]);

  return breadcrumbs;
};

export default usePathnameBreadcrumb;
