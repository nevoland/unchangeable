# Unchangeable

🧊 Helpers for handling immutable values

### Features

- Provides tools to update immutable objects and arrays
- Defines empty object and array
- Includes helpers to check for object emptiness

## Usage

Everything is exported from the main entry-point through an ES6 module:

```js
import {
  setItem,
  setProperty,
  isEmpty,
  EMPTY_OBJECT,
  EMPTY_ARRAY,
  PREPEND,
  APPEND,
  REMOVE,
} from "unchangeable";
```

## Installation

Install with the [Node Package Manager](https://www.npmjs.com/package/unchangeable):

```bash
npm install unchangeable
```

## Documentation

Documentation is generated [here](doc/README.md).

## Guide

### Updating an object

#### Updating properties

Use the `setProperty` tool to tupdate the property of an object:

```js
import { setProperty } from "unchangeable";

const value = { level: 5 };
// The property "level" is set to 6
const nextValue = setProperty(value, "level", 6);

assert(value.level === 5);
assert(nextValue.level === 6);
assert(value !== nextValue);
```

The same object is returned if the new value of the property is the same:

```js
import { setProperty } from "unchangeable";

const value = { level: 5 };
// The property "level" has the same value it is set to (5)
const nextValue = setProperty(value, "level", 5);

assert(value === nextValue);
```

#### Removing properties

Use `undefined` or the `REMOVE` symbol to remove a property:

```js
import { setProperty, REMOVE, isEmpty, EMPTY_OBJECT } from "unchangeable";

const value = { level: 5 };
// The property "level" is removed
const nextValue = setProperty(value, "level", REMOVE);
// The property "level" is removed
const otherValue = setProperty(value, "level", undefined);

assert(nextValue === otherValue);
assert(!("level" in nextValue) && !("level" in otherValue));
// If the object is empty, `EMPTY_OBJECT` is returned
assert(nextValue === EMPTY_OBJECT && otherValue === EMPTY_OBJECT);
assert(isEmpty(nextValue) && isEmpty(otherValue));
```

### Updating an array

#### Updating items

Use the `setItem` tool to update the item of an array:

```js
import { setItem } from "unchangeable";

const value = ["Alice", "Bob"];
// The item at index 1 is set to "Chloe"
const nextValue = setItem(value, 1, "Chloe");

assert(nextValue[1] === "Chloe);
assert(value[1] === "Bob");
assert(value !== nextValue);
```

The same array is returned if the new value of the array is the same:

```js
import { setItem } from "unchangeable";

const value = ["Alice", "Chloe"];
// The item at index 1 has the same value as it is set to: "Chloe"
const nextValue = setItem(value, 1, "Chloe");

assert(value === nextValue);
```

Setting an item at an index that does not exist does not affect the array:

```js
import { setItem } from "unchangeable";

const value = ["Alice", "Chloe"];
// Index 3 is not in the value and thus returns the same array
const nextValue = setItem(value, 3, "Bob");

assert(value === nextValue);
assert(nextValue.length === 2);
```

#### Adding items

Use `APPEND` and `PREPEND` to add a value to the array:

```js
import { setItem, APPEND, PREPEND } from "unchangeable";

const value = ["Alice", "Bob"];
// Append
const nextValue = setItem(value, APPEND, "Chloe");
// Prepend
const otherValue = setItem(value, PREPEND, "Mathis");

assert(nextValue[2] === "Chloe");
assert(nextValue.length === 3);
assert(otherValue[0] === "Mathis");
assert(otherValue.length === 3);
```

Use `APPEND` and `PREPEND` to insert a value into the array at a specific index:

```js
import { setItem, APPEND, PREPEND } from "unchangeable";

const value = ["Alice", "Bob"];
// Insert after index 0 (item will have index 1)
const nextValue = setItem(value, 0, APPEND, "Chloe");
// Insert before index 1 (item will have index 1)
const otherValue = setItem(value, 1, PREPEND, "Mathis");

assert(nextValue[1] === "Chloe");
assert(nextValue.length === 3);
assert(otherValue[1] === "Mathis");
assert(otherValue.length === 3);
```

### Removing items

Use `REMOVE` to remove an item at a specific index or an item with a specific value:

```js
import { setItem, REMOVE } from "unchangeable";

const value = ["Alice", "Bob"];
// Remove at a specific index
const nextValue = setItem(value, 1, REMOVE);
// Remove a specific value
const otherValue = setItem(value, REMOVE, "Bob");

assert(nextValue.length === 1);
assert(otherValue.length === 1);
```

### Updating a composite value

#### Updating values

Use `set` to update a composite value at a given path:

```js
import { set } from "unchangeable";

const value = { level: 5, parent: { level: 6 } };
// Set value.parent.level to `7`
const nextValue = set(value, ["parent", "level"], 7);

assert(value.parent.level === 5);
assert(nextValue.parent.level === 7);
```

#### Updating values using a function

Instead of a value, a function can be used to update the value:

```js
import { set } from "unchangeable";

const value = { level: 5, parent: { level: 6 } };

function increment(value) {
  return value + 1;
}

// Set value.parent.level to `7`
const nextValue = set(value, ["parent", "level"], increment);

assert(value.parent.level === 5);
assert(nextValue.parent.level === 7);
```

#### Removing values

Use `REMOVE` to remove the value at the given path:

```js
import { set, REMOVE } from "unchangeable";

const value = { level: 5, parent: { level: 6 } };
// Removes `value.parent.level`
const nextValue = set(value, ["parent", "level"], REMOVE);

assert(!("level" in value.parent));
```
