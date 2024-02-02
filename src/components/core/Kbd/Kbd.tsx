import { panda } from "generated/panda/jsx";

import type { ReactNode } from "react";

export interface Props {
  children: ReactNode;
}

/**
 * Keyboard.
 */
const Kbd = ({ children }: Props) => (
  <panda.kbd
    display="inline-flex"
    px={2}
    py={1}
    fontSize="xs"
    fontFamily="code"
    fontWeight="semibold"
    color="neutral.950"
    bgColor={{ base: "gray.100", _dark: "gray.400" }}
    borderRadius="lg"
    borderWidth="1px 1px 2px"
    borderColor={{ base: "gray.200", _dark: "gray.500" }}
  >
    {children}
  </panda.kbd>
);

export default Kbd;
