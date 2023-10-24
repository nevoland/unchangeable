import { isEmpty } from "./isEmpty";

/**
 * Returns `undefined` if the object is empty.
 *
 * @param value The object to check.
 * @returns `undefined` if the object is empty, the object otherwise.
 */
export function undefinedIfEmpty<T extends object = {}>(value?: T) {
  if (isEmpty(value)) {
    return undefined;
  }
  return value;
}
