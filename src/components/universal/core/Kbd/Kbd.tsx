import { panda } from "generated/panda/jsx";

import type { ReactNode } from "react";

export interface Props {
  children: ReactNode;
}

/**
 * Core UI Keyboard component.
 */
const Kbd = ({ children }: Props) => {
  return (
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
      borderTopWidth="1px"
      borderXWidth="1px"
      borderBottomWidth="3px"
      borderColor={{ base: "gray.200", _dark: "gray.500" }}
    >
      {children}
    </panda.kbd>
  );
};

export default Kbd;
