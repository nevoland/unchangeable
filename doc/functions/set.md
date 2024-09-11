[**unchangeable**](../README.md) • **Docs**

***

[unchangeable](../README.md) / set

# Function: set()

> **set**\<`T`\>(`value`, `path`, `item`, `keyIndex`): `T`

Sets the `item` value of a composite `value` at a given `path`. If the `item` is a function, it is called with the actual `item` value as argument and the return value is used to set the item value.

## Type Parameters

• **T**

## Parameters

• **value**: `T`

The composite value

• **path**: [`Path`](../type-aliases/Path.md)

The path leading to the item in the composite value

• **item**: `any`

The value of the item or a function with the old item value as argument and returning the new value of the item

• **keyIndex**: `number` = `0`

The index in the path to start from, defaults to 0.

## Returns

`T`

An new composite `value` or the same `value` if no change was necessary.

## Defined in

[tools/set.ts:16](https://github.com/nevoland/unchangeable/blob/cb3ef0359ae452ac2f0cc5f751df75211de2d3d2/lib/tools/set.ts#L16)
