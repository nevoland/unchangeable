[**unchangeable**](../README.md) • **Docs**

***

[unchangeable](../README.md) / setItem

# Function: setItem()

## setItem(array, index, value)

> **setItem**\<`T`\>(`array`, `index`, `value`): readonly `T`[]

Returns a new array with `array[index]` set to `value` if `array[index]` is strictly different from `value`. Otherwise, returns the provided `array`.

If `value` is the symbol `REMOVE`, returns a new array with the value at `index` removed.

If `index` is the symbol `APPEND`, returns a new array with the provided `value` appended.

If `index` is the symbol `PREPEND`, returns a new array with the provided `value` prepended.

If `index` is `undefined`, a negative number, or greater than `array.length`, returns the `array` untouched.

If the `array` is `undefined`, it is considered as an `EMPTY_ARRAY`.

### Type Parameters

• **T**

### Parameters

• **array**: `undefined` \| readonly `T`[]

The array to update.

• **index**: `undefined` \| `number`

The index of the item of the array to update.

• **value**: `T`

The value to set the item to.

### Returns

readonly `T`[]

A new updated array or the same `array` if no change was necessary.

### Example

```typescript
const result = setItem(["a", "b"], 1, "c")
// ["a", "c"]
```

### Defined in

[tools/setItem.ts:28](https://github.com/nevoland/unchangeable/blob/39d9a85d75efc199f878876259d3e7487750c9c6/lib/tools/setItem.ts#L28)

## setItem(array, operation, value)

> **setItem**\<`T`\>(`array`, `operation`, `value`): readonly `T`[]

Returns a new array with the `value` prepended to it if `operation` is `PREPEND` or appended to it if `operation` is `APPEND`. If `operation` is `REMOVE`, the `value` is removed from the `array` if it exists, otherwise it returns the same `array`.

If the `array` is `undefined`, it is considered as an `EMPTY_ARRAY`.

### Type Parameters

• **T**

### Parameters

• **array**: `undefined` \| readonly `T`[]

The array to update.

• **operation**: *typeof* [`APPEND`](../variables/APPEND.md) \| *typeof* [`PREPEND`](../variables/PREPEND.md) \| *typeof* [`REMOVE`](../variables/REMOVE.md)

The operation to use (PREPEND, APPEND, or REMOVE).

• **value**: `T`

The value to insert or remove.

### Returns

readonly `T`[]

A new updated array or the same `array` if no change was necessary.

### Example

```typescript
const result1 = setItem(["a", "b"], APPEND, "c")
// ["a", "b", "c"]
const result2 = setItem(["a", "b", "c"], REMOVE, "b")
// ["a", "c"]
```

### Defined in

[tools/setItem.ts:51](https://github.com/nevoland/unchangeable/blob/39d9a85d75efc199f878876259d3e7487750c9c6/lib/tools/setItem.ts#L51)

## setItem(array, index, operation)

> **setItem**\<`T`\>(`array`, `index`, `operation`): readonly `T`[]

Returns a new array with the value at the given `index` removed from the `array`.

If `index` is `undefined`, a negative number, or greater than `array.length`, returns the `array` untouched.

If the `array` is `undefined`, it is considered as an `EMPTY_ARRAY`.

### Type Parameters

• **T**

### Parameters

• **array**: `undefined` \| readonly `T`[]

The array to update.

• **index**: `undefined` \| `number`

The index of the item to remove.

• **operation**: *typeof* [`REMOVE`](../variables/REMOVE.md)

`REMOVE`.

### Returns

readonly `T`[]

A new updated array or the same `array` if no change was necessary.

### Example

```typescript
const result = setItem(["a", "b"], 1, REMOVE)
// ["a"]
```

### Defined in

[tools/setItem.ts:74](https://github.com/nevoland/unchangeable/blob/39d9a85d75efc199f878876259d3e7487750c9c6/lib/tools/setItem.ts#L74)

## setItem(array, index, operation, value)

> **setItem**\<`T`\>(`array`, `index`, `operation`, `value`): readonly `T`[]

Returns a new array with the value inserted at the given `index`. If the `operation` is `PREPEND`, inserts the item before the item at the specified `index`. If the `operation` is `APPEND`, inserts the item after the item at the specified `index`.

If `index` is `undefined`, a negative number, or greater than `array.length`, returns the `array` untouched.

If the `array` is `undefined`, it is considered as an `EMPTY_ARRAY`.

### Type Parameters

• **T**

### Parameters

• **array**: `undefined` \| readonly `T`[]

The array to update.

• **index**: `undefined` \| `number`

The index where to insert the item.

• **operation**: *typeof* [`APPEND`](../variables/APPEND.md) \| *typeof* [`PREPEND`](../variables/PREPEND.md)

Either `PREPEND` or `APPEND`.

• **value**: `T`

### Returns

readonly `T`[]

A new updated array or the same `array` if no change was necessary.

### Example

```typescript
const result = setItem(["a", "b"], 1, APPEND, "c")
// ["a", "b", "c"]
```

### Defined in

[tools/setItem.ts:97](https://github.com/nevoland/unchangeable/blob/39d9a85d75efc199f878876259d3e7487750c9c6/lib/tools/setItem.ts#L97)
