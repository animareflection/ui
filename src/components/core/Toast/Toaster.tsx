import { Toaster as SonnerToaster } from "sonner";

import type { ComponentProps } from "react";

export interface Props extends ComponentProps<typeof SonnerToaster> {}

/**
 * Toaster.
 */
const Toaster = ({ ...props }: Props) => (
  <SonnerToaster
    toastOptions={{
      unstyled: true,
    }}
    {...props}
  />
);

export default Toaster;
