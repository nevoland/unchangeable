import { expect, test } from "vitest";

import { setPropertyMap } from "./setPropertyMap.js";

test("returns the target if map is undefined or empty", () => {
  const target = { a: 1, b: 2 };
  expect(setPropertyMap(target, undefined)).toBe(target);
  expect(setPropertyMap(target, null)).toBe(target);
  expect(setPropertyMap(target, {})).toBe(target);
});

test("sets properties from the map", () => {
  const target = { a: 1, b: 2 };
  const result = setPropertyMap(target, { c: 3, d: 4 });
  expect(result).toEqual({ a: 1, b: 2, c: 3, d: 4 });
  expect(result).not.toBe(target);
});

test("returns the target if map contains identical properties", () => {
  const target = { a: 1, b: 2 };
  const result = setPropertyMap(target, { a: 1, b: 2 });
  expect(result).toBe(target);
});

test("removes properties with undefined values", () => {
  const target = { a: 1, b: 2 };
  const result = setPropertyMap(target, { b: undefined });
  expect(result).toEqual({ a: 1 });
  expect(result).not.toBe(target);
});
