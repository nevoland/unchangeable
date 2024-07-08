import { APPEND, EMPTY_ARRAY } from "../constants.js";
import { Append } from "../types.js";

/**
 * Returns a new array with the `value` inserted at `index`.
 * If `index` is symbol `APPEND`, it is considered to be `array.length`, which has the effect of appending the `value`.
 * If `index` is `undefined`, a negative number, or strictly greater than `array.length`, returns the `array` untouched.
 * If the `array` is `undefined`, it is considered as an `EMPTY_ARRAY`.
 *
 * @example
 * ```typescript
 * const result = insertItem(["a", "b"], 2, "c")
 * // ["a", "b", "c"]
 * ```
 *
 * @param array The array to update.
 * @param index The index of the item of the array to update.
 * @param value The value to set the item to.
 * @returns A new updated array or the same `array` if no change was necessary.
 */
export function insertItem<T>(
  array: T[] | undefined = EMPTY_ARRAY as unknown as T[],
  index: number | Append | undefined,
  value: T,
): T[] {
  const { length } = array;
  const normalizedIndex = index === APPEND ? length : index;
  if (
    normalizedIndex === undefined ||
    normalizedIndex < 0 ||
    normalizedIndex > length
  ) {
    return array;
  }
  return [
    ...array.slice(0, normalizedIndex),
    value,
    ...array.slice(normalizedIndex + 1),
  ];
}
