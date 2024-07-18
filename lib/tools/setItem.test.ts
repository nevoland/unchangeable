import { expect, test } from "vitest";

import { APPEND, EMPTY_ARRAY, PREPEND, REMOVE } from "../constants.js";

import { setItem } from "./setItem.js";

test("sets an item by returning a new array", () => {
  const array = [1];
  expect(setItem([1], 0, 2)).toEqual([2]);
  expect(setItem(array, 0, 2)).not.toBe(array);
});

test("returns the array untouched", () => {
  const array = [1];
  expect(setItem(array, -1, 2)).toBe(array);
  expect(setItem(array, 1, 2)).toBe(array);
  expect(setItem(array, 0, 1)).toBe(array);
  expect(setItem(array, 0, 2)).not.toBe(array);
});

test("returns an empty array if undefined", () => {
  expect(setItem(undefined, 0, 2)).toEqual(EMPTY_ARRAY);
});

test("inserts items", () => {
  expect(setItem([1, 2], APPEND, 3)).toEqual([1, 2, 3]);
  expect(setItem([2, 3], PREPEND, 1)).toEqual([1, 2, 3]);
  expect(setItem([1, 2], 0, APPEND, 11)).toEqual([1, 11, 2]);
  expect(setItem([1, 2], 1, PREPEND, 11)).toEqual([1, 11, 2]);
});

test("removes items", () => {
  expect(setItem([1, 2, 3], 2, REMOVE)).toEqual([1, 2]);
  expect(setItem([1, 2, 3], REMOVE, 2)).toEqual([1, 3]);
  expect(setItem([2, 2, 2], REMOVE, 2)).toEqual([2, 2]);
  expect(setItem([2], REMOVE, 2)).toBe(EMPTY_ARRAY);
  const array = [1, 2];
  expect(setItem(array, 2, REMOVE)).toBe(array);
  expect(setItem([1], 0, REMOVE)).toBe(EMPTY_ARRAY);
});
