import { EMPTY_OBJECT } from "../constants.js";

/**
 * Checks whether the provided object is empty or not.
 *
 * @param value The object to check.
 * @returns `true` if the object is empty, `false` otherwise.
 */
export function isEmpty<T extends object = {}>(value?: T | null) {
  if (value == null || value === EMPTY_OBJECT) {
    return true;
  }
  for (const name in value) {
    // eslint-disable-next-line no-prototype-builtins
    if (value.hasOwnProperty(name)) {
      return false;
    }
  }
  return true;
}
