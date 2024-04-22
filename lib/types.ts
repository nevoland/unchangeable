import type { APPEND, PREPEND } from "./constants";

export type Append = typeof APPEND;

export type Prepend = typeof PREPEND;

export type Key = string | number | Append | Prepend | undefined;

export type Path = Key[];
