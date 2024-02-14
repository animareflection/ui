/**
 * @file Avatar primitives.
 */
import { AvatarRoot, AvatarFallback, AvatarImage } from "@ark-ui/react";

import { panda } from "generated/panda/jsx";
import { avatar } from "generated/panda/recipes";
import { createStyleContext } from "lib/util";

import type { ComponentProps } from "react";

const { withProvider, withContext } = createStyleContext(avatar);

export type PrimitiveAvatarProps = ComponentProps<typeof PrimitiveAvatar>;
const PrimitiveAvatar = withProvider(panda(AvatarRoot), "root");

export type PrimitiveAvatarFallbackProps = ComponentProps<
  typeof PrimitiveAvatarFallback
>;
export const PrimitiveAvatarFallback = withContext(
  panda(AvatarFallback),
  "fallback",
);

export type PrimitiveAvatarImageProps = ComponentProps<
  typeof PrimitiveAvatarImage
>;
export const PrimitiveAvatarImage = withContext(panda(AvatarImage), "image");

export default PrimitiveAvatar;
