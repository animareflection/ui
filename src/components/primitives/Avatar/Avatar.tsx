import {
  Avatar as ArkAvatar,
  AvatarFallback as ArkAvatarFallback,
  AvatarImage as ArkAvatarImage,
} from "@ark-ui/react";

import { panda } from "generated/panda/jsx";

import type {
  AvatarProps as ArkAvatarProps,
  AvatarFallbackProps as ArkAvatarFallbackProps,
  AvatarImageProps as ArkAvatarImageProps,
} from "@ark-ui/react";
import type { PandaComponent } from "generated/panda/types/jsx";

/**
 * Core UI avatar primitives.
 */
export type AvatarProps = ArkAvatarProps;
const Avatar: PandaComponent<typeof ArkAvatar> = panda(ArkAvatar);

export type AvatarFallbackProps = ArkAvatarFallbackProps;
export const AvatarFallback = panda(ArkAvatarFallback);

export type AvatarImageProps = ArkAvatarImageProps;
export const AvatarImage = panda(ArkAvatarImage);

export default Avatar;
