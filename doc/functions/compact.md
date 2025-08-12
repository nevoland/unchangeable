[**unchangeable**](../README.md) • **Docs**

***

[unchangeable](../README.md) / compact

# Function: compact()

Returns a new object or array with all empty values removed.
An empty value is considered empty if the `isEmpty` function returns `true` for it.

If the value is an empty array or object, it returns the respective empty constant (`EMPTY_ARRAY` or `EMPTY_OBJECT`).
If the value is an array, it filters out all empty items.
If the value is an object, it removes all properties with empty values.

## Param

The value to process.

## compact(value)

> **compact**(`value`?): `undefined`

Returns a new object or array with all empty values removed.
An empty value is considered empty if the `isEmpty` function returns `true` for it.

If the value is an empty array or object, it returns the respective empty constant (`EMPTY_ARRAY` or `EMPTY_OBJECT`).
If the value is an array, it filters out all empty items.
If the value is an object, it removes all properties with empty values.

### Parameters

• **value?**: `undefined`

### Returns

`undefined`

### Param

The value to process.

### Defined in

[tools/compact.ts:9](https://github.com/nevoland/unchangeable/blob/dd3492fb78b3ab9733f94ad51551bd591389c2c3/lib/tools/compact.ts#L9)

## compact(value)

> **compact**(`value`): `null`

Returns a new object or array with all empty values removed.
An empty value is considered empty if the `isEmpty` function returns `true` for it.

If the value is an empty array or object, it returns the respective empty constant (`EMPTY_ARRAY` or `EMPTY_OBJECT`).
If the value is an array, it filters out all empty items.
If the value is an object, it removes all properties with empty values.

### Parameters

• **value**: `null`

### Returns

`null`

### Param

The value to process.

### Defined in

[tools/compact.ts:10](https://github.com/nevoland/unchangeable/blob/dd3492fb78b3ab9733f94ad51551bd591389c2c3/lib/tools/compact.ts#L10)

## compact(value)

> **compact**\<`T`\>(`value`): [`WithoutEmpty`](../type-aliases/WithoutEmpty.md)\<`T`\>

Returns a new object or array with all empty values removed.
An empty value is considered empty if the `isEmpty` function returns `true` for it.

If the value is an empty array or object, it returns the respective empty constant (`EMPTY_ARRAY` or `EMPTY_OBJECT`).
If the value is an array, it filters out all empty items.
If the value is an object, it removes all properties with empty values.

### Type Parameters

• **T** *extends* readonly `any`[]

### Parameters

• **value**: `T`

### Returns

[`WithoutEmpty`](../type-aliases/WithoutEmpty.md)\<`T`\>

### Param

The value to process.

### Defined in

[tools/compact.ts:11](https://github.com/nevoland/unchangeable/blob/dd3492fb78b3ab9733f94ad51551bd591389c2c3/lib/tools/compact.ts#L11)

## compact(value)

> **compact**\<`T`\>(`value`): [`WithoutEmpty`](../type-aliases/WithoutEmpty.md)\<`T`\>

Returns a new object or array with all empty values removed.
An empty value is considered empty if the `isEmpty` function returns `true` for it.

If the value is an empty array or object, it returns the respective empty constant (`EMPTY_ARRAY` or `EMPTY_OBJECT`).
If the value is an array, it filters out all empty items.
If the value is an object, it removes all properties with empty values.

### Type Parameters

• **T** *extends* `object`

### Parameters

• **value**: `T`

### Returns

[`WithoutEmpty`](../type-aliases/WithoutEmpty.md)\<`T`\>

### Param

The value to process.

### Defined in

[tools/compact.ts:12](https://github.com/nevoland/unchangeable/blob/dd3492fb78b3ab9733f94ad51551bd591389c2c3/lib/tools/compact.ts#L12)
