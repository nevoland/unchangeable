import { APPEND, EMPTY_ARRAY, EMPTY_OBJECT, PREPEND } from "../constants.js";
import type { Path } from "../types";

import { setItem } from "./setItem.js";
import { setProperty } from "./setProperty.js";

/**
 * Sets the `item` of a composite `value` at a given `path`.
 *
 * @param value The composite value
 * @param path The path leading to the item in the composite value
 * @param item The value of the item
 * @param keyIndex The index in the path to start from, defaults to 0.
 * @returns An new composite `value` or the same `value` if no change was necessary.
 */
export function set<T>(
  value: T,
  path: Path,
  item: any,
  keyIndex: number = 0,
): T {
  if (keyIndex >= path.length) {
    return item;
  }
  const key = path[keyIndex];
  if (key === undefined) {
    return value;
  }
  if (typeof key === "number" || key === APPEND || key === PREPEND) {
    return setItem(
      value as any,
      key as any,
      set(((value ?? EMPTY_ARRAY) as any)[key], path, item, keyIndex + 1),
    ) as T;
  }
  return setProperty(
    value as any,
    key,
    set(((value ?? EMPTY_OBJECT) as any)[key], path, item, keyIndex + 1),
  );
}
