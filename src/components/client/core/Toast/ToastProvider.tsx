import { ToastProvider as PrimitiveToastProvider } from "components/primitives";

import type { ToastProviderProps } from "components/primitives";

export interface Props extends ToastProviderProps {}

export const ToastProvider = ({ children, ...rest }: Props) => {
  return <PrimitiveToastProvider {...rest}>{children}</PrimitiveToastProvider>;
};

export default ToastProvider;
