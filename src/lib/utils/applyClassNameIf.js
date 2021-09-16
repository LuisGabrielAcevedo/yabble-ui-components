/**
 * applyClassNameIf
 * @param {boolean} condition Condition to evaluate.
 * @param {string} className className to apply if the condition of the first parameter is true.
 * @returns {string} Returns the className if the condition is true or an empty string otherwise.
 */
export const applyClassNameIf = (condition, className = '') =>
  condition ? className : ''
