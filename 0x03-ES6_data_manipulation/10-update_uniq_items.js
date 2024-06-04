/**
 * Changes the quantity of unique grocery items to 100.
 * If the quantity is not unique, it remains unchanged.
 * @param {Map<String, number>} map - A map of the name of a
 * grocery and its quantity.
 * @throws {Error} - If map is not an instance of Map.
 */
export default function updateUniqueItems(map) {
    if (!(map instanceof Map)) {
      throw new Error('Cannot process');
    }
    map.forEach((value, key) => {
      if (value === 1) {
        map.set(key, 100);
      }
    });
  }