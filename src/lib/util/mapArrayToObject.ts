type ComputedPropertyName = string | number | symbol;

/**
 * Map an array to an object.
 * @param arr Array to map.
 * @param val Value to assign to each key.
 * @returns Object with the array values as keys and the value of each key is an array with a single value: "*".
 *
 * @example
 * mapArrayToObject(["a", "b", "c"], "letter"); // { a: "letter", b: "letter", c: "letter" }
 */
const mapArrayToObject = <T extends ComputedPropertyName, V>(
  arr: T[],
  val: V,
) => arr.reduce((o, key) => ({ ...o, [key]: val }), {});

export default mapArrayToObject;
