import { Breadcrumb, Icon } from "@animareflection/ui/client";
import { FiChevronRight as ChevronRightIcon } from "react-icons/fi";

import { Wrapper } from "components";

const BreadcrumbDemo = () => {
  // Note: To obtain the pathname in vite-react, use `useLocation()` from "react-router-dom".
  // Ensure the App is wrapped in `BrowserRouter`.

  const demoPathname = "breadcrumb";
  return (
    <Wrapper title="Breadcrumb">
      <Breadcrumb
        pathname={demoPathname}
        baseUrl="storybook.animareflection.com"
        seperator={<Icon as={ChevronRightIcon} color="accent.emphasized" />}
      />
    </Wrapper>
  );
};

export default BreadcrumbDemo;
