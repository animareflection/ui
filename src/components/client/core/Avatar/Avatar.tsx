import {
  Avatar as PrimitiveAvatar,
  AvatarFallback,
  AvatarImage,
} from "components/primitives";
import { avatar } from "generated/panda/recipes";

import type { AvatarProps } from "components/primitives";
import type { AvatarVariantProps } from "generated/panda/recipes";

export interface Props extends AvatarProps, AvatarVariantProps {
  src: string;
  alt: string;
}

/**
 * Core UI avatar.
 */
const Avatar = ({ src, alt, size, ...rest }: Props) => {
  const classNames = avatar({ size });
  return (
    <PrimitiveAvatar className={classNames.root} {...rest}>
      <AvatarFallback className={classNames.fallback}>PA</AvatarFallback>
      <AvatarImage className={classNames.image} src={src} alt={alt} />
    </PrimitiveAvatar>
  );
};

export default Avatar;
