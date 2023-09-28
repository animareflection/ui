import { Avatar, AvatarFallback, AvatarImage } from "@ark-ui/react";

import { panda } from "generated/panda/jsx";

import type {
  AvatarProps,
  AvatarFallbackProps,
  AvatarImageProps,
} from "@ark-ui/react";
import type { PandaComponent } from "generated/panda/types/jsx";

/**
 * Core UI avatar primitives.
 */
export type PrimitiveAvatarProps = AvatarProps;
const PrimitiveAvatar: PandaComponent<typeof Avatar> = panda(Avatar);

export type PrimitiveAvatarFallbackProps = AvatarFallbackProps;
export const PrimitiveAvatarFallback = panda(AvatarFallback);

export type PrimitiveAvatarImageProps = AvatarImageProps;
export const PrimitiveAvatarImage = panda(AvatarImage);

export default PrimitiveAvatar;
