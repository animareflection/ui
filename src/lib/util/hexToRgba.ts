interface Params {
  /** Input hexadecimal string. */
  hex: `#${string}`;
  /** Alpha (transparency) value (clamp to 0-1). Defaults to 1. */
  alpha?: number;
  /** Optional function to apply to each component (r, g, b). */
  componentFactory?: (component: number) => number;
}

/**
 * Convert a hexadecimal value (e.g. color code) to its `rgba` equivalent.
 * Note that shorthand hex values are unsupported; input hex must be 6 characters long.
 */
const hexToRgba = ({
  hex,
  alpha = 1,
  componentFactory = (component) => component,
}: Params) => {
  const [r, g, b] = hex.match(/\w\w/g)!.map((x) => parseInt(x, 16));

  return `rgba(${componentFactory(r)}, ${componentFactory(
    g,
  )}, ${componentFactory(b)}, ${alpha})`;
};

export default hexToRgba;
