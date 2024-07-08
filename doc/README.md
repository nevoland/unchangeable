unchangeable

# unchangeable

## Table of contents

### Type Aliases

- [Append](README.md#append)
- [Key](README.md#key)
- [Path](README.md#path)
- [Prepend](README.md#prepend)
- [Remove](README.md#remove)

### Variables

- [APPEND](README.md#append-1)
- [EMPTY\_ARRAY](README.md#empty_array)
- [EMPTY\_OBJECT](README.md#empty_object)
- [PREPEND](README.md#prepend-1)
- [REMOVE](README.md#remove-1)

### Functions

- [insertItem](README.md#insertitem)
- [isEmpty](README.md#isempty)
- [set](README.md#set)
- [setItem](README.md#setitem)
- [setProperty](README.md#setproperty)
- [undefinedIfEmpty](README.md#undefinedifempty)

## Type Aliases

### Append

Ƭ **Append**: typeof [`APPEND`](README.md#append-1)

#### Defined in

[types/Append.ts:3](https://github.com/nevoland/unchangeable/blob/b908e22/lib/types/Append.ts#L3)

___

### Key

Ƭ **Key**: `string` \| `number` \| [`Append`](README.md#append) \| [`Prepend`](README.md#prepend) \| `undefined`

#### Defined in

[types/Key.ts:4](https://github.com/nevoland/unchangeable/blob/b908e22/lib/types/Key.ts#L4)

___

### Path

Ƭ **Path**: [`Key`](README.md#key)[]

#### Defined in

[types/Path.ts:3](https://github.com/nevoland/unchangeable/blob/b908e22/lib/types/Path.ts#L3)

___

### Prepend

Ƭ **Prepend**: typeof [`PREPEND`](README.md#prepend-1)

#### Defined in

[types/Prepend.ts:3](https://github.com/nevoland/unchangeable/blob/b908e22/lib/types/Prepend.ts#L3)

___

### Remove

Ƭ **Remove**: typeof [`REMOVE`](README.md#remove-1)

#### Defined in

[types/Remove.ts:3](https://github.com/nevoland/unchangeable/blob/b908e22/lib/types/Remove.ts#L3)

## Variables

### APPEND

• `Const` **APPEND**: typeof [`APPEND`](README.md#append-1)

#### Defined in

[constants/APPEND.ts:1](https://github.com/nevoland/unchangeable/blob/b908e22/lib/constants/APPEND.ts#L1)

___

### EMPTY\_ARRAY

• `Const` **EMPTY\_ARRAY**: readonly `any`[]

Immutable empty array.

#### Defined in

[constants/EMPTY_ARRAY.ts:4](https://github.com/nevoland/unchangeable/blob/b908e22/lib/constants/EMPTY_ARRAY.ts#L4)

___

### EMPTY\_OBJECT

• `Const` **EMPTY\_OBJECT**: `any`

Immutable empty object.

#### Defined in

[constants/EMPTY_OBJECT.ts:4](https://github.com/nevoland/unchangeable/blob/b908e22/lib/constants/EMPTY_OBJECT.ts#L4)

___

### PREPEND

• `Const` **PREPEND**: typeof [`PREPEND`](README.md#prepend-1)

#### Defined in

[constants/PREPEND.ts:1](https://github.com/nevoland/unchangeable/blob/b908e22/lib/constants/PREPEND.ts#L1)

___

### REMOVE

• `Const` **REMOVE**: typeof [`REMOVE`](README.md#remove-1)

#### Defined in

[constants/REMOVE.ts:1](https://github.com/nevoland/unchangeable/blob/b908e22/lib/constants/REMOVE.ts#L1)

## Functions

### insertItem

▸ **insertItem**<`T`\>(`array?`, `index`, `value`): `T`[]

Returns a new array with the `value` inserted at `index`.
If `index` is symbol `APPEND`, it is considered to be `array.length`, which has the effect of appending the `value`.
If `index` is `undefined`, a negative number, or strictly greater than `array.length`, returns the `array` untouched.
If the `array` is `undefined`, it is considered as an `EMPTY_ARRAY`.

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `array` | `undefined` \| `T`[] | The array to update. |
| `index` | `undefined` \| `number` \| typeof [`APPEND`](README.md#append-1) | The index of the item of the array to update. |
| `value` | `T` | The value to set the item to. |

#### Returns

`T`[]

A new updated array or the same `array` if no change was necessary.

**`Example`**

```typescript
const result = insertItem(["a", "b"], 2, "c")
// ["a", "b", "c"]
```

#### Defined in

[tools/insertItem.ts:21](https://github.com/nevoland/unchangeable/blob/b908e22/lib/tools/insertItem.ts#L21)

___

### isEmpty

▸ **isEmpty**(`value?`): `boolean`

Checks whether the provided value is empty or not.
A value is empty if it does not own any property (in case of an object) or item (in case of an array), or if it is `null` or `undefined`.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `value?` | `any` | The value to check. |

#### Returns

`boolean`

`true` if the value is empty, `false` otherwise.

#### Defined in

[tools/isEmpty.ts:12](https://github.com/nevoland/unchangeable/blob/b908e22/lib/tools/isEmpty.ts#L12)

___

### set

▸ **set**<`T`\>(`value`, `path`, `item`, `keyIndex?`): `T`

Sets the `item` of a composite `value` at a given `path`.

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type | Default value | Description |
| :------ | :------ | :------ | :------ |
| `value` | `T` | `undefined` | The composite value |
| `path` | [`Path`](README.md#path) | `undefined` | The path leading to the item in the composite value |
| `item` | `any` | `undefined` | The value of the item |
| `keyIndex` | `number` | `0` | The index in the path to start from, defaults to 0. |

#### Returns

`T`

An new composite `value` or the same `value` if no change was necessary.

#### Defined in

[tools/set.ts:16](https://github.com/nevoland/unchangeable/blob/b908e22/lib/tools/set.ts#L16)

___

### setItem

▸ **setItem**<`T`\>(`array?`, `index`, `value`): `T`[]

Returns a new array with `array[index]` set to `value` if `array[index]` is strictly different from `value`. Otherwise, returns the provided `array`.
If `value` is the symbol `REMOVE`, returns a new array with the value at `index` removed.
If `index` is the symbol `APPEND`, returns a new array with the provided `value` appended.
If `index` is the symbol `PREPEND`, returns a new array with the provided `value` prepended.
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
| `index` | `undefined` \| `number` \| typeof [`APPEND`](README.md#append-1) \| typeof [`PREPEND`](README.md#prepend-1) | The index of the item of the array to update. |
| `value` | typeof [`REMOVE`](README.md#remove-1) \| `T` | The value to set the item to. |

#### Returns

`T`[]

A new updated array or the same `array` if no change was necessary.

**`Example`**

```typescript
const result = setItem(["a", "b"], 1, "c")
// ["a", "c"]
```

#### Defined in

[tools/setItem.ts:23](https://github.com/nevoland/unchangeable/blob/b908e22/lib/tools/setItem.ts#L23)

___

### setProperty

▸ **setProperty**<`T`, `K`\>(`object?`, `key?`, `value?`): `T`

Returns a new object with `object[key]` set to `value` if `object[key]` is strictly different from `value`. Otherwise, returns the provided `object`.
If `key` is `undefined`, returns the `object` untouched.
If `value` is `undefined`, ensures that the returned object does not contain the `key`.
If `object` is `undefined`, it is considered as an `EMPTY_OBJECT`.

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

[tools/setProperty.ts:22](https://github.com/nevoland/unchangeable/blob/b908e22/lib/tools/setProperty.ts#L22)

___

### undefinedIfEmpty

▸ **undefinedIfEmpty**<`T`\>(`value?`): `undefined` \| `T`

Returns `undefined` if the value is empty.

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `value?` | `T` | The value to check. |

#### Returns

`undefined` \| `T`

`undefined` if the value is empty, the value otherwise.

#### Defined in

[tools/undefinedIfEmpty.ts:9](https://github.com/nevoland/unchangeable/blob/b908e22/lib/tools/undefinedIfEmpty.ts#L9)
