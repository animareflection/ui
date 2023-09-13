import { usePathname } from "next/navigation";
import { Breadcrumb, Icon } from "@animareflection/ui/client";
import { FiChevronRight as ChevronRightIcon } from "react-icons/fi";

import { Wrapper } from "components";

const BreadcrumbDemo = () => {
  const pathname = usePathname();
  return (
    <Wrapper title="Breadcrumb">
      <Breadcrumb
        address={pathname}
        baseUrl="storybook.animareflection.com"
        SeparatorIcon={<Icon as={ChevronRightIcon} color="accent.emphasized" />}
      />
    </Wrapper>
  );
};

export default BreadcrumbDemo;
