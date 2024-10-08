import { expect, test } from "vitest";

import { EMPTY_OBJECT, REMOVE } from "../constants.js";

import { setProperty } from "./setProperty.js";

test("sets a property by returning a new object", () => {
  const object = { a: 1 } as { readonly a: number };
  expect(setProperty(object, "a", 2)).toEqual({ a: 2 });
  expect(setProperty(object, "a", 2)).not.toBe(object);
  expect(setProperty<{ a: number; b?: number }>({ a: 1 }, "b", 2)).toEqual({
    a: 1,
    b: 2,
  });
});

test("removes a property", () => {
  expect(setProperty({ a: 1, b: 2 } as const, "a", undefined)).toEqual({
    b: 2,
  });
  const original = { a: 1, b: 2 } as const;
  const change1 = setProperty(original, "a", undefined);
  const change2 = setProperty(change1, "a", 1);
  expect(change2).toEqual(original);
  expect(setProperty({ a: 1 }, "a", undefined)).toBe(EMPTY_OBJECT);
  expect(setProperty({ a: 1 }, "a", REMOVE)).toBe(EMPTY_OBJECT);
});

test("returns the object untouched", () => {
  const object = { a: 1 } as const;
  expect(setProperty(object, "a", 1)).toBe(object);
});

test("returns an empty object if undefined", () => {
  expect(setProperty<{ a?: any }, any>(undefined, "a", undefined)).toBe(
    EMPTY_OBJECT,
  );
});
