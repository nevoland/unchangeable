import { expect, test } from "vitest";

import { same } from "./same.js";

test("Returns true for identical values", () => {
  expect(same(1, 1)).toBe(true);
  expect(same("test", "test")).toBe(true);
  expect(same(null, null)).toBe(true);
  expect(same(undefined, undefined)).toBe(true);
  expect(same({}, {})).toBe(true);
  expect(same([], [])).toBe(true);
  expect(same([1, 2], [1, 2])).toBe(true);
  expect(same({ a: 1, b: 2 }, { a: 1, b: 2 })).toBe(true);
});

test("Returns false for different values", () => {
  expect(same(1, 2)).toBe(false);
  expect(same("test", "TEST")).toBe(false);
  expect(same(null, undefined)).toBe(false);
  expect(same(undefined, null)).toBe(false);
  expect(same([1, 3], [1, 2])).toBe(false);
  expect(same([1, 3], [1])).toBe(false);
  expect(same([1], [1, 2])).toBe(false);
  expect(same({ a: 1, b: 2 }, { a: 1 })).toBe(false);
  expect(same({ a: 1 }, { a: 1, b: 3 })).toBe(false);
});

test("Handles nested structures", () => {
  expect(same({ a: { b: 1 } }, { a: { b: 1 } })).toBe(true);
  expect(same({ a: { b: 1 } }, { a: { b: 2 } })).toBe(false);
  expect(same([1, [2, 3]], [1, [2, 3]])).toBe(true);
  expect(same([1, [2, 3]], [1, [2]])).toBe(false);
});
