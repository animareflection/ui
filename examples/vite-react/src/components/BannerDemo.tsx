import { VStack } from "@animareflection/ui";
import { Banner } from "@animareflection/ui/client";

import { Wrapper } from "components";

const BannerDemo = () => (
  <Wrapper title="Banner">
    <VStack position="relative" inset={0}>
      <Banner closable>Banner</Banner>
    </VStack>
  </Wrapper>
);

export default BannerDemo;
