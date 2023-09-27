import {
  Avatar as PrimitiveAvatar,
  AvatarFallback,
  AvatarImage,
} from "components/primitives";
import { panda } from "generated/panda/jsx";
import { avatar } from "generated/panda/recipes";
import { useIsMounted } from "index.hooks";

import type { AvatarProps } from "components/primitives";
import type { AvatarVariantProps } from "generated/panda/recipes";

export interface Props extends AvatarProps, AvatarVariantProps {
  src?: string;
  alt?: string;
  fallback?: string;
}

/**
 * Core UI avatar.
 */
const Avatar = ({
  src,
  alt,
  fallback = "AR",
  size,
  variant,
  ...rest
}: Props) => {
  const isMounted = useIsMounted();

  const classNames = avatar({ size, variant });

  if (!isMounted) return null;

  return (
    <PrimitiveAvatar className={classNames.root} {...rest}>
      <AvatarFallback className={classNames.fallback}>
        <panda.div
          height="inherit"
          justifyContent="center"
          alignItems="center"
          display="flex"
        >
          {fallback}
        </panda.div>
      </AvatarFallback>
      <AvatarImage className={classNames.image} src={src} alt={alt} />
    </PrimitiveAvatar>
  );
};

export default Avatar;
