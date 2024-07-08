[**unchangeable**](../README.md) • **Docs**

***

[unchangeable](../README.md) / setItem

# Function: setItem()

## setItem(array, index, value)

> **setItem**\<`T`\>(`array`, `index`, `value`): `T`[]

Returns a new array with `array[index]` set to `value` if `array[index]` is strictly different from `value`. Otherwise, returns the provided `array`.
If `value` is the symbol `REMOVE`, returns a new array with the value at `index` removed.
If `index` is the symbol `APPEND`, returns a new array with the provided `value` appended.
If `index` is the symbol `PREPEND`, returns a new array with the provided `value` prepended.
If `index` is `undefined`, a negative number, or greater than `array.length`, returns the `array` untouched.
If the `array` is `undefined`, it is considered as an `EMPTY_ARRAY`.

### Type Parameters

• **T**

### Parameters

• **array**: `undefined` \| `T`[]

The array to update.

• **index**: `undefined` \| `number`

The index of the item of the array to update.

• **value**: `T`

The value to set the item to.

### Returns

`T`[]

A new updated array or the same `array` if no change was necessary.

### Example

```typescript
const result = setItem(["a", "b"], 1, "c")
// ["a", "c"]
```

### Defined in

[tools/setItem.ts:23](https://github.com/nevoland/unchangeable/blob/2c5734c710b944a89a399bf77ff0c911e2c1b47f/lib/tools/setItem.ts#L23)

## setItem(array, operation, value)

> **setItem**\<`T`\>(`array`, `operation`, `value`): `T`[]

### Type Parameters

• **T**

### Parameters

• **array**: `undefined` \| `T`[]

• **operation**: *typeof* [`APPEND`](../variables/APPEND.md) \| *typeof* [`PREPEND`](../variables/PREPEND.md) \| *typeof* [`REMOVE`](../variables/REMOVE.md)

• **value**: `T`

### Returns

`T`[]

### Defined in

[tools/setItem.ts:28](https://github.com/nevoland/unchangeable/blob/2c5734c710b944a89a399bf77ff0c911e2c1b47f/lib/tools/setItem.ts#L28)

## setItem(array, index, operation)

> **setItem**\<`T`\>(`array`, `index`, `operation`): `T`[]

### Type Parameters

• **T**

### Parameters

• **array**: `undefined` \| `T`[]

• **index**: `undefined` \| `number`

• **operation**: *typeof* [`REMOVE`](../variables/REMOVE.md)

### Returns

`T`[]

### Defined in

[tools/setItem.ts:33](https://github.com/nevoland/unchangeable/blob/2c5734c710b944a89a399bf77ff0c911e2c1b47f/lib/tools/setItem.ts#L33)

## setItem(array, index, operation, value)

> **setItem**\<`T`\>(`array`, `index`, `operation`, `value`): `T`[]

### Type Parameters

• **T**

### Parameters

• **array**: `undefined` \| `T`[]

• **index**: `undefined` \| `number`

• **operation**: *typeof* [`APPEND`](../variables/APPEND.md) \| *typeof* [`PREPEND`](../variables/PREPEND.md)

• **value**: `T`

### Returns

`T`[]

### Defined in

[tools/setItem.ts:38](https://github.com/nevoland/unchangeable/blob/2c5734c710b944a89a399bf77ff0c911e2c1b47f/lib/tools/setItem.ts#L38)
