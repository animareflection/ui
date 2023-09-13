import { useLocation } from "react-router-dom";
import { Breadcrumb, Icon } from "@animareflection/ui/client";
import { FiChevronRight as ChevronRightIcon } from "react-icons/fi";

import { Wrapper } from "components";

const BreadcrumbDemo = () => {
  const location = useLocation();
  return (
    <Wrapper title="Breadcrumb">
      <Breadcrumb
        pathname={location.pathname}
        baseUrl="storybook.animareflection.com"
        SeparatorIcon={<Icon as={ChevronRightIcon} color="accent.emphasized" />}
      />
    </Wrapper>
  );
};

export default BreadcrumbDemo;
