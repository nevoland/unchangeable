import { Empty } from "./Empty.js";

export type WithoutEmpty<T> = T extends readonly (infer U)[]
  ? readonly Exclude<U, Empty>[]
  : T extends object
    ? {
        [K in keyof T as T[K] extends Empty ? never : K]: Exclude<T[K], Empty>;
      }
    : T;
