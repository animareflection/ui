import { useEffect, useState } from "react";

import { breakpoints } from "lib/panda";
import { emToPx } from "lib/utils";

import type { BreakpointToken } from "generated/panda/tokens";

interface WindowDimensions {
  width: typeof window.innerWidth;
  height: typeof window.innerHeight;
}

/**
 * Get the current theme breakpoint.
 */
// TODO add fallback support (especially useful for SSR)
const useBreakpoint = () => {
  const [breakpoint, setBreakpoint] = useState<BreakpointToken>("base"),
    [windowDimensions, setWindowDimensions] = useState<WindowDimensions>({
      width: 0,
      height: 0,
    });

  const handleResize = () => {
    setWindowDimensions({
      width: window.innerWidth,
      height: window.innerHeight,
    });
  };

  useEffect(() => {
    // attach listener to window `resize` event
    window.addEventListener("resize", handleResize);
    handleResize();

    // create tuple mapping of semantic breakpoint keys with their values
    const range = Object.entries(breakpoints)
      .map(([key, breakpoint]) => [key, emToPx(breakpoint as `${number}em`)])
      // reverse to set largest breakpoint at the start (top-down; decreasing order)
      .reverse();

    setBreakpoint(
      // find the first "floored" breakpoint below the window width
      range.find(
        ([, breakpoint]) => +breakpoint <= windowDimensions.width,
      )?.[0] as BreakpointToken,
    );

    // clean up listener
    return () => window.removeEventListener("resize", handleResize);
  }, [windowDimensions.width]);

  return breakpoint;
};

export default useBreakpoint;
