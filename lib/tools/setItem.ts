import { APPEND, EMPTY_ARRAY, PREPEND, REMOVE } from "../constants.js";
import { Append, Prepend, Remove } from "../types.js";

/**
 * Returns a new array with `array[index]` set to `value` if `array[index]` is strictly different from `value`. Otherwise, returns the provided `array`.
 * If `value` is the symbol `REMOVE`, returns a new array with the value at `index` removed.
 * If `index` is the symbol `APPEND`, returns a new array with the provided `value` appended.
 * If `index` is the symbol `PREPEND`, returns a new array with the provided `value` prepended.
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
  value: T | Remove,
): T[] {
  if (index === APPEND) {
    if (value === REMOVE) {
      return array;
    }
    return [...array, value];
  }
  if (index === PREPEND) {
    if (value === REMOVE) {
      return array;
    }
    return [value, ...array];
  }
  if (index === undefined || index < 0 || index >= array.length) {
    return array;
  }
  if (array[index] === value) {
    return array;
  }
  if (value === REMOVE) {
    return [...array.slice(0, index), ...array.slice(index + 1)];
  }
  return [...array.slice(0, index), value, ...array.slice(index + 1)];
}
