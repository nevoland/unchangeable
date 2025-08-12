[**unchangeable**](../README.md) • **Docs**

***

[unchangeable](../README.md) / isEmpty

# Function: isEmpty()

## isEmpty(value)

> **isEmpty**\<`T`\>(`value`?): `value is undefined`

Checks whether the provided value is empty or not.

An empty object is an object with no own properties, and an empty array is an array with no items.
An empty value can be `undefined`, `null`, an empty array, or an empty object.
Other types are considered non-empty, except for strings, which are considered empty if they have a length of 0.

### Type Parameters

• **T** *extends* `undefined`

### Parameters

• **value?**: `undefined`

The value to check.

### Returns

`value is undefined`

`true` if the value is empty, `false` otherwise.

### Defined in

[tools/isEmpty.ts:15](https://github.com/nevoland/unchangeable/blob/dd3492fb78b3ab9733f94ad51551bd591389c2c3/lib/tools/isEmpty.ts#L15)

## isEmpty(value)

> **isEmpty**\<`T`\>(`value`): `value is null`

### Type Parameters

• **T** *extends* `null`

### Parameters

• **value**: `null`

### Returns

`value is null`

### Defined in

[tools/isEmpty.ts:18](https://github.com/nevoland/unchangeable/blob/dd3492fb78b3ab9733f94ad51551bd591389c2c3/lib/tools/isEmpty.ts#L18)

## isEmpty(value)

> **isEmpty**\<`T`\>(`value`): `value is T & ""`

### Type Parameters

• **T** *extends* `string`

### Parameters

• **value**: `T`

### Returns

`value is T & ""`

### Defined in

[tools/isEmpty.ts:19](https://github.com/nevoland/unchangeable/blob/dd3492fb78b3ab9733f94ad51551bd591389c2c3/lib/tools/isEmpty.ts#L19)

## isEmpty(value)

> **isEmpty**\<`T`\>(`value`?): `value is T & readonly never[]`

### Type Parameters

• **T** *extends* readonly `any`[]

### Parameters

• **value?**: `T`

### Returns

`value is T & readonly never[]`

### Defined in

[tools/isEmpty.ts:20](https://github.com/nevoland/unchangeable/blob/dd3492fb78b3ab9733f94ad51551bd591389c2c3/lib/tools/isEmpty.ts#L20)

## isEmpty(value)

> **isEmpty**\<`T`\>(`value`): `value is Record<PropertyKey, never>`

### Type Parameters

• **T** *extends* `object`

### Parameters

• **value**: `T`

### Returns

`value is Record<PropertyKey, never>`

### Defined in

[tools/isEmpty.ts:23](https://github.com/nevoland/unchangeable/blob/dd3492fb78b3ab9733f94ad51551bd591389c2c3/lib/tools/isEmpty.ts#L23)

## isEmpty(value)

> **isEmpty**(`value`): `value is never`

### Parameters

• **value**: `any`

### Returns

`value is never`

### Defined in

[tools/isEmpty.ts:26](https://github.com/nevoland/unchangeable/blob/dd3492fb78b3ab9733f94ad51551bd591389c2c3/lib/tools/isEmpty.ts#L26)
