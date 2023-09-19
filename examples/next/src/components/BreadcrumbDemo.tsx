import { usePathname } from "next/navigation";
import { Breadcrumb, Icon } from "@animareflection/ui/client";
import { FiChevronRight as ChevronRightIcon } from "react-icons/fi";

import { Wrapper } from "components";
import app from "lib/app";

const BreadcrumbDemo = () => {
  const pathname = usePathname();
  return (
    <Wrapper title="Breadcrumb">
      <Breadcrumb
        rootSegment={app.uiLibraryUrl}
        pathname={pathname}
        separator={<Icon as={ChevronRightIcon} color="accent.emphasized" />}
      />
    </Wrapper>
  );
};

export default BreadcrumbDemo;
