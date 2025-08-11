const { isArray } = Array;

/**
 * Checks if two values are the same.
 *
 * @param a The first value to compare.
 * @param b The second value to compare.
 * @returns Whether the two values are the same.
 */
export function same(a?: unknown, b?: unknown): boolean {
  if (a === b) {
    return true;
  }
  if (a == null || b == null) {
    return false;
  }
  if (typeof a !== typeof b) {
    return false;
  }
  if (isArray(a) && isArray(b)) {
    return (
      a.length === b.length && a.every((item, index) => same(item, b[index]))
    );
  }
  if (typeof a === "object" && typeof b === "object") {
    const keyList = Object.keys(a);
    const { length } = keyList;
    if (keyList.length !== Object.keys(b).length) {
      return false;
    }
    for (let i = 0; i < length; i++) {
      const key = keyList[i];
      if (
        !same(
          (a as Record<string, unknown>)[key],
          (b as Record<string, unknown>)[key],
        )
      ) {
        return false;
      }
    }
    return true;
  }
  return false;
}
