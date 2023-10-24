unchangeable

# unchangeable

## Table of contents

### Variables

- [EMPTY\_ARRAY](README.md#empty_array)
- [EMPTY\_OBJECT](README.md#empty_object)

### Functions

- [isEmpty](README.md#isempty)
- [setItem](README.md#setitem)
- [setProperty](README.md#setproperty)
- [undefinedIfEmpty](README.md#undefinedifempty)

## Variables

### EMPTY\_ARRAY

• `Const` **EMPTY\_ARRAY**: readonly `any`[]

Immutable empty array.

#### Defined in

[constants/EMPTY_ARRAY.ts:4](https://github.com/nevoland/unchangeable/blob/6ab5219/lib/constants/EMPTY_ARRAY.ts#L4)

___

### EMPTY\_OBJECT

• `Const` **EMPTY\_OBJECT**: `any`

Immutable empty object.

#### Defined in

[constants/EMPTY_OBJECT.ts:4](https://github.com/nevoland/unchangeable/blob/6ab5219/lib/constants/EMPTY_OBJECT.ts#L4)

## Functions

### isEmpty

▸ **isEmpty**<`T`\>(`value?`): `boolean`

Checks whether the provided object is empty or not.

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends `object` = {} |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `value?` | ``null`` \| `T` | The object to check. |

#### Returns

`boolean`

`true` if the object is empty, `false` otherwise.

#### Defined in

[tools/isEmpty.ts:9](https://github.com/nevoland/unchangeable/blob/6ab5219/lib/tools/isEmpty.ts#L9)

___

### setItem

▸ **setItem**<`T`\>(`array?`, `index`, `value`): `T`[]

Returns a new array with `array[index]` set to `value` if `array[index]` is strictly different from `value`. Otherwise, returns the provided `array`.
If `index` is `undefined`, a negative number, or greater than `array.length`, returns the `array` untouched.
If the `array` is `undefined`, it is considered as an `EMPTY_ARRAY`.

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `array` | `undefined` \| `T`[] | The array to update. |
| `index` | `undefined` \| `number` | The index of the item of the array to update. |
| `value` | `T` | The value to set the item to. |

#### Returns

`T`[]

A new updated array or the same `array` if no change was necessary.

**`Example`**

```typescript
const result = setItem(["a", "b"], 1, "c")
// ["a", "c"]
```

#### Defined in

[tools/setItem.ts:19](https://github.com/nevoland/unchangeable/blob/6ab5219/lib/tools/setItem.ts#L19)

___

### setProperty

▸ **setProperty**<`T`, `K`\>(`object?`, `key?`, `value?`): `T`

Returns a new object with `object[key]` set to `value` if `object[key]` is strictly different from `value`. Otherwise, returns the provided `object`.
If `key` is `undefined`, returns the `object` untouched.
If `value` is `undefined`, ensures that the returned object does not contain the `key`.
If `object` is `nil`, it is considered as an `EMPTY_OBJECT`.

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends `object` |
| `K` | extends `string` \| `number` \| `symbol` = keyof `T` |

#### Parameters

| Name | Type | Default value | Description |
| :------ | :------ | :------ | :------ |
| `object` | `undefined` \| `T` | `EMPTY_OBJECT` | The object to update. |
| `key?` | `K` | `undefined` | The key of the object to update. |
| `value?` | `T`[`K`] | `undefined` | The value to set the object key to. |

#### Returns

`T`

A new updated object or the same `object` if no change was necessary.

**`Example`**

```typescript
const result = setProperty({ a: 1 }, "b", 2)
// { a: 1, b: 2 }
```

#### Defined in

[tools/setProperty.ts:22](https://github.com/nevoland/unchangeable/blob/6ab5219/lib/tools/setProperty.ts#L22)

___

### undefinedIfEmpty

▸ **undefinedIfEmpty**<`T`\>(`value?`): `undefined` \| `T`

Returns `undefined` if the object is empty.

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends `object` = {} |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `value?` | `T` | The object to check. |

#### Returns

`undefined` \| `T`

`undefined` if the object is empty, the object otherwise.

#### Defined in

[tools/undefinedIfEmpty.ts:9](https://github.com/nevoland/unchangeable/blob/6ab5219/lib/tools/undefinedIfEmpty.ts#L9)
