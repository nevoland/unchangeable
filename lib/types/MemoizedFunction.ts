import type { MemoizeCache } from "./MemoizeCache";

export interface MemoizedFunction<F extends (...args: any[]) => any, K> {
  (...args: Parameters<F>): ReturnType<F>;
  /**
   * The cache used to store the results of the memoized function.
   */
  cache: MemoizeCache<K, ReturnType<F>>;
}
