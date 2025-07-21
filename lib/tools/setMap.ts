import type { Path } from "../types";

import { isEmpty } from "./isEmpty.js";
import { set } from "./set.js";

export function setMap(
  target: Record<PropertyKey, any>,
  map: readonly [Path, any][],
): Record<PropertyKey, any> {
  if (isEmpty(map)) {
    return target;
  }
  return map.reduce(
    (target, [path, value]) => set(target, path, value),
    target,
  );
}
