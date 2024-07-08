[**unchangeable**](../README.md) • **Docs**

***

[unchangeable](../README.md) / setProperty

# Function: setProperty()

> **setProperty**\<`T`, `K`\>(`object`, `key`?, `value`?): `T`

Returns a new object with `object[key]` set to `value` if `object[key]` is strictly different from `value`. Otherwise, returns the provided `object`.
If `key` is `undefined`, returns the `object` untouched.
If `value` is `undefined`, ensures that the returned object does not contain the `key`.
If `object` is `undefined`, it is considered as an `EMPTY_OBJECT`.

## Type Parameters

• **T** *extends* `object`

• **K** *extends* `string` \| `number` \| `symbol` = keyof `T`

## Parameters

• **object**: `undefined` \| `T` = `EMPTY_OBJECT`

The object to update.

• **key?**: `K`

The key of the object to update.

• **value?**: `T`\[`K`\]

The value to set the object key to.

## Returns

`T`

A new updated object or the same `object` if no change was necessary.

## Example

```typescript
const result = setProperty({ a: 1 }, "b", 2)
// { a: 1, b: 2 }
```

## Defined in

[tools/setProperty.ts:22](https://github.com/nevoland/unchangeable/blob/2c5734c710b944a89a399bf77ff0c911e2c1b47f/lib/tools/setProperty.ts#L22)
