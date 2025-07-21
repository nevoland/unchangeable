export type Empty =
  | undefined
  | null
  | readonly never[]
  | Record<PropertyKey, never>;
