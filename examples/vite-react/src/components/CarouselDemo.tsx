import { Carousel } from "@animareflection/ui/client";

import { Wrapper } from "components";

const IMAGES = [
  "https://tinyurl.com/5b6ka8jd",
  "https://tinyurl.com/7rmccdn5",
  "https://tinyurl.com/59jxz9uu",
  "https://tinyurl.com/6jurv23t",
  "https://tinyurl.com/yp4rfum7",
];

const CarouselDemo = () => (
  <Wrapper title="Carousel" w="600px" placeSelf="start">
    <Carousel images={IMAGES} />
  </Wrapper>
);

export default CarouselDemo;
