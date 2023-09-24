import { Image } from "@animareflection/ui/next";

import { Wrapper } from "components/core";

const ImageDemo = () => (
  <Wrapper title="NextJS Enhanced Image">
    <Image
      src="/img/logo.png"
      alt="AR logo"
      containerProps={{
        h: 40,
        w: 40,
      }}
    />
  </Wrapper>
);

export default ImageDemo;
