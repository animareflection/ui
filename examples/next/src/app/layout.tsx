import { ReactNode } from "react";

import "main.css";

interface Props {
  children: ReactNode;
}

import "main.css";

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
