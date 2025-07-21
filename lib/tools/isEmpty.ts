import { EMPTY_ARRAY, EMPTY_OBJECT } from "../constants.js";

const { isArray } = Array;

/**
 * Checks whether the provided value is empty or not.
 *
 * An empty object is an object with no own properties, and an empty array is an array with no items.
 * An empty value can be `undefined`, `null`, an empty array, or an empty object.
 * Other types are considered non-empty, except for strings, which are considered empty if they have a length of 0.
 *
 * @param value The value to check.
 * @returns `true` if the value is empty, `false` otherwise.
 */
export function isEmpty<T extends undefined>(
  value?: undefined,
): value is undefined;
export function isEmpty<T extends null>(value: null): value is null;
export function isEmpty<T extends string>(value: T): value is T & "";
export function isEmpty<T extends readonly any[]>(
  value?: T,
): value is T & readonly never[];
export function isEmpty<T extends object>(
  value: T,
): value is Record<PropertyKey, never>;
export function isEmpty(value: any): value is never;
export function isEmpty(
  value: any,
): value is undefined | null | readonly never[] | Record<PropertyKey, never> {
  if (value == null || value === EMPTY_OBJECT || value === EMPTY_ARRAY) {
    return true;
  }
  if (isArray(value)) {
    return value.length === 0;
  }
  if (typeof value === "string" || value.constructor === String) {
    return value.length === 0;
  }
  if (typeof value !== "object") {
    return false;
  }
  for (const name in value) {
    if (Object.prototype.hasOwnProperty.call(value, name)) {
      return false;
    }
  }
  return true;
}
