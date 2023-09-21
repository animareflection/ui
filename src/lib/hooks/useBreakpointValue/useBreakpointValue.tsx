import useBreakpoint from "../useBreakpoint/useBreakpoint";
import { breakpoints as defaultBreakpoints } from "lib/panda";

import type { BreakpointToken } from "generated/panda/tokens";

/**
 * Get the closest value to the current breakpoint. This logic is taken from Chakra UI's `getClosestValue` function.
 * @see https://github.com/chakra-ui/chakra-ui/blob/bd3d0fd2f444be2ba23764d7c86906cb488fb409/packages/components/media-query/src/media-query.utils.ts#L3-L32
 * @param values The arbitrary values to compare against.
 * @param breakpoint The current breakpoint.
 * @returns The closest value to the current breakpoint.
 */
const getClosestValue = <T,>(values: Record<string, T>, breakpoint: string) => {
  const breakpoints = Object.keys(defaultBreakpoints);

  let index = Object.keys(values).indexOf(breakpoint);

  if (index !== -1) return values[breakpoint];

  let stopIndex = breakpoints.indexOf(breakpoint);

  while (stopIndex >= 0) {
    const key = breakpoints[stopIndex];

    if (values.hasOwnProperty(key)) {
      index = stopIndex;
      break;
    }
    stopIndex -= 1;
  }

  if (index !== -1) {
    const key = breakpoints[index];
    return values[key];
  }

  return undefined;
};

export type Options<V> = Partial<Record<BreakpointToken, V>>;

/**
 * Get conditional value based on theme breakpoints.
 */
const useBreakpointValue = <V,>(values: Options<V>): V | undefined => {
  const breakpoint = useBreakpoint();

  return getClosestValue(values, breakpoint);
};

export default useBreakpointValue;
