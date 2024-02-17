import { EMPTY_ARRAY, EMPTY_OBJECT } from "../constants.js";

const { isArray } = Array;

/**
 * Checks whether the provided value is empty or not.
 * A value is empty if it does not own any property (in case of an object) or item (in case of an array), or if it is `null` or `undefined`.
 *
 * @param value The value to check.
 * @returns `true` if the value is empty, `false` otherwise.
 */
export function isEmpty(value?: any) {
  if (value == null || value === EMPTY_OBJECT || value === EMPTY_ARRAY) {
    return true;
  }
  if (isArray(value)) {
    return value.length === 0;
  }
  for (const name in value) {
    if (Object.prototype.hasOwnProperty.call(value, name)) {
      return false;
    }
  }
  return true;
}
