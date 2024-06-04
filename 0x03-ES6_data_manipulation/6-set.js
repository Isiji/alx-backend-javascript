/**
 * Creates a set from an array.
 * @param {Array} array - The source array.
 * @returns {Set}
 * @example setFromArray([1, 2, 3, 4, 5])  // Set {1, 2, 3, 4, 5}
 * @example setFromArray(['foo', 'bar', 'baz'])  // Set {'foo', 'bar', 'baz'}
 */
export default function setFromArray(array) {
    return new Set(array);
  }