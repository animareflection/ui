import {
  Avatar as PrimitiveAvatar,
  AvatarFallback,
  AvatarImage,
} from "components/primitives";

import type { AvatarProps } from "components/primitives";

export interface Props extends AvatarProps {}

/**
 * Core UI avatar.
 */
const Avatar = ({ ...rest }: Props) => {
  return (
    <PrimitiveAvatar {...rest}>
      <AvatarFallback>PA</AvatarFallback>
      <AvatarImage src="https://i.pravatar.cc/300" alt="avatar" />
    </PrimitiveAvatar>
  );
};

export default Avatar;
