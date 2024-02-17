import { isEmpty } from "./isEmpty.js";

/**
 * Returns `undefined` if the value is empty.
 *
 * @param value The value to check.
 * @returns `undefined` if the value is empty, the value otherwise.
 */
export function undefinedIfEmpty<T>(value?: T) {
  if (isEmpty(value)) {
    return undefined;
  }
  return value;
}
