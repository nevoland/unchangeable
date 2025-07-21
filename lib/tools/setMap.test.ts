import { expect, test } from "vitest";

import { setMap } from "./setMap.js";

test("sets an item at a given path", () => {
  const target = { a: 1, b: 2 } as const;
  expect(setMap(target, [[["a", "c"], 2]])).toEqual({ a: { c: 2 }, b: 2 });
  expect(setMap(target, [[["a", "c"], 2]])).not.toBe(target);
});

test("returns the target if no changes", () => {
  const target = { a: { b: 2 } } as const;
  expect(setMap(target, [[["a", "b"], 2]])).toBe(target);
});

test("returns the target if map is empty", () => {
  const target = { a: 1, b: 2 } as const;
  expect(setMap(target, [])).toBe(target);
});
