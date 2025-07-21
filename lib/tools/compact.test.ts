import { expect, test } from "vitest";

import { EMPTY_ARRAY, EMPTY_OBJECT } from "../constants.js";

import { compact } from "./compact.js";

test("returns EMPTY_ARRAY for empty arrays", () => {
  expect(compact([])).toBe(EMPTY_ARRAY);
  expect(compact(EMPTY_ARRAY)).toBe(EMPTY_ARRAY);
});

test("returns EMPTY_OBJECT for empty objects", () => {
  expect(compact({})).toBe(EMPTY_OBJECT);
  expect(compact(EMPTY_OBJECT)).toBe(EMPTY_OBJECT);
});

test("removes empty values from arrays", () => {
  expect(compact([undefined, null, 1, {}, []])).toEqual([1]);
});

test("removes empty properties from objects", () => {
  expect(compact({ a: undefined, b: null, c: 1, d: {}, e: [] })).toEqual({
    c: 1,
  });
});

test("returns value unchanged if no empty values", () => {
  expect(compact([1, 2])).toEqual([1, 2]);
  expect(compact({ a: 1, b: 2 })).toEqual({ a: 1, b: 2 });
});

test("returns undefined/null unchanged", () => {
  expect(compact(undefined)).toBe(undefined);
  expect(compact(null)).toBe(null);
});
