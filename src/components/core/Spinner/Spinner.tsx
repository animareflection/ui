import { panda } from "generated/panda/jsx";
import { spinner } from "generated/panda/recipes";

import type { ComponentProps } from "react";

export type Props = ComponentProps<typeof PandaSpinner>;

const PandaSpinner = panda("svg", spinner);

/**
 * Core Spinner component.
 */
const Spinner = ({ ...props }: Props) => {
  return (
    <PandaSpinner
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      animation="infinite-spin"
      role="spinner"
      {...props}
    >
      <panda.path
        opacity="0.4"
        fillRule="evenodd"
        clipRule="evenodd"
        d="M12 19C15.866 19 19 15.866 19 12C19 8.13401 15.866 5 12 5C8.13401 5 5 8.13401 5 12C5 15.866 8.13401 19 12 19ZM12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z"
        fill="gray.500"
      />
      <panda.path
        d="M2 12C2 6.47715 6.47715 2 12 2V5C8.13401 5 5 8.13401 5 12H2Z"
        fill="currentColor"
      />
    </PandaSpinner>
  );
};

export default Spinner;
