import { Carousel } from "@animareflection/ui/client";
import { Image } from "@animareflection/ui/next";

import { Wrapper } from "components";

const IMAGE_SOURCES = [
  "https://tinyurl.com/5b6ka8jd",
  "https://tinyurl.com/7rmccdn5",
  "https://tinyurl.com/59jxz9uu",
  "https://tinyurl.com/6jurv23t",
  "https://tinyurl.com/yp4rfum7",
];

const CarouselDemo = () => (
  <Wrapper title="Carousel" w="600px" placeSelf="start">
    <Carousel
      images={IMAGE_SOURCES.map((src, index) => (
        <Image
          key={index}
          src={src}
          alt={`Image ${index + 1}`}
          style={{ height: "398px", width: "100%", objectFit: "cover" }}
        />
      ))}
    />
  </Wrapper>
);

export default CarouselDemo;
