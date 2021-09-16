/**
 * formatClassName
 * @param {string} additionals Class name to append at the end of the result.
 * @param {[boolean, string][]} conditionals Arrays of tuples. Each tuple has a boolean and a string to append at the compound class name to be returned.
 * @returns {string} A string with the compound class name.
 */
export const formatClassName = (additionals = '', conditionals = []) => {
  let modifiers = ''
  conditionals.forEach(elem => {
    if (elem[0]) modifiers += `${elem[1]} ` || ''
  })
  return modifiers.concat(additionals).trim()
}
