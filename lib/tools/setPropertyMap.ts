import { isEmpty } from "./isEmpty.js";
import { setProperty } from "./setProperty.js";

/**
 * Returns a new object with properties set from the provided map.
 *
 * If the map is empty (according to `isEmpty`), it returns the original target object.
 *
 * If the map contains properties that are identical to those in the target object, it returns the target object unchanged.
 *
 * @param target The object to update.
 * @param map The map of properties to set on the target object.
 * @returns A new object with properties set from the map, or the original target if the map is empty, or if the properties are identical.
 */
export function setPropertyMap<T extends Readonly<object>>(
  target: T,
  map?: Record<PropertyKey, any> | null,
): T {
  if (map == null || isEmpty(map)) {
    return target;
  }
  return Object.entries(map).reduce(
    (target, [key, value]) => setProperty(target, key, value),
    target,
  );
}
