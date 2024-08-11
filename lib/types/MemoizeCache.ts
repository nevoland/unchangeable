export type MemoizeCache<K, R> = Pick<Map<K, R>, "has" | "get" | "set">;
