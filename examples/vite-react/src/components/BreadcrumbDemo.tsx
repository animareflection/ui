import { Breadcrumb, Icon } from "@animareflection/ui/client";
import { FiChevronRight as ChevronRightIcon } from "react-icons/fi";

import { Wrapper } from "components";
import app from "lib/app";

const BreadcrumbDemo = () => {
  const demoPathname = "breadcrumb";
  return (
    <Wrapper title="Breadcrumb">
      <Breadcrumb
        pathname={demoPathname}
        baseUrl={app.url}
        separator={<Icon as={ChevronRightIcon} color="accent.emphasized" />}
      />
    </Wrapper>
  );
};

export default BreadcrumbDemo;
