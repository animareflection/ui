import { Banner } from "@animareflection/ui";

import { Wrapper } from "components";

const BannerDemo = () => (
  <Wrapper title="Banner">
    <Banner closable>
      🚨 MirageSwap is alpha software. Expect bugs and missing functionality!
    </Banner>
  </Wrapper>
);

export default BannerDemo;
