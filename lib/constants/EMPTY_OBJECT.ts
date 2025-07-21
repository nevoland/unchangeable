/**
 * Immutable empty object.
 */
export const EMPTY_OBJECT: Record<PropertyKey, never> = Object.freeze(
  Object.create(null),
);
