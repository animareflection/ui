import NextImage from "next/image";

import { AspectRatio } from "generated/panda/jsx";

import type { AspectRatioProps } from "generated/panda/jsx";
import type { ImageProps as NextImageProps } from "next/image";

export interface Props extends NextImageProps {
  containerProps?: Omit<AspectRatioProps, "width" | "height">;
}

// TODO remove once https://github.com/vercel/next.js/issues/52216 is resolved (`next/image` affected by a default + named export bundling bug)
// solution from https://github.com/prismicio/prismic-next/pull/79/files
let ResolvedImage = NextImage;
if ("default" in ResolvedImage) {
  // @ts-ignore temporary workaround, see note above
  ResolvedImage = (ResolvedImage as unknown as { default: typeof Image })
    .default;
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
    <ResolvedImage
      priority
      fill
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
