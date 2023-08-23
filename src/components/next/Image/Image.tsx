import NextImage from "next/image";

import { panda } from "generated/panda/jsx";

import type { JsxStyleProps } from "generated/panda/types";
import type { ImageProps as NextImageProps } from "next/image";

const NEXT_IMAGE_PROPS = [
  "src",
  "alt",
  "sizes",
  "fill",
  "loader",
  "quality",
  "priority",
  "loading",
  "placeholder",
  "blurDataURL",
  "unoptimized",
  "onLoadingComplete",
  "alt",
  "crossOrigin",
  "decoding",
  "loading",
  "referrerPolicy",
  "sizes",
  "src",
  "useMap",
] as const;

type overLappingProps =
  | "fill"
  | "content"
  | "color"
  | "objectFit"
  | "objectPosition"
  | "translate";

export interface Props
  extends Omit<NextImageProps, "width" | "height">,
    Omit<JsxStyleProps, overLappingProps> {}

/**
 * Next.js-enhanced image.
 */
const Image = ({ fill, height, width, ...rest }: Props) => {
  const containerProps = { ...rest };
  const imageProps = { ...rest };

  for (const prop of Object.keys(rest) as (keyof typeof rest)[]) {
    if ((NEXT_IMAGE_PROPS as readonly string[]).includes(prop))
      delete containerProps[prop];
    else delete imageProps[prop];
  }
  return (
    <panda.div
      display="flex"
      pos="relative"
      overflow="hidden"
      flexShrink={0}
      h={fill ? "100%" : height}
      w={fill ? "100%" : width}
      {...containerProps}
    >
      <NextImage
        priority
        fill={true}
        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        {...imageProps}
      />
    </panda.div>
  );
};

export default Image;
