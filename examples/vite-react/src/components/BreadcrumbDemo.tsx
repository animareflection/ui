import { Breadcrumb, BreadcrumbRecord, Icon } from "@animareflection/ui/client";
import { FiChevronRight as ChevronRightIcon } from "react-icons/fi";

import { Wrapper } from "components";

const BREADCRUMBS: BreadcrumbRecord[] = [
  { label: "Home", href: "#" },
  { label: "Apparel", href: "#" },
  { label: "Casual", href: "#" },
  { label: "Topwear", href: "#" },
  { label: "Shirts", href: "#" },
];

const BreadcrumbDemo = () => {
  return (
    <Wrapper title="Breadcrumb">
      <Breadcrumb
        breadcrumbs={BREADCRUMBS}
        separator={
          <Icon
            as={ChevronRightIcon}
            color="accent.emphasized"
            aria-label="separator-icon"
          />
        }
      />
    </Wrapper>
  );
};

export default BreadcrumbDemo;
