import { EMPTY_OBJECT, REMOVE } from "../constants.js";
import { Remove } from "../types.js";

import { isEmpty } from "./isEmpty.js";

export function setProperty<
  T extends Readonly<object>,
  K extends keyof T = keyof T,
>(object: T | undefined, key: K, value?: Remove): Omit<T, K>;
export function setProperty<
  T extends Readonly<object>,
  K extends keyof T = keyof T,
>(object: T | undefined, key: K, value: T[K]): T;
export function setProperty<
  T extends Readonly<object>,
  K extends string | symbol | number,
  V,
>(object: T | undefined, key: K, value: V): T & { readonly [key in K]: V };
/**
 * Returns a new object with `object[key]` set to `value` if `object[key]` is strictly different from `value`. Otherwise, returns the provided `object`.
 *
 * If `key` is `undefined`, returns the `object` untouched.
 *
 * If `value` is `undefined`, ensures that the returned object does not contain the `key`.
 *
 * If `object` is `undefined`, it is considered as an `EMPTY_OBJECT`.
 *
 * @example
 * ```typescript
 * const result = setProperty({ a: 1 }, "b", 2)
 * // { a: 1, b: 2 }
 * ```
 *
 * @param object The object to update.
 * @param key The key of the object to update.
 * @param value The value to set the object key to.
 * @returns A new updated object or the same `object` if no change was necessary.
 */
export function setProperty<
  T extends Readonly<object>,
  K extends keyof T = keyof T,
>(
  object: T | undefined = EMPTY_OBJECT,
  key?: K,
  value?: T[K] | Remove,
): Readonly<T> {
  if (key === undefined) {
    return object;
  }
  if (value === undefined || value === REMOVE) {
    if (key in object) {
      const { [key]: _, ...result } = object;
      return isEmpty(result) ? EMPTY_OBJECT : result;
    }
    return object;
  }
  if (object[key] === value) {
    return object;
  }
  return { ...object, [key]: value };
}
