[**unchangeable**](../README.md) • **Docs**

***

[unchangeable](../README.md) / setPropertyMap

# Function: setPropertyMap()

> **setPropertyMap**\<`T`\>(`target`, `map`?): `T`

Returns a new object with properties set from the provided map.

If the map is empty (according to `isEmpty`), it returns the original target object.

If the map contains properties that are identical to those in the target object, it returns the target object unchanged.

## Type Parameters

• **T** *extends* `object`

## Parameters

• **target**: `T`

The object to update.

• **map?**: `null` \| `Record`\<`PropertyKey`, `any`\>

The map of properties to set on the target object.

## Returns

`T`

A new object with properties set from the map, or the original target if the map is empty, or if the properties are identical.

## Defined in

[tools/setPropertyMap.ts:15](https://github.com/nevoland/unchangeable/blob/dd3492fb78b3ab9733f94ad51551bd591389c2c3/lib/tools/setPropertyMap.ts#L15)
