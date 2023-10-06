import {
  PrimitiveAvatar,
  PrimitiveAvatarFallback,
  PrimitiveAvatarImage,
} from "components/primitives";
import { avatar } from "generated/panda/recipes";
import { useIsClient } from "lib/hooks";

import type { PrimitiveAvatarProps } from "components/primitives";
import type { AvatarVariantProps } from "generated/panda/recipes";

export interface Props
  // TODO: remove children omit once `@ark-ui/react` fixes required children type
  extends Omit<PrimitiveAvatarProps, "id">,
    AvatarVariantProps {
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
  const classNames = avatar({ size, variant });

  const isClient = useIsClient();

  if (!isClient) return null;

  return (
    <PrimitiveAvatar className={classNames.root} {...rest}>
      <PrimitiveAvatarFallback className={classNames.fallback}>
        {fallback}
      </PrimitiveAvatarFallback>
      <PrimitiveAvatarImage
        objectFit="contain"
        className={classNames.image}
        src={src}
        alt={alt}
      />
    </PrimitiveAvatar>
  );
};

export default Avatar;
