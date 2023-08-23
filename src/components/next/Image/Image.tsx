import NextImage from "next/image";

import { AspectRatio } from "generated/panda/jsx";

import type { AspectRatioProps } from "generated/panda/jsx";
import type { ImageProps as NextImageProps } from "next/image";

export interface Props extends NextImageProps {
  containerProps?: Omit<AspectRatioProps, "width" | "height">;
}

/**
 * Next.js-enhanced image.
 */
const Image = ({ containerProps, fill, ...rest }: Props) => (
  <AspectRatio
    pos="relative"
    overflow="hidden"
    w={fill ? "100%" : containerProps!.w}
    h={fill ? "100%" : containerProps!.h}
    {...containerProps}
  >
    <NextImage
      priority
      fill={true}
      sizes={
        fill
          ? "(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          : undefined
      }
      {...rest}
    />
  </AspectRatio>
);

export default Image;
