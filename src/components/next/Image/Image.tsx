import NextImage from "next/image";

import { AspectRatio } from "generated/panda/jsx";

import type { AspectRatioProps } from "generated/panda/jsx";
import type { ImageProps as NextImageProps } from "next/image";

export interface Props extends NextImageProps {
  containerProps?: Omit<AspectRatioProps, "width" | "height" | "style">;
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
const Image = ({
  containerProps = { w: "100%", h: "100%" },
  style,
  fill,
  ...rest
}: Props) => (
  <AspectRatio
    pos="relative"
    overflow="hidden"
    w={style ? undefined : fill ? "100%" : containerProps.w}
    h={style ? undefined : fill ? "100%" : containerProps.h}
    style={style}
    {...containerProps}
  >
    <ResolvedImage
      priority
      fill
      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
      style={{
        ...style,
        height: undefined,
        width: undefined,
      }}
      {...rest}
    />
  </AspectRatio>
);

export default Image;
