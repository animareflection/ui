import { usePathname } from "next/navigation";
import { Breadcrumb, Icon } from "@animareflection/ui/client";
import { FiChevronRight as ChevronRightIcon } from "react-icons/fi";

import { Wrapper } from "components";

const BreadcrumbDemo = () => {
  const pathname = usePathname();
  return (
    <Wrapper title="Breadcrumb">
      <Breadcrumb
        pathname={pathname}
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
