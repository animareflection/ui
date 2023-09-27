import { ReactNode } from "react";

interface Props {
  children: ReactNode;
}

import "main.css";
import { BreadcrumbDemo } from "components/core";

/**
 * Root application layout.
 */
const RootLayout = ({ children }: Props) => (
  <html lang="en" style={{ height: "100%" }}>
    <head />

    <body>{children}</body>
  </html>
);

export default RootLayout;
