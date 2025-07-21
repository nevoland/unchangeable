[**unchangeable**](../README.md) • **Docs**

***

[unchangeable](../README.md) / WithoutEmpty

# Type Alias: WithoutEmpty\<T\>

> **WithoutEmpty**\<`T`\>: `T` *extends* readonly infer U[] ? readonly `Exclude`\<`U`, [`Empty`](Empty.md)\>[] : `T` *extends* `object` ? `{ [K in keyof T as T[K] extends Empty ? never : K]: Exclude<T[K], Empty> }` : `T`

## Type Parameters

• **T**

## Defined in

[types/WithoutEmpty.ts:3](https://github.com/nevoland/unchangeable/blob/ad66755f095504a94d40a3a96d1734780b3bf9ee/lib/types/WithoutEmpty.ts#L3)
