/**
    * Create an Int8 Typed Array of length 10, with the value of 42 at position 5.
    * @param {number} length
    * @param {number} position
    * @param {number} value
    * @return {object} - Int8 Typed Array
    * @example createInt8TypedArray(10, 5, 42) => Int8Array(10) [0, 0, 0, 0, 0, 42, 0, 0, 0, 0]
    * @example createInt8TypedArray(10, 11, 42) => Error: Position outside range
 */
export default function createInt8TypedArray(length, position, value) {
    if (position >= length) {
      throw new Error('Position outside range');
    }
    const buf = new DataView(new ArrayBuffer(length), 0, length);
    buf.setInt8(position, value);
    return buf;
  }