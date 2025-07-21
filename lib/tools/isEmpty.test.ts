import { expect, test } from "vitest";

import { isEmpty } from "./isEmpty.js";

test("returns true for empty objects", () => {
  expect(isEmpty()).toBeTruthy();
  expect(isEmpty(null)).toBeTruthy();
  expect(isEmpty(undefined)).toBeTruthy();
  expect(isEmpty({})).toBeTruthy();
});

test("returns true for empty arrays", () => {
  expect(isEmpty([])).toBeTruthy();
});

test("returns false for non-empty objects", () => {
  expect(isEmpty({ a: 1 })).toBeFalsy();
});

test("returns false for non-empty arrays", () => {
  expect(isEmpty([undefined])).toBeFalsy();
  expect(isEmpty([1])).toBeFalsy();
});

test("returns true for empty strings and false for non-empty strings", () => {
  expect(isEmpty("")).toBeTruthy();
  expect(isEmpty("test")).toBeFalsy();
});

test("returns false for numbers", () => {
  expect(isEmpty(0)).toBeFalsy();
  expect(isEmpty(1)).toBeFalsy();
});

test("returns false for booleans", () => {
  expect(isEmpty(true)).toBeFalsy();
  expect(isEmpty(false)).toBeFalsy();
});

test("returns false for functions", () => {
  expect(isEmpty(() => {})).toBeFalsy();
});
