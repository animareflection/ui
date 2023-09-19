import { Toaster as ReactHotToaster } from "react-hot-toast";

import type { ToasterProps } from "react-hot-toast";

export interface Props extends ToasterProps {}

/**
 * Core UI toaster.
 */
const Toaster = ({ ...props }: Props) => (
  <ReactHotToaster
    toastOptions={{
      style: {
        background: "var(--colors-bg-default)",
        color: "var(--colors-fg-default)",
        borderRadius: "var(--radii-md)",
        borderWidth: "1px",
        borderColor: "var(--colors-border-default)",
        boxShadow: "var(--shadows-lg)",
        minWidth: "var(--sizes-32)",
      },
      success: {
        style: {
          background: "var(--colors-green-100)",
          color: "var(--colors-green-800)",
          borderColor: "var(--colors-green-800)",
        },
      },
      error: {
        style: {
          background: "var(--colors-red-100)",
          color: "var(--colors-red-800)",
          borderColor: "var(--colors-red-800)",
        },
      },
      loading: {
        style: {
          background: "var(--colors-brand-primary-100)",
          color: "var(--colors-brand-primary-800)",
          borderColor: "var(--colors-brand-primary-800)",
        },
        iconTheme: {
          primary: "var(--colors-brand-primary-800)",
          secondary: "var(--colors-brand-primary-200)",
        },
      },
    }}
    {...props}
  />
);

export default Toaster;
