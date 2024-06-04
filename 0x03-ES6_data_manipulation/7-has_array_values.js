/**
 * Checks if a set contains each element in an array.
 * @param {Set} set - The collection of unique items.
 * @param {*} array - The array of items.
 * @returns {Boolean}
 * @example  hasValuesFromArray(new Set([1, 2, 3]), [1, 2]); // true
 */
export default function hasValuesFromArray(set, array) {
    return array.every((value) => set.has(value));
  }