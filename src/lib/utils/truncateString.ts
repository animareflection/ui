/**
 * Truncate string to first and last four digits (with dots inbetween).
 *
 * @param {string} str string to truncate
 * @param {number} terminalCharacters number of terminal (left/right) characters to maintain; homogeneous between left and right
 *
 * @example
 * // returns "abcd...wxyz"
 * truncateString("abcdefghijklmnopqrstuvwxyz")
 *
 * @example
 * // returns "abcdefgh...stuvwxyz"
 * truncateString("abcdefghijklmnopqrstuvwxyz", 8)
 *
 * @returns truncated string
 */
const truncateString = (str: string, terminalCharacters = 4) =>
  (str =
    str.substring(0, terminalCharacters) +
    "..." +
    str.substring(str.length - terminalCharacters));

export default truncateString;
