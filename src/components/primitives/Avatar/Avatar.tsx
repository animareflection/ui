import { Avatar, AvatarFallback, AvatarImage } from "@ark-ui/react";

import { panda } from "generated/panda/jsx";
import { avatar } from "generated/panda/recipes";
import { createStyleContext } from "lib/util";

import type { PandaComponent } from "generated/panda/types/jsx";
import type { ComponentProps } from "react";

const { withProvider, withContext } = createStyleContext(avatar);

/**
 * Core UI avatar primitives.
 */
export type PrimitiveAvatarProps = ComponentProps<typeof PrimitiveAvatar>;
const PrimitiveAvatar: PandaComponent<typeof Avatar> = panda(Avatar);

export type PrimitiveAvatarFallbackProps = ComponentProps<
  typeof PrimitiveAvatarFallback
>;
export const PrimitiveAvatarFallback = panda(AvatarFallback);

export type PrimitiveAvatarImageProps = ComponentProps<
  typeof PrimitiveAvatarImage
>;
export const PrimitiveAvatarImage = panda(AvatarImage);

export default PrimitiveAvatar;
