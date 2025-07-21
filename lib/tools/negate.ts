/**
 * Negates the result of a given function.
 *
 * @param callable The function to negate.
 * @returns A new function that returns the negated result of the original function.
 */
export function negate<T>(
  callable: (value: T) => boolean,
): (value: T) => boolean {
  return (value: T) => !callable(value);
}
