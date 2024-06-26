import { APPEND, EMPTY_ARRAY, PREPEND } from "../constants.js";
import { Append, Prepend } from "../types.js";

/**
 * Returns a new array with `array[index]` set to `value` if `array[index]` is strictly different from `value`. Otherwise, returns the provided `array`.
 * If `index` is `undefined`, a negative number, or greater than `array.length`, returns the `array` untouched.
 * If the `array` is `undefined`, it is considered as an `EMPTY_ARRAY`.
 *
 * @example
 * ```typescript
 * const result = setItem(["a", "b"], 1, "c")
 * // ["a", "c"]
 * ```
 *
 * @param array The array to update.
 * @param index The index of the item of the array to update.
 * @param value The value to set the item to.
 * @returns A new updated array or the same `array` if no change was necessary.
 */
export function setItem<T>(
  array: T[] | undefined = EMPTY_ARRAY as unknown as T[],
  index: number | undefined | Append | Prepend,
  value: T,
): T[] {
  if (index === APPEND) {
    return [...array, value];
  }
  if (index === PREPEND) {
    return [value, ...array];
  }
  if (index === undefined || index < 0 || index >= array.length) {
    return array;
  }
  if (array[index] === value) {
    return array;
  }
  return [...array.slice(0, index), value, ...array.slice(index + 1)];
}
