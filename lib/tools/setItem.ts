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
  array: T[] | undefined,
  index: number | undefined,
  value: T,
): T[];
export function setItem<T>(
  array: T[] | undefined,
  operation: Prepend | Append | Remove,
  value: T,
): T[];
export function setItem<T>(
  array: T[] | undefined,
  index: number | undefined,
  operation: Remove,
): T[];
export function setItem<T>(
  array: T[] | undefined,
  index: number | undefined,
  operation: Prepend | Append,
  value: T,
): T[];
export function setItem<T>(
  array: T[] | undefined = EMPTY_ARRAY as unknown as T[],
  indexOrOperation: number | undefined | Prepend | Append | Remove,
  valueOrOperation: T | Prepend | Append | Remove,
  valueOrNothing?: T,
): T[] {
  switch (indexOrOperation) {
    case PREPEND: {
      return [valueOrOperation as T, ...array];
    }
    case APPEND: {
      return [...array, valueOrOperation as T];
    }
    case REMOVE: {
      const index = array.indexOf(valueOrOperation as T);
      if (index === -1) {
        return array;
      }
      return [...array.slice(0, index), ...array.slice(index + 1)];
    }
    case undefined:
      return array;
    default: {
      const index = indexOrOperation;
      if (index === undefined || index < 0 || index >= array.length) {
        return array;
      }
      switch (valueOrOperation) {
        case PREPEND: {
          return [
            ...array.slice(0, index),
            valueOrNothing!,
            ...array.slice(index),
          ];
        }
        case APPEND: {
          return [
            ...array.slice(0, index + 1),
            valueOrNothing!,
            ...array.slice(index + 1),
          ];
        }
        case REMOVE: {
          return [...array.slice(0, index), ...array.slice(index + 1)];
        }
        default: {
          if (array[index] === valueOrOperation) {
            return array;
          }
          return [
            ...array.slice(0, index),
            valueOrOperation,
            ...array.slice(index + 1),
          ];
        }
      }
    }
  }
}
