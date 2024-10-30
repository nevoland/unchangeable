[**unchangeable**](../README.md) • **Docs**

***

[unchangeable](../README.md) / setProperty

# Function: setProperty()

Returns a new object with `object[key]` set to `value` if `object[key]` is strictly different from `value`. Otherwise, returns the provided `object`.

If `key` is `undefined`, returns the `object` untouched.

If `value` is `undefined`, ensures that the returned object does not contain the `key`.

If `object` is `undefined`, it is considered as an `EMPTY_OBJECT`.

## Example

```typescript
const result = setProperty({ a: 1 }, "b", 2)
// { a: 1, b: 2 }
```

## Param

The object to update.

## Param

The key of the object to update.

## Param

The value to set the object key to.

## setProperty(object, key, value)

> **setProperty**\<`T`, `K`\>(`object`, `key`, `value`?): `Omit`\<`T`, `K`\>

Returns a new object with `object[key]` set to `value` if `object[key]` is strictly different from `value`. Otherwise, returns the provided `object`.

If `key` is `undefined`, returns the `object` untouched.

If `value` is `undefined`, ensures that the returned object does not contain the `key`.

If `object` is `undefined`, it is considered as an `EMPTY_OBJECT`.

### Type Parameters

• **T** *extends* `object`

• **K** *extends* `string` \| `number` \| `symbol` = keyof `T`

### Parameters

• **object**: `undefined` \| `T`

• **key**: `K`

• **value?**: *typeof* [`REMOVE`](../variables/REMOVE.md)

### Returns

`Omit`\<`T`, `K`\>

### Example

```typescript
const result = setProperty({ a: 1 }, "b", 2)
// { a: 1, b: 2 }
```

### Param

The object to update.

### Param

The key of the object to update.

### Param

The value to set the object key to.

### Defined in

[tools/setProperty.ts:6](https://github.com/nevoland/unchangeable/blob/39d9a85d75efc199f878876259d3e7487750c9c6/lib/tools/setProperty.ts#L6)

## setProperty(object, key, value)

> **setProperty**\<`T`, `K`\>(`object`, `key`, `value`): `T`

Returns a new object with `object[key]` set to `value` if `object[key]` is strictly different from `value`. Otherwise, returns the provided `object`.

If `key` is `undefined`, returns the `object` untouched.

If `value` is `undefined`, ensures that the returned object does not contain the `key`.

If `object` is `undefined`, it is considered as an `EMPTY_OBJECT`.

### Type Parameters

• **T** *extends* `object`

• **K** *extends* `string` \| `number` \| `symbol` = keyof `T`

### Parameters

• **object**: `undefined` \| `T`

• **key**: `K`

• **value**: `T`\[`K`\]

### Returns

`T`

### Example

```typescript
const result = setProperty({ a: 1 }, "b", 2)
// { a: 1, b: 2 }
```

### Param

The object to update.

### Param

The key of the object to update.

### Param

The value to set the object key to.

### Defined in

[tools/setProperty.ts:10](https://github.com/nevoland/unchangeable/blob/39d9a85d75efc199f878876259d3e7487750c9c6/lib/tools/setProperty.ts#L10)

## setProperty(object, key, value)

> **setProperty**\<`T`, `K`, `V`\>(`object`, `key`, `value`): `T` & `{ readonly [key in K]: V }`

Returns a new object with `object[key]` set to `value` if `object[key]` is strictly different from `value`. Otherwise, returns the provided `object`.

If `key` is `undefined`, returns the `object` untouched.

If `value` is `undefined`, ensures that the returned object does not contain the `key`.

If `object` is `undefined`, it is considered as an `EMPTY_OBJECT`.

### Type Parameters

• **T** *extends* `object`

• **K** *extends* `string` \| `number` \| `symbol`

• **V**

### Parameters

• **object**: `undefined` \| `T`

• **key**: `K`

• **value**: `V`

### Returns

`T` & `{ readonly [key in K]: V }`

### Example

```typescript
const result = setProperty({ a: 1 }, "b", 2)
// { a: 1, b: 2 }
```

### Param

The object to update.

### Param

The key of the object to update.

### Param

The value to set the object key to.

### Defined in

[tools/setProperty.ts:14](https://github.com/nevoland/unchangeable/blob/39d9a85d75efc199f878876259d3e7487750c9c6/lib/tools/setProperty.ts#L14)
