import { Image } from "@animareflection/ui";

import { Wrapper } from "components/core";

const ImageDemo = () => (
  <Wrapper title="Image">
    <Image src="/img/logo.png" alt="AR logo" h={40} w={40} />
  </Wrapper>
);

export default ImageDemo;
