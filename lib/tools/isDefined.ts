/**
 * Checks if a value is defined (not null or undefined).
 *
 * @param value - The value to check.
 * @returns True if the value is defined, false otherwise.
 */
export function isDefined<T>(value: T): value is NonNullable<T> {
  return value != null;
}
