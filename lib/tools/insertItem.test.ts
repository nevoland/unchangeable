import { expect, test } from "vitest";

import { APPEND, EMPTY_ARRAY } from "../constants.js";

import { insertItem } from "./insertItem.js";

test("inserts an item by returning a new array", () => {
  const array = [1];
  expect(insertItem([1], 1, 2)).toEqual([1, 2]);
  expect(insertItem(array, 0, 2)).not.toBe(array);
  expect(insertItem(array, APPEND, 2)).toEqual([1, 2]);
});

test("returns the array untouched", () => {
  const array = [1];
  expect(insertItem(array, -1, 2)).toBe(array);
  expect(insertItem(array, 2, 2)).toBe(array);
});

test("returns an empty array if undefined", () => {
  expect(insertItem(undefined, -1, 1)).toEqual(EMPTY_ARRAY);
});
