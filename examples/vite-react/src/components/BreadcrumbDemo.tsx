import { Breadcrumb, Icon } from "@animareflection/ui/client";
import { FiChevronRight as ChevronRightIcon } from "react-icons/fi";

import { Wrapper } from "components";

const BreadcrumbDemo = () => {
  const demoPathname = "breadcrumb";
  return (
    <Wrapper title="Breadcrumb">
      <Breadcrumb
        disabled
        pathname={demoPathname}
        separator={
          <Icon
            as={ChevronRightIcon}
            color="accent.emphasized"
            flexShrink={0}
          />
        }
      />
    </Wrapper>
  );
};

export default BreadcrumbDemo;
