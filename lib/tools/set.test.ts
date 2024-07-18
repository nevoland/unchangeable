import { expect, test } from "vitest";

import { APPEND, REMOVE } from "../constants.js";

import { set } from "./set.js";

test("updates a collection", () => {
  expect(set(undefined, ["this", APPEND, "is"], 1)).toEqual({
    this: [{ is: 1 }],
  });
  expect(
    set(
      {
        this: [{ is: 1 }],
      },
      ["this", APPEND, "cool"],
      1,
    ),
  ).toEqual({
    this: [{ is: 1 }, { cool: 1 }],
  });
});

function increment(value: number) {
  return value + 1;
}

function remove() {
  return REMOVE;
}

test("updates a collection with an updater", () => {
  expect(set({ a: [1, 2] }, ["a", 1], increment)).toEqual({
    a: [1, 3],
  });
  expect(set({ a: [1, 2] }, ["a", 3], increment)).toEqual({
    a: [1, 2],
  });
  expect(set({ a: [1, 2] }, ["a", 1], remove)).toEqual({
    a: [1],
  });
});

test("returns the same collection if no updates are necessary", () => {
  const collection = {
    this: [{ is: 1 }],
  };
  expect(set(collection, ["this", 0, "is"], 1)).toBe(collection);
  expect(set(collection, ["this", undefined, "is"], 1)).toBe(collection);
});
