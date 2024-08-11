import type { MemoizeCache } from "./MemoizeCache";

export interface MemoizedFunction<F extends (...args: any[]) => any, K> {
  (...args: Parameters<F>): void;
  /**
   * Cache.
   */
  cache: MemoizeCache<K, ReturnType<F>>;
}
