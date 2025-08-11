[**unchangeable**](../README.md) • **Docs**

***

[unchangeable](../README.md) / WithoutEmpty

# Type Alias: WithoutEmpty\<T\>

> **WithoutEmpty**\<`T`\>: `T` *extends* readonly infer U[] ? readonly `Exclude`\<`U`, [`Empty`](Empty.md)\>[] : `T` *extends* `object` ? `{ [K in keyof T as T[K] extends Empty ? never : K]: Exclude<T[K], Empty> }` : `T`

## Type Parameters

• **T**

## Defined in

[types/WithoutEmpty.ts:3](https://github.com/nevoland/unchangeable/blob/90aff8eb074821c44b2befe353f53ae1546bb16f/lib/types/WithoutEmpty.ts#L3)
