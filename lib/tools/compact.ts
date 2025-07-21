import { EMPTY_ARRAY, EMPTY_OBJECT } from "../constants.js";
import type { WithoutEmpty } from "../types.js";

import { isEmpty } from "./isEmpty.js";
import { negate } from "./negate.js";

const { isArray } = Array;

export function compact(value?: undefined): undefined;
export function compact(value: null): null;
export function compact<T extends readonly any[]>(value: T): WithoutEmpty<T>;
export function compact<T extends object>(value: T): WithoutEmpty<T>;
/**
 * Returns a new object or array with all empty values removed.
 * An empty value is considered empty if the `isEmpty` function returns `true` for it.
 *
 * If the value is an empty array or object, it returns the respective empty constant (`EMPTY_ARRAY` or `EMPTY_OBJECT`).
 * If the value is an array, it filters out all empty items.
 * If the value is an object, it removes all properties with empty values.
 *
 * @param value The value to process.
 * @returns A new object or array with empty values removed, or the respective empty constant if the value is empty.
 */
export function compact<T extends object | readonly any[]>(value: T): any {
  if (value == null) {
    return value;
  }
  if (value === EMPTY_ARRAY) {
    return value;
  }
  if (value === EMPTY_OBJECT) {
    return value;
  }
  if (isArray(value)) {
    if (isEmpty(value)) {
      return EMPTY_ARRAY as T;
    }
    return value.filter(negate(isEmpty));
  }
  if (isEmpty(value)) {
    return EMPTY_OBJECT;
  }
  return Object.fromEntries(
    Object.entries(value).filter((item) => !isEmpty(item[1])),
  );
}
