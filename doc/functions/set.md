[**unchangeable**](../README.md) • **Docs**

***

[unchangeable](../README.md) / set

# Function: set()

> **set**\<`T`\>(`value`, `path`, `item`, `keyIndex`): `T`

Sets the `item` of a composite `value` at a given `path`.

## Type Parameters

• **T**

## Parameters

• **value**: `T`

The composite value

• **path**: [`Path`](../type-aliases/Path.md)

The path leading to the item in the composite value

• **item**: `any`

The value of the item

• **keyIndex**: `number` = `0`

The index in the path to start from, defaults to 0.

## Returns

`T`

An new composite `value` or the same `value` if no change was necessary.

## Defined in

[tools/set.ts:16](https://github.com/nevoland/unchangeable/blob/2c5734c710b944a89a399bf77ff0c911e2c1b47f/lib/tools/set.ts#L16)
