/**
 * applyVendorPrefix
 * @param {string} property CSS Property to apply vendor prefix to it.
 * @param {string} value Value of the CSS property passed in as the first argument.
 * @returns {{
 *    ["-webkit-$property"]: string
 *    ["-moz-$property"]: string
 *    ["-ms-$property"]: string
 *    ["-o-$property"]: string
 *    $property: string
 * }} An styles object with the css rule vendor prefixed.
 */
export const applyVendorPrefix = (property = '', value = '') => ({
  [`-webkit-${property}`]: value,
  [`-moz-${property}`]: value,
  [`-ms-${property}`]: value,
  [`-o-${property}`]: value,
  property: value,
})
