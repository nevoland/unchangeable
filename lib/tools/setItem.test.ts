import { expect, test } from "vitest";

import { APPEND, PREPEND } from "../constants.js";

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
  expect(setItem(undefined, 0, 2)).toEqual([]);
});

test("inserts items", () => {
  expect(setItem([1, 2], APPEND, 3)).toEqual([1, 2, 3]);
  expect(setItem([2, 3], PREPEND, 1)).toEqual([1, 2, 3]);
});
