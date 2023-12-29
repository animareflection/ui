/**
 * Convert a relative `em` value to a pixel (`px`) value.
 * @param em The `em` value to convert.
 * @param base The base pixel value to use for the conversion. Defaults to `16px`.
 * @returns The converted `px` value.
 */
const emToPx = (em: `${number}em`, base = 16) => +em.split("em")[0] * base;

export default emToPx;
