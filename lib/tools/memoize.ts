import type { Callable, MemoizeCache, MemoizedFunction } from "../types";

function defaultResolver<A extends any[]>(...args: A): A[0] {
  return args[0];
}

/**
 * Returns a memoized function.
 *
 * @param callable The function to memoize.
 * @param resolver An optional function to compute the key from the arguments provided to the memoized function. Defaults to returning the first argument.
 * @param cache An optional cache to store the results. Defaults to a `Map` instance.
 * @returns The memoized function.
 */
export function memoize<F extends Callable, K = Parameters<F>[0]>(
  callable: F,
  resolver: (...args: Parameters<F>) => K = defaultResolver,
  cache: MemoizeCache<K, ReturnType<F>> = new Map<K, ReturnType<F>>(),
): MemoizedFunction<F, K> {
  let _cache = cache;

  return Object.defineProperty(
    (...args: Parameters<F>) => {
      const key = resolver(...args);
      if (cache.has(key)) {
        return cache.get(key)!;
      }
      const result = callable(...args);
      cache.set(key, result);
      return result;
    },
    "cache",
    {
      configurable: false,
      get() {
        return _cache;
      },
      set(cache) {
        _cache = cache;
      },
    },
  ) as MemoizedFunction<F, K>;
}
