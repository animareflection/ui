import { ReactNode } from "react";

interface Props {
  children: ReactNode;
}

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