import {
  PrimitiveAvatar,
  PrimitiveAvatarFallback,
  PrimitiveAvatarImage,
} from "components/primitives";
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
 * Avatar.
 */
const Avatar = ({ src, alt, fallback = "AR", ...rest }: Props) => {
  const isClient = useIsClient();

  if (!isClient) return null;

  return (
    <PrimitiveAvatar {...rest}>
      <PrimitiveAvatarFallback>{fallback}</PrimitiveAvatarFallback>
      <PrimitiveAvatarImage objectFit="contain" src={src} alt={alt} />
    </PrimitiveAvatar>
  );
};

export default Avatar;
